const http = require("http");
const servidor = http.createServer((req, res) => {
  console.log("Se realizó con exito una petición");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end("<h1>hola profe como ta</h1>");
});
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log("El servidor está escuchando");
});
