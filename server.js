const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const PORT = 80;

app.use(express.static('./public'));

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
