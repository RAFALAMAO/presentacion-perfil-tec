import { useState } from 'react';

// ** Types
import { AnimatePresence } from 'framer-motion';

// ** Constants
import { SLIDES } from '@/constants/slides.const';

// ** Style Components
import { AppContainer, NextButton, PortfolioButton, PrevButton } from './HomeViewStyles';

// ** Components
import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation';
import Slide from '@/components/Slide/Slide';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
      <BackgroundAnimation />
      <AnimatePresence mode="wait" initial={false}>
        {SLIDES[current] && <Slide key={current} data={SLIDES[current]} footer={`${current + 1}/${SLIDES.length}`} />}
      </AnimatePresence>
      <NextButton onClick={nextSlide}>Siguiente <FaArrowRight size={9} style={{marginLeft: '5px'}} /></NextButton>
      {current === 0 ? (
        <a href="https://my-portfolio-rafalamao.vercel.app/" target="_blank">
          <PortfolioButton>Portafolio</PortfolioButton>
        </a>
      ) : (
        <PrevButton onClick={prevSlide}><FaArrowLeft size={9} style={{marginRight: '5px'}} /> Anterior</PrevButton>
      )}
    </AppContainer>
  );
}
