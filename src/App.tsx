import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './pages/Home';

export function App() {
  return (
    <>
      <Home />
      <ToastContainer position="bottom-center" />
    </>
  );
}
