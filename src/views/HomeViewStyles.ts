import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  padding: 0.6rem 1.2rem;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
`;

export const PrevButton = styled.button`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  padding: 0.6rem 1.2rem;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
`;

export const PortfolioButton = styled.button`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  padding: 0.6rem 1.2rem;
  background-color: #811e8aff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
`;
