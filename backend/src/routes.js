const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;


/**
 * tipos de parâmetro:
 *    - Query params: GET
 *        uso: req.query
 *        desc: incorporado na url ( filtros, ordenação, paginação, ...)
 *        ex: localhost:3333/users?search=geraldo
 *
 *    - Route params: PUT, DELETE
 *        uso: req.params
 *        desc: identificar um recurso na alteraçõa ou remoção
 *        ex: localhost:3333/users/324235
 *
 *    - Body: POST, PUT, PATH
 *        uso: req.body
 *        desc: dados apra criação ou alteração de um registro
 *        ex:
 */
