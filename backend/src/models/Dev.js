const mongoose = require('mongoose');
const PointSchema = require('./mongooseSchema/PointSchema');

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location:{
    type: PointSchema,
    index: '2dsphere' // índice para facilitar a busca
  }
});

module.exports = mongoose.model('Dev', DevSchema);
