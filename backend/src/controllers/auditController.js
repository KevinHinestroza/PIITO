import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getLogs = async (req, res) => {
  const logs = await prisma.auditLog.findMany({ include: { user: true } });
  res.json(logs);
};
