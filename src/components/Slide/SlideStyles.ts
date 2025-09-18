import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const SlideContainer = styled(motion.div)<{ styleType?: string }>`
  position: relative;
  z-index: 2;
  height: 91%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 2rem;
  border: 1px solid #cfe9ff;
  border-radius: 10px;
  color: #cfe9ff;

  ${({ styleType }) =>
    styleType === 'dark' &&
    css`
      background-color: rgba(6, 20, 43, 0.9);
      box-shadow: 0 0 20px rgba(10, 31, 68, 0.5);
      color: #cce4ff;
    `}
  ${({ styleType }) =>
    styleType === 'light' &&
    css`
      background-color: rgba(230, 240, 255, 0.9);
      box-shadow: 0 0 20px rgba(230, 240, 255, 0.5);
      color: #1e3a8a;
    `}
  ${({ styleType }) =>
    styleType === 'gradient' &&
    css`
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(0, 191, 255, 0.9));
      box-shadow: 0 0 20px rgba(0, 191, 255, 0.5);
      color: white;
    `}
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const Image = styled.img`
  width: 180px;
  border-radius: 50%;
  margin-top: 1rem;
`;

export const Content = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-top: 1rem;
`;

export const ImgWithTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  margin: auto 5rem;
  margin-bottom: 80px;
`;

export const TextRightImg = styled.div`
  text-align: left;
  font-size: large;
  height: 100%;
  margin-top: 3rem;
`;

export const LeftImgsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  height: 100%;
  margin: auto 5rem;
  margin-bottom: 80px;
`;

export const LeftImg = styled.img<{ cover: boolean }>`
  ${({ cover }) => (cover ? 'object-fit: cover;' : '')}
  width: 250px;
  border-radius: 10px;
  margin-top: 1rem;
`;
