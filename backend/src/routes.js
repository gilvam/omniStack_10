const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// index -> show list
// show -> show only one ( details )
// store -> create
// update -> ...
// destroy -> delete

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

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
