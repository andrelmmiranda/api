const express = require('express');
const app = express();
const PORT = 3000;
const dados = require('./dados');

app.get('/', (req, res)=>{
  res.json(dados);
});

app.listen(PORT, ()=>{
  console.log(`servidor rodando na porta ${PORT} ==> http://localhost:${PORT}`);
});
