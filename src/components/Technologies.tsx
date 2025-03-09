import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const techItems = [
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'SCSS', icon: 'devicon-sass-original colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  // { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
  // { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' },
  { name: 'VS Code', icon: 'devicon-visualstudio-plain colored' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Notion', icon: 'devicon-notion-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
];

const CircularTechDisplay: React.FC = () => {
  const [size, setSize] = useState(Math.min(window.innerWidth * 0.8, 400));

  useEffect(() => {
    const handleResize = () => {
      setSize(Math.min(window.innerWidth * 0.8, 400));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const minRadius = 100; // Radio mínimo para evitar colisiones
  const maxRadius = size / 2 - 30; // Ajusta el radio para evitar que se salga del contenedor
  const radius = Math.max(minRadius, maxRadius);

  return (
    <section
      className='flex flex-col items-center justify-center mt-24 px-4'
      id='tecnologias'
      data-aos='fade-up'
    >
      <h2 className='text-3xl font-bold bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-8 text-center'>
        Stack Tecnológico
      </h2>
      <div
        className='relative flex items-center justify-center'
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {techItems.map((tech, index) => {
          const angle = (index / techItems.length) * (2 * Math.PI);
          const iconSize = Math.max(24, size * 0.08); // Ajusta el tamaño del icono para evitar superposiciones
          const x = size / 2 + radius * Math.cos(angle) - iconSize / 2;
          const y = size / 2 + radius * Math.sin(angle) - iconSize / 2;

          return (
            <div
              key={tech.name}
              className='absolute flex flex-col items-center justify-center'
              style={{ left: `${x}px`, top: `${y}px` }}
              data-tooltip-id={tech.name}
            >
              <i
                className={`${tech.icon} text-[clamp(1.5rem,3.5vw,2.5rem)] shadow-lg p-2 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors duration-300`}
                style={{ fontSize: `${iconSize}px` }}
              ></i>
              <Tooltip
                className='bg-gray-800 text-white p-2 rounded-lg z-10 text-sm'
                id={tech.name}
                content={tech.name}
                place='top'
                delayShow={100}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CircularTechDisplay;
