import Avatar from '../assets/avatar.png?url';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id='inicio'
      className='relative w-full'
    >
      <div className='relative flex gap-24 z-10 px-4 w-full'>
        <img
          src={Avatar}
          className='m-auto w-1/2 h-1/2 rounded-full shadow-lg mb-4'
          alt='Avatar'
        />
        <div>
          <h1 className='text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 mb-4'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Hola, soy Juanma Espinola')
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                loop: true,
                delay: 75, // Velocidad de escritura
              }}
            />
          </h1>
          <p className=' text-white '>
            Soy un desarrollador fullstack en constante aprendizaje. Durante mi
            formación y en proyectos personales, he adquirido experiencia básica
            en tecnologías como React, Node.js y bases de datos SQL y NoSQL. Me
            apasiona construir aplicaciones web funcionales y estoy siempre en
            búsqueda de nuevos retos que me permitan mejorar mis habilidades. He
            trabajado en proyectos académicos y personales donde he implementado
            soluciones simples, pero eficientes, y he aprendido la importancia
            de escribir código limpio y mantenible. Disfruto colaborando en
            equipos y compartiendo ideas para crecer profesionalmente. Estoy
            entusiasmado por la oportunidad de seguir aprendiendo y contribuir
            en proyectos reales, y me comprometo a seguir desarrollándome en el
            ámbito del desarrollo web, adaptándome a las nuevas tecnologías y
            metodologías ágiles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
