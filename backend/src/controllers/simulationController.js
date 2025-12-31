import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const runSimulation = async (req, res) => {
  const { name, description, parameters } = req.body;
  // Simple simulation logic: adjust votes based on parameters
  const baseData = await prisma.electoralAggregate.findMany();
  const results = baseData.map(agg => ({
    ...agg,
    votes: agg.votes * (parameters.multiplier || 1),
  }));
  const simulation = await prisma.simulation.create({
    data: { name, description, parameters, results, userId: req.user.id },
  });
  res.json(simulation);
};
