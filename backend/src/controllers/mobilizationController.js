import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getEvents = async (req, res) => {
  const events = await prisma.mobilizationEvent.findMany({ include: { territory: true } });
  res.json(events);
};

export const createEvent = async (req, res) => {
  const event = await prisma.mobilizationEvent.create({ data: req.body });
  res.json(event);
};
