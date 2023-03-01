import { Route, Routes } from 'react-router-dom';
import { Historic } from '../pages/Historic';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { Profile } from '../pages/Profile';
import { Users } from '../pages/Users';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/orders" element={<Home />} />
      <Route path="/historic" element={<Historic />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/users" element={<Users />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/logout" element={<h1>Sair</h1>} />
    </Routes>
  );
}

export default AppRoutes;
