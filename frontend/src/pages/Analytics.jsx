import { analyzePerson } from "../hooks/useAnalytics";

export default function Analytics() {
  const testPerson = {
    politicalInterest: 0.6,
    voteProbability: 0.5,
    mobilizationProbability: 0.4
  };

  const runAnalysis = async () => {
    const result = await analyzePerson(testPerson);
    alert(result.strategicProfile.segmentName);
  };

  return (
    <div>
      <h1>Análisis Estratégico</h1>
      <button onClick={runAnalysis}>
        Analizar Perfil
      </button>
    </div>
  );
}
