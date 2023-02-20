import { WALogo } from '../WALogo';
import { Container, MainContent, SecondaryContent, Nav } from './styles';
import { RiHomeLine } from 'react-icons/ri';
import { TfiReceipt } from 'react-icons/tfi';
import { BsJournalText } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { IconButton } from '../Button/IconButton';

const activeStyle = {
  textDecoration: 'underline',
};

const activeClassName = 'underline';

function SideMenu() {
  return (
    <Container>
      <WALogo />
      <MainContent>
        <ul>
          <li>
            <Nav
              to="dashboard"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <RiHomeLine />
              <p>Home</p>
            </Nav>
          </li>
          <li>
            <Nav
              to="historic"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <TfiReceipt />
              <p>Histórico</p>
            </Nav>
          </li>
          <li>
            <Nav to="menu">
              <BsJournalText />
              <p>Cardápio</p>
            </Nav>
          </li>
          <li>
            <Nav to="users">
              <FiUsers />
              <p>Usuários</p>
            </Nav>
          </li>
        </ul>
      </MainContent>
      <SecondaryContent>
        <ul>
          <li>
            <Nav to="my-profile">
              <CgProfile />
              <p>Meu perfil</p>
            </Nav>
          </li>
          <li>
            <Nav to="logout">
              <IconButton
                icon={<AiOutlinePoweroff />}
                label="Sair"
              />
            </Nav>
          </li>
        </ul>
      </SecondaryContent>
    </Container>
  );
}

export default SideMenu;
