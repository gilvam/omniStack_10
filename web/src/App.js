import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (err) => {
          // console.log('geolocation ERROR: ', err);
        },
        { timeout: 30000 });
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault(); // previne o comportamento padrão do formulário de ir para outra página não deixando isso

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    setDevs([...devs, response.data]); // add new dev

    setGithubUsername('');
    setTechs('');
  }

  return (
      <div id="app">

        <aside>
          <strong>Cadastrar</strong>
          <form onSubmit={ handleAddDev }>
            <div className="input-block">
              <label htmlFor="github-username">Usuário do Gighub</label>
              <input type="text" name="github-username" id="github-username"
                     value={ github_username }
                     onChange={ event => setGithubUsername(event.target.value) }
                     required/>
            </div>
            <div className="input-block">
              <label htmlFor="techs">Tecnologia</label>
              <input type="text" name="techs" id="techs"
                     value={ techs }
                     onChange={ event => setTechs(event.target.value) }
                     required/>
            </div>
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input type="number" name="latitude" id="latitude"
                       value={ latitude } onChange={ event => setLatitude(event.target.value) }
                       required/>
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input type="number" name="longitude" id="longitude"
                       value={ longitude } onChange={ event => setLongitude(event.target.value) }
                       required/>
              </div>
            </div>

            <button type="submit">Salvar</button>
          </form>
        </aside>

        <main>
          <ul>
            { devs.map((dev, i) => (
                <li className="dev-item" key={ dev._id }>
                  <header>
                    <img src={ dev.avatar_url } alt="Gilvam Mourão"/>
                    <div className="user-info">
                      <strong>{ dev.name }</strong>
                      <span>{ dev.techs.join(', ') }</span>
                    </div>
                  </header>
                  <p>{ dev.bio }</p>
                  <a href={ `https://github.com/${ dev.github_username }` }>Acessar perfil no Github</a>
                </li>
            )) }
          </ul>
        </main>

      </div>
  );
}

export default App;
