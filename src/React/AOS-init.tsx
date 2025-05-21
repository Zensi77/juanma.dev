import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Configuración personalizada (opcional)
    });
  }, []);

  return null;
};

export default AOSInitializer;
