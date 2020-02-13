import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {


  return (
      <div id="app">

        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github-username">Usuário do Gighub</label>
              <input type="text" name="github-username" id="github-username" required/>
            </div>
            <div className="input-block">
              <label htmlFor="techs">Tecnologia</label>
              <input type="text" name="techs" id="techs" required/>
            </div>
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input type="text" name="latitude" id="latitude" required/>
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input type="text" name="longitude" id="longitude" required/>
              </div>
            </div>

            <button type="submit">Salvar</button>
          </form>
        </aside>

        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/2046970?s=460&v=4" alt="Gilvam Mourão"/>
                <div className="user-info">
                  <strong>Gilvam Mourão</strong>
                  <span>ReactJS, REact Native, Node.js</span>
                </div>
              </header>
              <p>Apaixonado pelas tecnologias e tendências para desenvolvimento web e mobile.</p>
              <a href="https://github.com/gilvam">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/2046970?s=460&v=4" alt="Gilvam Mourão"/>
                <div className="user-info">
                  <strong>Gilvam Mourão</strong>
                  <span>ReactJS, REact Native, Node.js</span>
                </div>
              </header>
              <p>Apaixonado pelas tecnologias e tendências para desenvolvimento web e mobile.</p>
              <a href="https://github.com/gilvam">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/2046970?s=460&v=4" alt="Gilvam Mourão"/>
                <div className="user-info">
                  <strong>Gilvam Mourão</strong>
                  <span>ReactJS, REact Native, Node.js</span>
                </div>
              </header>
              <p>Apaixonado pelas tecnologias e tendências para desenvolvimento web e mobile.</p>
              <a href="https://github.com/gilvam">Acessar perfil no Github</a>
            </li>
          </ul>
        </main>

      </div>
  );
}

export default App;
