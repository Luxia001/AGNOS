import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// 📥 GET: ดึงข้อมูลรายชื่อผู้ป่วยทั้งหมด
export async function GET() {
  try {
    const patients = await prisma.patients.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(patients, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

// 📤 POST: ลงทะเบียนผู้ป่วยใหม่
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ตัวอย่างการทำ Validation เบื้องต้น
    const {
      firstName,
      lastName,
      email,
      dateOfBirth,
      gender,
      phone,
      language,
      address,
      nationality,
      emergencyContact,
      religion,
    } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields (Firstname, Lastname, Email)" },
        { status: 400 },
      );
    }

    // ตรวจสอบ Email ซ้ำ (Prisma จะ error เองถ้าไม่เช็ก แต่เช็กก่อนจะส่งข้อความที่ชัดเจนกว่าได้)
    const existingPatient = await prisma.patients.findUnique({
      where: { email },
    });

    if (existingPatient) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    // สร้างข้อมูลใหม่
    const newPatient = await prisma.patients.create({
      data: {
        firstName,
        middleName: body.middleName || "",
        lastName,
        dateOfBirth: new Date(dateOfBirth), // แปลง string เป็น Date Object
        gender,
        phone,
        email,
        language,
        address,
        nationality,
        emergencyContact,
        religion,
      },
    });

    return NextResponse.json(newPatient, { status: 201 });
  } catch (error: any) {
    console.error("POST_PATIENT_ERROR:", error);

    // จัดการ Error กรณี Unique Constraint จาก Prisma (เช่น Email ซ้ำ)
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to create patient" },
      { status: 500 },
    );
  }
}
