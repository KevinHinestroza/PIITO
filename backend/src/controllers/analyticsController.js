import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAnalytics = async (req, res) => {
  // Aggregate votes by party and territory
  const analytics = await prisma.electoralAggregate.groupBy({
    by: ['party'],
    _sum: { votes: true },
    where: { table: { pollingPlace: { territoryId: req.query.territoryId } } },
  });
  res.json(analytics);
};
