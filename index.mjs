import express from "express";
import Archivo from "./read.mjs";

const app = express();
const PORT = 3000;

const visitas = {
  items: 0,
  item: 0,
};

app.get("/items", async (req, res) => {
  visitas.items = visitas.items + 1;
  const file = new Archivo("productos.txt");
  const products = await file.leerArchivo();
  res.json({ items: products, cantidad: products.length });
});

app.get("/item-random", async (req, res) => {
  visitas.item = visitas.item + 1;
  const file = new Archivo("productos.txt");
  const products = await file.leerArchivo();
  const randomItem = products[Math.floor(Math.random() * products.length)];
  res.json({ item: randomItem });
});

app.get("/visitas", (req, res) => {
  res.json({ visitas });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto: ${PORT}`);
});

server.on("error", (error) => console.log(`Error en el servidor: ${error}`));
