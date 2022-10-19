import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import './social.css';

const Social = () => {
  return (
    <div className="home__social">
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
  );
};

export default Social;
