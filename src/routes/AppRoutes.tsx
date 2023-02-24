import { Route, Routes } from 'react-router-dom';
import { Historic } from '../pages/Historic';
import { Home } from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/orders" element={<Home />} />
      <Route path="/historic" element={<Historic />} />
      <Route path="/menu" element={<h1>Menu</h1>} />
      <Route path="/users" element={<h1>Usuários</h1>} />
      <Route path="/my-profile" element={<h1>Perfil</h1>} />
      <Route path="/logout" element={<h1>Sair</h1>} />
    </Routes>
  );
}

export default AppRoutes;
