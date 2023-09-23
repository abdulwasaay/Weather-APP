import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  const route = Routes();
  let element = useRoutes(route);
  return (
    <>
    {element}
    </>
  );
}

export default App;
