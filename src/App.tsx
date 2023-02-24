import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideMenu from './components/SideMenu';
import styled from 'styled-components';
import AppRoutes from './routes/AppRoutes';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export function App() {
  return (
    <Container>
      <SideMenu />
      <AppRoutes />
      <ToastContainer position="bottom-center" />
    </Container>
  );
}
