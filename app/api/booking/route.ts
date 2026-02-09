import { getServicePricing, calculateDeposit } from "@/lib/bookingPricing";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const serviceLabel = String(body.service ?? "");
    const servicePricing = getServicePricing(serviceLabel);
    const depositAmount = calculateDeposit(servicePricing.totalPrice);

    const booking = await prisma.booking.create({
      data: {
        name: body.name ?? "",
        email: body.email ?? "",
        service: serviceLabel,
        date: body.date ? new Date(body.date) : new Date(),
        status: "draft",
        paymentStatus: "unpaid",
        totalAmount: servicePricing.totalPrice,
        depositAmount
      }
    });

    return NextResponse.json({ booking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Unable to create booking." }, { status: 400 });
  }
}
