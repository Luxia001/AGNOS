import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient(); // ว่างไว้ได้เลย เพราะ v5 อ่านจาก env อัตโนมัติ

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
