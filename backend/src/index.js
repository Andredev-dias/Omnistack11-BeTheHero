const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

//autorização para todo front end acessar a aplicação
app.use(cors());

app.use(express.json());

app.use(routes);

// GET: buscar uma informação no backend
//POST: criar uma infomração no backend
//put: alterar uma infomração no backend
//delete: deletar a informação no backend

/*tipos de parametros
    query:parametros nomeados enviados na rota apos "?"" (para filtros, paginação )'/users?name=André'
    route:parametros para identificar recursos   '/users/:id'
    request body: corpo da requisição, utilizado para criar ou alterar recursos
*/ 

/*
banco
Driver: SELECT * FROM users
QUery Builder: table('users').select('*').where()
*/

app.listen(3333);