import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAggregates = async (req, res) => {
  const aggregates = await prisma.electoralAggregate.findMany({ include: { table: { include: { pollingPlace: { include: { territory: true } } } } } });
  res.json(aggregates);
};

export const createAggregate = async (req, res) => {
  const aggregate = await prisma.electoralAggregate.create({ data: req.body });
  res.json(aggregate);
};
