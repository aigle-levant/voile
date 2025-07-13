import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { endpoint = "", ...restQuery } = req.query;

  if (!endpoint || typeof endpoint !== "string") {
    return res.status(400).json({ error: "Missing or invalid endpoint" });
  }

  const searchParams = new URLSearchParams(
    restQuery as Record<string, string>,
  ).toString();
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/${endpoint}?${searchParams}`;

  try {
    const fetchRes = await fetch(url);
    const data = await fetchRes.json();
    return res.status(fetchRes.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Proxy error", detail: err });
  }
}
