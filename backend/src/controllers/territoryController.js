import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTerritories = async (req, res) => {
  const territories = await prisma.territory.findMany({ include: { children: true, pollingPlaces: true } });
  res.json(territories);
};

export const createTerritory = async (req, res) => {
  const territory = await prisma.territory.create({ data: req.body });
  res.json(territory);
};
