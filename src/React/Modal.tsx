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
      >
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
            className='text-red-500 border rounded-full px-4 py-2 fixed top-4 right-4 z-90 cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500'
          >
            x
          </button>

          <div className='relative w-full mt-10'>
            <div className='relative h-48 md:h-96 overflow-hidden rounded-lg'>
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

            {project.images.length > 1 && (
              <>
                <button
                  type='button'
                  onClick={prevSlide}
                  className='absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                >
                  <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
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
                  className='absolute top-0 end-5 flex items-center justify-center h-full  cursor-pointer group focus:outline-none'
                >
                  <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
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
                    <span className='sr-only'></span>
                  </span>
                </button>
              </>
            )}
          </div>
          {project.description && (
            <div className=' text-white'>
              <p className='whitespace-pre-line'>{project.description}</p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}
