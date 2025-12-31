import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const logAction = async (userId, action, resource, details) => {
  await prisma.auditLog.create({
    data: {
      userId,
      action,
      resource,
      details,
    },
  });
};
