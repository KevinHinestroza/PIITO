export function classifyTerritory(territory) {
  const turnout = territory.historicalTurnout || 0.5;
  const competitiveness = territory.competitiveness || 0.5;

  if (turnout < 0.4 && competitiveness > 0.6) {
    return "Territorio Clave de Recuperación";
  }

  if (turnout > 0.6 && competitiveness < 0.4) {
    return "Territorio Seguro";
  }

  return "Territorio en Disputa";
}

