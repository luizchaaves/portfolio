import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { ReactComponent as Logo } from '../../Assets/Logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__copy">
          <p>© 2022 - Luiz Otávio</p>
        </div>
        <div className="footer__right">
          <div className="footer__icons">
            <a
              href="https://www.linkedin.com/in/luiz-ot%C3%A1vio-chaves-carvalho-b812951b4"
              className="home__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home__social-icon">
                <FiLinkedin />
              </div>
            </a>

            <a
              href="https://github.com/luizchaaves"
              className="home__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home__social-icon">
                <FiGithub />
              </div>
            </a>
          </div>
          <div className="footer__logo">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
