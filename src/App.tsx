import { useContext } from 'react';
import { Route, Routes } from 'react-router';

// ** Styles
import './App.css';

// ** Views
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';

// ** Context
import AppContext from './context/app/reducer';

function App() {
  const { state: appCtxState } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path={`${appCtxState.basePath}`} element={<HomeView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}

export default App;
