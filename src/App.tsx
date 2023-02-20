import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideMenu from './components/SideMenu';
import { Home } from './pages/Home';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export function App() {
  return (
    <HomeContainer>
      <SideMenu />
      <Home />
      <ToastContainer position="bottom-center" />
    </HomeContainer>
  );
}
