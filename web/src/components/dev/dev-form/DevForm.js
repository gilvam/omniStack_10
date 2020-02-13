import React, { useEffect, useState } from 'react';
import './DevForm.styles.css';

function DevForm({ onSubmit }) {

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
      { timeout: 10000 });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault(); // previne o comportamento padrão do formulário de ir para outra página não deixando isso

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={ handleSubmit }>
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
  );
}

export default DevForm;
