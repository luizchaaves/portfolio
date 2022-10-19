import React from 'react';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import './skills.css';

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      description:
        'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir',
      icon: <SiHtml5 />,
    },
    {
      id: 2,
      name: 'CSS',
      description:
        'CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML',
      icon: <SiCss3 />,
    },
    {
      id: 3,
      name: 'JavaScript',
      description:
        'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma',
      icon: <SiJavascript />,
    },
    {
      id: 4,
      name: 'React',
      description:
        'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web',
      icon: <SiReact />,
    },
  ];

  const [iconActive, setIconActive] = React.useState(skills[0].id);

  return (
    <section className="section" id="skills">
      <div className="skills__container container">
        <div className="skills__content">
          <div className="skills__container-title">
            <h2 className="skills__title">Habilidades</h2>
          </div>

          <div className="skill__content grid">
            <div className="skills__content-icons">
              {skills.map((skill) => (
                <div
                  className={`skill_icon ${
                    iconActive === skill.id && 'activeIcon'
                  }`}
                  onMouseOver={() => {
                    setIconActive(skill.id);
                  }}
                  key={skill.id}
                >
                  {iconActive === skill.id && <span>{skill.name}</span>}
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="skills__content-description" id="divTexto">
            {skills[iconActive - 1].description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
