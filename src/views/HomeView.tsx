import { useState } from 'react';

// ** Types
import { AnimatePresence } from 'framer-motion';

// ** Constants
import { SLIDES } from '@/constants/slides.const';

// ** Style Components
import { AppContainer, NextButton, PortfolioButton, PrevButton } from './HomeViewStyles';

// ** Components
import MatrixBackground from '@/components/MatrixBackground/MatrixBackground';
import Slide from '@/components/Slide/Slide';

export default function HomeView() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <AppContainer>
      <MatrixBackground />
      <AnimatePresence mode="wait" initial={false}>
        {SLIDES[current] && <Slide key={current} data={SLIDES[current]} />}
      </AnimatePresence>
      <NextButton onClick={nextSlide}>Siguiente →</NextButton>
      {current === 0 ? (
        <a href="https://my-portfolio-rafalamao.vercel.app/" target="_blank">
          <PortfolioButton>Portafolio</PortfolioButton>
        </a>
      ) : (
        <PrevButton onClick={prevSlide}>← Anterior</PrevButton>
      )}
    </AppContainer>
  );
}
