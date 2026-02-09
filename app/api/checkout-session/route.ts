import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20"
    })
  : null;

export async function POST(request: Request) {
  if (!stripe || !appUrl) {
    return NextResponse.json(
      { error: "Stripe configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const bookingId = String(body.bookingId ?? "");
    const price = Number(body.price ?? 0);

    if (!bookingId || !Number.isFinite(price) || price <= 0) {
      return NextResponse.json({ error: "Invalid booking payload." }, { status: 400 });
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId }
    });

    if (!booking) {
      return NextResponse.json({ error: "Booking not found." }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "uah",
            unit_amount: Math.round(price * 100),
            product_data: {
              name: "Депозит за бронювання"
            }
          }
        }
      ],
      metadata: {
        bookingId
      }
    });

    await prisma.booking.update({
      where: { id: bookingId },
      data: {
        stripeSessionId: session.id,
        paymentStatus: "pending"
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: "Unable to create checkout session." }, { status: 500 });
  }
}
