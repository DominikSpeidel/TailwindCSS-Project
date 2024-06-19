import { getAuth } from "@clerk/nextjs/server";

export default function handler(req, res) {
  const data = getAuth(req);
  res.status(200).json({ data });
}
