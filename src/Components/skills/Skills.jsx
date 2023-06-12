import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si';
import './skills.css';

const Skills = () => {
  const skills = React.useMemo(
    () => [
      {
        id: 1,
        name: 'HTML',
        description:
          'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir',
        icon: <SiHtml5 />,
        skill_level: '90%',
      },
      {
        id: 2,
        name: 'CSS',
        description:
          'CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML',
        icon: <SiCss3 />,
        skill_level: '80%',
      },
      {
        id: 3,
        name: 'JavaScript',
        description:
          'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma',
        icon: <SiJavascript />,
        skill_level: '70%',
      },
      {
        id: 4,
        name: 'TypeScript',
        description: '',
        icon: <SiTypescript />,
        skill_level: '65%',
      },
      {
        id: 5,
        name: 'React',
        description:
          'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web',
        icon: <SiReact />,
        skill_level: '75%',
      },
      {
        id: 6,
        name: 'Redux',
        description: '',
        icon: <SiRedux />,
        skill_level: '60%',
      },
      {
        id: 7,
        name: 'StyledComponents',
        description: '',
        icon: <SiStyledcomponents />,
        skill_level: '50%',
      },
    ],
    []
  );

  const [iconActive, setIconActive] = React.useState(skills[0].id);

  React.useEffect(() => {
    var level_skill = document.getElementById('skill__level');
    level_skill.style.width = skills[iconActive - 1].skill_level;
    level_skill.dataset.content = skills[iconActive - 1].skill_level;
  }, [skills, iconActive]);

  return (
    <section className="section" id="skills">
      <div className="skills__container container">
        <div className="skills__content">
          <div className="skills__container-title">
            <h2 className="skills__title">Habilidades</h2>
          </div>

          <div className="skill__container-level">
            0%
            <div className="skill__bar">
              <div className="skill__level" id="skill__level"></div>
            </div>
            100%
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

          {/* <div>
            <div className="skills__content-description" id="divTexto">
              {skills[iconActive - 1].description}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
