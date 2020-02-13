const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// https://cloud.mongodb.com/
mongoose.connect('mongodb+srv://admin:admin@cluster0-miarq.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors()); // cors para url específica -> app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // entender requisições com o formato JSON
app.use(routes);

app.listen(3333);
