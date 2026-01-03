// ============================================
// ARCHIVO: controllers/personController.js
// ============================================

import { ProfilingService } from "../services/profilingService.js";

// Instanciar el servicio
const profilingService = new ProfilingService();

/**
 * Analiza una persona y asigna un perfil estratégico
 */
export const analyzePerson = async (req, res) => {
  try {
    const person = req.body;
    
    // Validación básica
    if (!person || !person.id) {
      return res.status(400).json({
        error: "Datos de persona inválidos. Se requiere 'id'."
      });
    }

    // Crear o actualizar el perfil usando el servicio
    const profile = profilingService.createProfile(person.id, {
      ...person,
      strategicProfile: assignStrategicProfile(person)
    });

    res.json({
      personId: person.id,
      strategicProfile: profile.strategicProfile,
      profile: profile
    });
  } catch (error) {
    console.error("Error al analizar persona:", error);
    res.status(500).json({
      error: "Error al procesar el análisis de la persona",
      message: error.message
    });
  }
};

/**
 * Función auxiliar para asignar perfil estratégico
 * Esta función determina el perfil basado en características de la persona
 */
function assignStrategicProfile(person) {
  // Lógica de ejemplo para asignar perfil
  const { age, interests = [], occupation, location } = person;
  
  let profile = {
    type: "standard",
    score: 0,
    characteristics: []
  };

  // Ejemplo de lógica de perfilado
  if (age >= 18 && age <= 30) {
    profile.characteristics.push("joven");
    profile.score += 10;
  } else if (age > 30 && age <= 50) {
    profile.characteristics.push("adulto");
    profile.score += 15;
  } else if (age > 50) {
    profile.characteristics.push("senior");
    profile.score += 20;
  }

  // Análisis de intereses
  if (interests.includes("politica")) {
    profile.type = "activista";
    profile.score += 25;
  } else if (interests.includes("tecnologia")) {
    profile.type = "innovador";
    profile.score += 20;
  }

  // Análisis de ocupación
  if (occupation && ["estudiante", "profesional", "empresario"].includes(occupation)) {
    profile.characteristics.push(occupation);
    profile.score += 10;
  }

  return profile;
}


// ============================================
// ARCHIVO: controllers/analyticsController.js
// ============================================

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Obtiene analíticas electorales agregadas
 */
export const getAnalytics = async (req, res) => {
  try {
    const { territoryId } = req.query;

    // Validación de parámetros
    if (!territoryId) {
      return res.status(400).json({
        error: "Se requiere 'territoryId' como parámetro de consulta"
      });
    }

    // Aggregate votes by party and territory
    const analytics = await prisma.electoralAggregate.groupBy({
      by: ['party'],
      _sum: { 
        votes: true 
      },
      _count: {
        id: true
      },
      where: { 
        table: { 
          pollingPlace: { 
            territoryId: territoryId 
          } 
        } 
      },
      orderBy: {
        _sum: {
          votes: 'desc'
        }
      }
    });

    // Calcular totales
    const totalVotes = analytics.reduce((sum, item) => sum + (item._sum.votes || 0), 0);

    // Formatear respuesta
    const formattedAnalytics = analytics.map(item => ({
      party: item.party,
      votes: item._sum.votes || 0,
      count: item._count.id,
      percentage: totalVotes > 0 ? ((item._sum.votes || 0) / totalVotes * 100).toFixed(2) : 0
    }));

    res.json({
      territoryId,
      totalVotes,
      analytics: formattedAnalytics,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error("Error al obtener analíticas:", error);
    res.status(500).json({
      error: "Error al procesar las analíticas",
      message: error.message
    });
  }
};

/**
 * Obtiene analíticas detalladas por territorio
 */
export const getDetailedAnalytics = async (req, res) => {
  try {
    const { territoryId } = req.query;

    if (!territoryId) {
      return res.status(400).json({
        error: "Se requiere 'territoryId'"
      });
    }

    // Obtener datos agregados más detallados
    const [partyAnalytics, pollingPlaceCount, territoryInfo] = await Promise.all([
      // Analíticas por partido
      prisma.electoralAggregate.groupBy({
        by: ['party'],
        _sum: { votes: true },
        _avg: { votes: true },
        _max: { votes: true },
        _min: { votes: true },
        where: {
          table: {
            pollingPlace: {
              territoryId: territoryId
            }
          }
        }
      }),
      
      // Contar lugares de votación
      prisma.pollingPlace.count({
        where: { territoryId: territoryId }
      }),

      // Información del territorio
      prisma.territory.findUnique({
        where: { id: territoryId },
        include: {
          pollingPlaces: {
            take: 5
          }
        }
      })
    ]);

    res.json({
      territory: territoryInfo,
      pollingPlaceCount,
      partyAnalytics,
      generatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error("Error al obtener analíticas detalladas:", error);
    res.status(500).json({
      error: "Error al procesar las analíticas detalladas",
      message: error.message
    });
  }
};

// Cerrar Prisma al finalizar
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
