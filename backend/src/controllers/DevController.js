const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username }); // pesquisa se existe usuário dev cadastrado

    if (!dev) {
      const techsArray = techs.split(',').map(tech => tech.trim());
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      const apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`);
      const { name = login, avatar_url, bio } = apiResponse.data;

      dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  }
};
