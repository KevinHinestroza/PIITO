/**
 * Segmentación estratégica electoral
 * Clasifica entidades en categorías útiles para campaña
 */

export function segmentEntity(entity) {
  const score = entity.score || 0;
  const participation = entity.participationRate || 0;
  const volatility = entity.volatility || "media";

  if (score >= 80 && participation >= 0.6) {
    return "voto_seguro";
  }

  if (score >= 50 && volatility !== "alta") {
    return "persuadible";
  }

  if (participation < 0.4 && score >= 40) {
    return "abstencionista_recuperable";
  }

  return "oposicion";
}

export function segmentCollection(collection = []) {
  return collection.map(item => ({
    ...item,
    segment: segmentEntity(item),
  }));
}
