// // pages/api/register-ip.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { saveToDatabase } from "@/utils/database"; // Tu lógica para guardar datos

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const ip =
//     req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
//     req.socket.remoteAddress;

//   await saveToDatabase({ ip, timestamp: new Date() }); // Guardar en tu BD

//   res.status(200).json({ message: "IP registrada", ip });
// }
