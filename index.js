const http = require("http");

function random(min, max, decimal = false) {
  if (decimal) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  return Math.floor(Math.random() * (max - min)) + min;
}

const port = 3000;

const server = http.createServer((req, res) => {
  const obj = {
    id: random(1, 10),
    title: `Producto: ${random(1, 10)}`,
    price: random(0, 9999.99, true),
    thumbnail: random(0, 10),
  };
  res.end(JSON.stringify(obj));
});

server.listen(port, () => console.log(`Server listening on port: ${port}`));
