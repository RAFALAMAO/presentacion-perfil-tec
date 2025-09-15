import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

// ** Styles
import './index.css';

// ** Components
import App from './App.tsx';
import ErrorBoundary from './components/Shared/ErrorBoundary/ErrorBoundary.tsx';

// ** Context
import { AppContextProvider } from './context/app/reducer.tsx';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ErrorBoundary>,
);
