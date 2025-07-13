import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { endpoint } = req.query;

  if (!endpoint) {
    return res.status(400).json({ error: "Missing endpoint" });
  }

  const url = `https://collectionapi.metmuseum.org/public/collection/v1/${endpoint}`;

  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching from MET:", err);
    return res.status(500).json({ error: "Failed to fetch from MET" });
  }
}
