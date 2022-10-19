import React from 'react';
import Data from './Data/Data';
import Social from './Social/Social';
import ScrollDown from './ScrollDown/ScrollDown';
import PhotoProfile from '../../Assets/Luiz.jpg';
import './home.css';

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="teste">
        <div className="home__container container">
          <div className="home__content grid">
            <Social />
            <div className="home__container-photo">
              <div className="home__background-photo">
                <div className="home__photo">
                  <img src={PhotoProfile} alt="Foto de perfil do Luiz Otávio" />
                </div>
              </div>
            </div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default Home;
