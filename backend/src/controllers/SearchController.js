const Dev = require('../models/Dev');
const parseStringAsArray = require('../util/parseStringAsArray');

module.exports = {

  // buscar todos os devs num raio de 10km e filtrar por tecnologias
  async index(request, response) {
    console.log('request.query: ', request.query);

    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: { // procura por resultados perto de uma localização
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000, // distância máxima de 10km
          // $minDistance: 1
        }
      }
    });


    return response.json({ devs });
  },

  async update() {
    // name, techs, avatar, bio, location
  },

  async destroy() {
  }
};


// index -> show list
// show -> show only one ( details )
// store -> create
// update -> ...
// destroy -> delete
