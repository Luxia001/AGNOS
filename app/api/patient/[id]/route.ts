import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const patientId = parseInt(id);

    if (isNaN(patientId)) {
      return NextResponse.json(
        { error: "Invalid Patient ID" },
        { status: 400 },
      );
    }
    const patient = await prisma.patients.findUnique({
      where: {
        id: patientId,
      },
    });

    if (!patient) {
      return NextResponse.json({ error: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json(patient, { status: 200 });
  } catch (error) {
    console.error("GET_PATIENT_DETAIL_ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
