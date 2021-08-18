import express from "express";

const app = express();
const PORT = 8080;

let productos = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/productos/listar", (req, res) => {
  res.json({ res: productos });
});

app.get("/api/productos/listar/:id", (req, res) => {
  const product = productos.find((prod) => prod.id === Number(req.params.id));
  if (!product) {
    res.json({ error: "Producto no encontrado" });
  }
  res.json({ res: product });
});

app.post("/api/productos/guardar", (req, res) => {
  const newProduct = {
    id: productos.length + 1,
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  productos = [...productos, newProduct];
  res.json({ res: newProduct });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto: ${PORT}`);
});

server.on("error", (error) => console.log(`Error en el servidor: ${error}`));
