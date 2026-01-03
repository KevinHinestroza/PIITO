import { segmentCollection } from "../services/segmentationService.js";

export async function runSegmentation(req, res) {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({ error: "Datos inválidos" });
    }

    const segmented = segmentCollection(data);

    res.json({
      total: segmented.length,
      results: segmented,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en segmentación estratégica" });
  }
}
