import React from 'react';
import {
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
} from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ToDo from '../../Assets/projects/todo.webp';
import Pokedex from '../../Assets/projects/pokedex.png';
import Stone from '../../Assets/projects/stone.webp';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'ToDo List',
      details:
        'Projeto desenvolvido com React, Typescript, Redux e Styled Components. Ele permite cadastrar, editar e remover tarefas utilizando uma API em Node.js e um banco de dados Postgresql',
      languages: [
        <SiTypescript />,
        <SiReact />,
        <SiRedux />,
        <SiStyledcomponents />,
        <SiNodedotjs />,
        <SiPostgresql />,
      ],
      img: ToDo,
      repo: 'https://github.com/luizchaaves/interface-to-do-list',
      site: 'https://devluiz-todolist.netlify.app/',
    },
    {
      id: 2,
      name: 'Pokédex',
      details:
        'A Pokédex é uma aplicação web interativa que exibe uma lista de Pokémon e fornece detalhes sobre cada um deles. Foi desenvolvido com React, TypeScript, Styled-components, React Query e PokeAPI.',
      languages: [<SiTypescript />, <SiReact />, <SiStyledcomponents />],
      img: Pokedex,
      repo: 'https://github.com/luizchaaves/interface-pokedex',
      site: 'https://devluiz-pokedex.netlify.app/',
    },
    {
      id: 3,
      name: 'Stone Challenge',
      details:
        'Projeto desenvolvido como parte do desafio proposto pela Stone para criar uma aplicação de conversão de valores de dólar para real. A aplicação utiliza tecnologias modernas como React, React Query, Context API, TypeScript e Styled Components',
      languages: [<SiTypescript />, <SiReact />, <SiStyledcomponents />],
      img: Stone,
      repo: 'https://github.com/luizchaaves/stone-challenge',
      site: 'https://devluiz-stone.netlify.app/',
    },
  ];

  const [projectShowDetail, setProjectShowDetail] = React.useState(null);

  return (
    <section className="section section__projects" id="projects">
      <div className="projects__container container">
        <div className="projects__container-title">
          <h2 className="projects__title">Projetos</h2>
        </div>

        <div className="projects__content">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project__card"
              onMouseOver={() => setProjectShowDetail(project.id)}
              onMouseOut={() => setProjectShowDetail(null)}
            >
              <div className="project__img">
                <img src={project.img} alt="" />
              </div>
              <div className="project__info">
                <span>{project.name}</span>
                <div className="project__skills">
                  {project.languages.map((language, index) => (
                    <div key={index}>{language}</div>
                  ))}
                </div>
              </div>
              <div
                className={`project__description ${
                  projectShowDetail === project.id && 'showDetail'
                }`}
              >
                <div className="project__description-text">
                  <h4>{project.name}</h4>
                  <p>{project.details}</p>
                </div>
                <div className="project__container__description-link">
                  <div className="project__description-link">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Visualizar repositório <AiOutlineArrowRight />
                    </a>
                  </div>
                  {project.site && (
                    <div className="project__description-link">
                      <a href={project.site} target="_blank" rel="noreferrer">
                        Visitar site <AiOutlineArrowRight />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
