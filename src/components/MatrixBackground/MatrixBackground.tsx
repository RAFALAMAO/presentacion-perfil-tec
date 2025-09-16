// src/components/MatrixBackground.tsx
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
`;

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Config
    const chars = '01▮▯░▒▓∷≡⟂⊷⊶◦•+×=<>[]{}#%&@';
    const fontSize = 16; // CSS px
    const columnWidth = fontSize;
    const columns = Math.ceil(window.innerWidth / columnWidth);

    // State per column
    const drops: {
      y: number; // current y in rows
      speed: number; // rows per frame
      hue: number; // color variation
      glow: number; // glow strength
    }[] = new Array(columns).fill(0).map(() => ({
      y: Math.floor(Math.random() * -50),
      speed: Math.random() * 0.09,
      hue: 195 + Math.random() * 30, // blue-cyan range
      glow: 0.6 + Math.random() * 0.8,
    }));

    ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

    const draw = () => {
      // Fade the entire canvas slightly to create trails
      ctx.fillStyle = 'rgba(5, 10, 20, 1)'; // dark translucent
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      for (let i = 0; i < columns; i++) {
        const drop = drops[i];
        const x = i * columnWidth;
        const yPx = drop.y * fontSize;

        // Head character (brighter)
        const headChar = chars[Math.floor(Math.random() * chars.length)];
        const headColor = `hsl(${drop.hue}, 100%, 75%)`;
        ctx.shadowColor = headColor;
        ctx.shadowBlur = 8 * drop.glow;
        ctx.fillStyle = headColor;
        ctx.fillText(headChar, x, yPx);

        // Tail character (dimmer)
        const tailChar = chars[Math.floor(Math.random() * chars.length)];
        const tailY = yPx - fontSize * 1.2;
        ctx.shadowBlur = 2 * drop.glow;
        ctx.fillStyle = `hsla(${drop.hue}, 100%, 60%, 0.6)`;
        ctx.fillText(tailChar, x, tailY);

        // Occasionally add a faint afterglow
        if (Math.random() < 0.15) {
          ctx.shadowBlur = 1;
          ctx.fillStyle = `hsla(${drop.hue}, 100%, 55%, 0.3)`;
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, tailY - fontSize);
        }

        // Move drop
        drop.y += drop.speed;

        // Reset when out of view with some randomness
        if (yPx > window.innerHeight + fontSize * 10) {
          drop.y = Math.floor(-Math.random() * 50);
          drop.speed = Math.random() * 0.09;
          drop.hue = 195 + Math.random() * 30;
          drop.glow = 0.6 + Math.random() * 0.8;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    // Prime background
    ctx.fillStyle = 'rgb(5, 10, 20)';
    ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    draw();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
}
