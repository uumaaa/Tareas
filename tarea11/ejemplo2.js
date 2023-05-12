const http = require("http");
const servidor = http.createServer((req, res) => {
  console.log("Se realizó con exito una petición");
  res.end("<h1>Esta es una respuesta lol</h1>");
});
servidor.listen(3000, () => {
  console.log("El servidor está escuchando");
});
