export function calculateAffinityScore(person) {
  let score = 0;

  if (person.politicalInterest) score += person.politicalInterest * 0.3;
  if (person.voteProbability) score += person.voteProbability * 0.4;
  if (person.mobilizationProbability) score += person.mobilizationProbability * 0.3;

  return Math.min(score, 1);
}

export function calculateVolatility(person) {
  if (!person.volatilityIndex) return 0.5;
  return person.volatilityIndex;
}

