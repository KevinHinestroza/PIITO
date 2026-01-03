import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Segmentation() {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    async function fetchSegmentation() {
      const response = await api.post("/segmentation/segment", {
        data: [
          { id: 1, score: 85, participationRate: 0.7, volatility: "baja" },
          { id: 2, score: 60, participationRate: 0.5, volatility: "media" },
          { id: 3, score: 45, participationRate: 0.3, volatility: "alta" },
        ],
      });

      setSegments(response.data.results);
    }

    fetchSegmentation();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Segmentación Estratégica Electoral
      </h1>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th>ID</th>
            <th>Score</th>
            <th>Participación</th>
            <th>Segmento</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((s) => (
            <tr key={s.id} className="border-b">
              <td>{s.id}</td>
              <td>{s.score}</td>
              <td>{s.participationRate}</td>
              <td className="font-semibold">{s.segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
