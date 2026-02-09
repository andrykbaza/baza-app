import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const booking = await prisma.booking.create({
      data: {
        name: body.name ?? "",
        email: body.email ?? "",
        service: body.service ?? "",
        date: body.date ? new Date(body.date) : new Date()
      }
    });

    return NextResponse.json({ booking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Unable to create booking." }, { status: 400 });
  }
}
