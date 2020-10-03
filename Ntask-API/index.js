//import express from 'express'; exemplo do PDF 02/10/2020
const express = require('express');

//para rotas
//import consign from 'consign'; // exemplo do psf 02/10/2020
var consign = require('consign');

//elias

const PORT = 3000;

const app = express();

// incluir retorno de json formatado 02/10/2020
app.set('json spaces', 4);
/*
// fim

app.get('/tasks', (req, res) => {
  // app.get('/', (req, res) =>
  res.json({
    // status: 'Ntask-API OK!',
    // prettier-ignore
    tasks: [{ title: 'Fazer compras' },
     { title: 'Consertar o pc' }],
  });
});*/

// prettier-ignore
consign()//teste elias segundo nova forma em 2020 elias
.include("db.js")
.then("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);
app.listen(PORT, () => console.log('Ntask API = porta ', PORT)); //auterei do exemplo 2/10/2020
