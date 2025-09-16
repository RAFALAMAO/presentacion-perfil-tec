import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const SlideContainer = styled(motion.div)<{ styleType?: string }>`
  position: relative;
  z-index: 2;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* Transparent to let the animated background show through */
  background: rgba(0, 0, 0, 0.6);
  margin: 2rem;
  border: 1px solid #cfe9ff;
  color: #cfe9ff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  ${({ styleType }) =>
    styleType === 'light' &&
    css`
      color: #e9f2ff;
    `}
  ${({ styleType }) =>
    styleType === 'gradient' &&
    css`
      color: #ffffff;
    `}
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 180px;
  border-radius: 50%;
  margin-top: 1rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-top: 1rem;
`;

export { Content, Image, Name, SlideContainer, Subtitle, Title };
