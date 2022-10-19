import React from 'react';
import { TbHome } from 'react-icons/tb';
import { TbUser } from 'react-icons/tb';
import { TbFileCode } from 'react-icons/tb';
import { TbPhoto } from 'react-icons/tb';
import { TbMessage2 } from 'react-icons/tb';
import SwitchTheme from '../switchTheme/SwitchTheme';
import useMedia from '../../Hooks/useMedia';
import { ReactComponent as Logo } from '../../Assets/Logo.svg';
import './header.css';

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState('#home');
  const mobile = useMedia('(max-width: 768px)');

  const sections = document.querySelectorAll('main section[id]');
  window.addEventListener('scroll', () => {
    activateMenuCurrentSection();
  });

  function activateMenuCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      const checkpointStart = checkpoint >= sectionTop;
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
      if (checkpointStart && checkpointEnd) {
        setActiveNav(`#${sectionId}`);
      }
    }
  }

  const itensMenu = [
    {
      id: 1,
      href: '#home',
      icon: <TbHome />,
      text: 'INÍCIO',
    },
    {
      id: 2,
      href: '#about',
      icon: <TbUser />,
      text: 'SOBRE',
    },
    {
      id: 3,
      href: '#skills',
      icon: <TbFileCode />,
      text: 'HABILIDADES',
    },
    {
      id: 4,
      href: '#projects',
      icon: <TbPhoto />,
      text: 'PROJETOS',
    },
    {
      id: 5,
      href: '#contact',
      icon: <TbMessage2 />,
      text: 'CONTATO',
    },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo">
          <Logo />
        </div>

        <div
          className={`${
            mobile && mobileMenu && 'nav__menu-mobileActiveContainer'
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></div>

        <div
          className={`${mobile ? 'nav__menu-mobile' : 'nav__menu'} ${
            mobileMenu && 'nav__menu-mobileActive'
          }`}
        >
          <ul className="menu__list grid">
            {itensMenu.map((item) => (
              <li key={item.id} className="menu__item">
                <a
                  href={item.href}
                  className={
                    activeNav === item.href
                      ? 'menu__link active-link'
                      : 'menu__link'
                  }
                  onClick={() => {
                    setActiveNav(item.href);
                    if (mobileMenu) setMobileMenu(!mobileMenu);
                  }}
                >
                  <i className="menu__icon">{item.icon}</i>
                  {item.text}
                </a>
              </li>
            ))}

            <li className="menu__item switch__item">
              <div className="switch__link">
                <SwitchTheme />
              </div>
            </li>
          </ul>
        </div>

        {mobile && (
          <button
            aria-label="menu"
            className={`nav__mobile-button ${
              mobileMenu && 'nav__mobile-buttonActive'
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
      </nav>
    </header>
  );
};

export default Header;
