import { calculateAffinityScore } from "./scoringService.js";

export function assignStrategicProfile(person) {
  const affinity = calculateAffinityScore(person);

  if (affinity > 0.75) {
    return {
      segmentName: "Voto Firme",
      recommendedStrategy: "Movilización directa",
      priority: 1
    };
  }

  if (affinity > 0.45) {
    return {
      segmentName: "Persuadible",
      recommendedStrategy: "Contacto reiterado",
      priority: 2
    };
  }

  return {
    segmentName: "Abstencionista Recuperable",
    recommendedStrategy: "Intervención territorial",
    priority: 3
  };
}

