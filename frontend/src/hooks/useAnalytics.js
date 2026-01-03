import api from "../utils/api";

export async function analyzePerson(person) {
  const res = await api.post("/analytics/person", person);
  return res.data;
}
