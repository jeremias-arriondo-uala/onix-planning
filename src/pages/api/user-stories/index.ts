import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ruta relativa al archivo JSON que quieres leer
  const filePath = path.join(process.cwd(), "src", "data", "data.json");

  // Lee el contenido del archivo JSON
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  console.log(jsonData);
  // Envía el contenido del archivo JSON como respuesta
  res.status(200).json(jsonData);
}
