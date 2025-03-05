import React from 'react';
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
  { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
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
  const radius = 220;
  const containerSize = 400;
  const center = containerSize / 2;

  return (
    <section className='flex space-around mt-12 gap-28 items-center'>
      <h2 className='text-3xl font-bold bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-move'>
        Stack Tecnológico
      </h2>
      <div className='relative w-[400px] h-[400px] flex items-center justify-center'>
        {techItems.map((tech, index) => {
          const angle = (index / techItems.length) * (2 * Math.PI);
          const x = center + radius * Math.cos(angle) - 20;
          const y = center + radius * Math.sin(angle) - 20;

          return (
            <div
              key={tech.name}
              className='absolute flex flex-col items-center justify-center'
              style={{ left: `${x}px`, top: `${y}px` }}
              data-tooltip-id={tech.name}
            >
              <i
                className={`${tech.icon} text-4xl shadow-lg p-2 bg-gray-700 rounded-full`}
              ></i>
              <Tooltip
                className='bg-gray-800 text-white p-2 rounded-lg z-10'
                id={tech.name}
                content={tech.name}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CircularTechDisplay;
