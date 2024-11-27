// pages/api/get-ip.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function getIPAddress(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Obtener IP del cliente
  const ip =
    req.headers["x-forwarded-for"]?.toString().split(",")[0] || // Si estás detrás de un proxy
    req.socket.remoteAddress; // IP directa

  res.status(200).json({ ip });
}
