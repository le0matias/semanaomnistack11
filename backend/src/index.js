const express = require ('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 *  Rota / Recurso
 */

/**
 * Metodos HTTP
 * 
 * GET: Buscar/Listar uma informacao do back-end
 * POST: Criar uma informacao do back-end
 * PUT: Alterar uma informacao do back-end
 * DELETE: Deletar uma informacao do back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query: Parametros nomeados enviados na rota apos o simbolo de ? (filtros, paginacao)
 * 
 * Route params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisicao, utilizado para criar ou alterar recursos
 * 
 * 
 */

/**
 * SQL: MySQL, SQLlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where()
 */



