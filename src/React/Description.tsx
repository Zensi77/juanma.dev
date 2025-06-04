import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DescriptionTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const initAnimation = async () => {
      try {
        const { SplitText } = await import('gsap/SplitText');

        gsap.registerPlugin(SplitText);

        const split = new SplitText(textRef.current, { type: 'words' });

        gsap.from(split.words, {
          duration: 0.8,
          opacity: 0,
          y: 20,
          stagger: 0.1,
          autoAlpha: 0,
          filter: 'blur(10px)',
          ease: 'power2.out',
        });

        return () => {
          split.revert();
        };
      } catch (error) {
        console.error('Error al cargar SplitText:', error);

        gsap.from(textRef.current, {
          duration: 0.5,
          opacity: 0,

          y: 20,
          ease: 'power2.out',
        });
      }
    };

    initAnimation();
  }, []);

  return (
    <p
      ref={textRef}
      className='text-md md:text-lg'
    >
      Desarrollador Full‑Stack |{' '}
      <span className='text-[var(--sec)]'>Angular + Spring / Nodejs</span>
      {' | '}Soy un desarrollador web recién graduado con una profunda pasión
      por crear soluciones funcionales, eficientes y escalables
    </p>
  );
};

export default DescriptionTextAnimation;
