import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import CV from '../../Assets/about/Luiz Otavio Chaves Carvalho - Curriculo.pdf';
import { ReactComponent as ImageLogo } from '../../Assets/about/photo-logo-secundary.svg';
import './about.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="about__container container">
        <div className="about__content grid">
          <div className="about__image">
            {/* <img src={PhotoProfile} alt="" /> */}
            <ImageLogo />
          </div>
          <div className="about__info">
            <h2 className="about__title">Sobre</h2>
            <div className="about__description">
              <p>
                Meu nome é <span>Luiz Otávio Chaves Carvalho</span>, tenho 21
                anos.
              </p>
              <br />
              <p>
                Técnico em Desenvolvimento de Sistemas e Graduando Sistemas de
                Informações, sou um jovem apaixonado por tecnologia e
                programação, principalmente desenvolvimento web, na parte{' '}
                <span>Front-end</span>.
              </p>
              <br />
              <p>
                Como desenvolvedor amo criar interfaces web modernas e desafios,
                além de buscar cada vez mais aprimorar os conhecimentos,
                aprender e desenvolver novas habilidades na área da programação.
              </p>
            </div>

            <a href={CV} download className="button button__download">
              Download CV <AiOutlineDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
