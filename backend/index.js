const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0-miarq.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json()); // entender requisições com o formato JSON

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

app.get('/', (request, response) => {
  response.json({ message: 'Hellow OmniStack' });
});

app.listen(3333);
