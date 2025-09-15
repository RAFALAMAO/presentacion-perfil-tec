import { useContext } from 'react';
import { Link } from 'react-router';

// ** Context
import AppContext from '@/context/app/reducer';

export default function HomeView() {
  const { state: appCtxState } = useContext(AppContext);

  return (
    <>
      <h1>Home view</h1>
      <Link to={`${appCtxState.basePath}/test`}>Test</Link>
    </>
  );
}
