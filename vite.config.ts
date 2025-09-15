import { defineConfig } from 'vite';

// ** Plugins
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: '/presentacion-perfil-tec/',
  plugins: [
    react(),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
    tsconfigPaths(),
  ],
});
