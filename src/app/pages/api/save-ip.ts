// pages/api/save-ip.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
import dotenv from "dotenv";

// dotenv.config();
console.log(process.env.DATABASE_URL);

// Configurar la conexión a PostgreSQL en Railway
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Define esta variable en tu archivo .env
  ssl: {
    rejectUnauthorized: false, // Necesario para Railway
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const data = req.body; // Datos enviados desde el cliente

  try {
    const query = `
      INSERT INTO titin_friend (
        city, country, countrycode, isp, lat, lon, org, query, 
        region, regionname, status, timezone, zip, as
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, 
        $9, $10, $11, $12, $13, $14
      )
    `;
    const values = [
      data.city,
      data.country,
      data.countryCode,
      data.isp,
      data.lat,
      data.lon,
      data.org,
      data.query,
      data.region,
      data.regionName,
      data.status,
      data.timezone,
      data.zip,
      data.as,
    ];

    await pool.query(query, values);

    res.status(200).json({ message: "Datos guardados correctamente" });
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    res.status(500).json({ message: "Error al guardar los datos", error });
  }
}
