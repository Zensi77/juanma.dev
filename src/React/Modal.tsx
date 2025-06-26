import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function AnimatedModal({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => setIsOpen(true), 10); // pequeña pausa para que aplique clases CSS
  };

  const closeModal = () => {
    setIsOpen(false);
    setAnimatingOut(true);
  };

  // Control del carousel
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isOpen && animatingOut) {
      const timeout = setTimeout(() => {
        setShowModal(false);
        setAnimatingOut(false);
      }, 300); // duración de la animación de salida

      return () => clearTimeout(timeout);
    }
  }, [isOpen, animatingOut]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Deshabilitar scroll al abrir el modal
    } else {
      document.body.style.overflow = 'auto'; // Habilitar scroll al cerrar el modal
    }
  }, [showModal]);

  return (
    <>
      <button
        onClick={() => {
          openModal();
        }}
        className='relative w-full'
      >
        {project.isInDevelopment === true && (
          <div className=' flex gap-1 absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded z-10'>
            <div className='p-1 h-1 w-1 my-auto rounded-full bg-red-700 pulse'></div>
            En desarrollo
          </div>
        )}
        <img
          src={`./projects/${project.imagesFolder}/${project.images[0]}`}
          alt={project.title}
          className='w-full h-48 md:h-72 opacity-70 hover:opacity-100 transition-all duration-700'
        />
      </button>
      {showModal && (
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          overlayClassName='fixed inset-0 backdrop-blur-md bg-black bg-opacity-50 flex items-center justify-center transition-all duration-600 z-50'
          className={`bg-slate-800 p-6 rounded-xl shadow-lg max-w-3xl w-full h-3/4 overflow-auto transition-all duration-300 transform ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button
            onClick={closeModal}
            className='text-red-500 fixed top-4 right-4 z-90 cursor-pointer hover:scale-110 transition-transform duration-100'
          >
            X
          </button>
          <div className='relative w-full mt-6'>
            {!project.isInDevelopment && (
              <>
                {' '}
                <div className='relative h-48 md:h-80 overflow-hidden rounded-xl bg-slate-700/60 backdrop-blur-md ring-1 ring-white/10 transform shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500'>
                  {project.images.map((image, index) => (
                    <div
                      key={image}
                      className={`absolute w-full object-contain transition-opacity duration-300 ease-in-out ${
                        index === currentSlide
                          ? 'opacity-100'
                          : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={`./projects/${project.imagesFolder}/${image}`}
                        alt={`Slide ${index + 1}`}
                        className='object-contain w-full h-full rounded-lg'
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.images.length > 1 && (
              <>
                <button
                  type='button'
                  onClick={prevSlide}
                  className='absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                >
                  <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/60'>
                    <svg
                      className='w-4 h-4 text-white rtl:rotate-180'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 6 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 1 1 5l4 4'
                      />
                    </svg>
                    <span className='sr-only'>Previous</span>
                  </span>
                </button>
                <button
                  type='button'
                  onClick={nextSlide}
                  className='absolute top-0 end-5 flex items-center justify-center h-full cursor-pointer group focus:outline-none '
                >
                  <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/60'>
                    <svg
                      className='w-4 h-4 text-white rtl:rotate-180'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 6 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 9 4-4-4-4'
                      />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
          {project.description && (
            <div className=' text-white mt-4'>
              <p className='whitespace-pre-line'>{project.description}</p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}
