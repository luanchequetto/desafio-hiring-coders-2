import React from 'react';
import DefaultTemplate from '../../templates/defaultTemplate';
import logoGama from '../../assets/logo-gama.png'
import './styles.css'


function HomePage() {
  return (
    <DefaultTemplate>
      <div id='home'>
        <img src={logoGama}></img>
        <h2>Desafio HiringCoders#2</h2>
      </div>

    </DefaultTemplate>

  );
}

export default HomePage;