import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import { WALogo } from '../WALogo';
import { Container, MainContent, SecondaryContent, Nav } from './styles';
import { RiHomeLine } from 'react-icons/ri';
import { TfiReceipt } from 'react-icons/tfi';
import { BsJournalText } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { IconButton } from '../Button/IconButton';
import { useState } from 'react';

function SideMenu() {
  const [activeMenu, setActiveMenu] = useState('0');
  const navigation = window.location.pathname;

  function handleChangeActiveMenu(navItem: number) {
    setActiveMenu('0');

    const navItems: any = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      default: '0',
    };

    const selectedItem = navItems[navItem];
    setActiveMenu(selectedItem);
  }

  useEffect(() => {
    const navigationItem: any = {
      '/dashboard/orders': '1',
      '/dashboard/historic': '2',
      3: '3',
      4: '4',
      5: '5',
      default: '0',
    };

    const currentUrl = navigationItem[navigation];
    setActiveMenu(currentUrl);
  } ,[activeMenu]); // refatorar

  return (
    <Container>
      <WALogo />
      <MainContent>
        <ul>
          <li>
            <Nav
              to="orders"
              onClick={() => handleChangeActiveMenu(1)}
              activeMenu={activeMenu === '1'}
            >
              <RiHomeLine />
              <p>Home</p>
              <hr />
            </Nav>
          </li>
          <li>
            <Nav
              to="historic"
              onClick={() => handleChangeActiveMenu(2)}
              activeMenu={activeMenu === '2'}
            >
              <TfiReceipt />
              <p>Histórico</p>
              <hr />
            </Nav>
          </li>
          <li>
            <Nav
              to="menu"
              onClick={() => handleChangeActiveMenu(3)}
              activeMenu={activeMenu === '3'}
            >
              <BsJournalText />
              <p>Cardápio</p>
            </Nav>
          </li>
          <li>
            <Nav
              to="users"
              onClick={() => handleChangeActiveMenu(4)}
              activeMenu={activeMenu === '4'}
            >
              <FiUsers />
              <p>Usuários</p>
            </Nav>
          </li>
        </ul>
      </MainContent>
      <SecondaryContent>
        <ul>
          <li>
            <Nav
              to="my-profile"
              onClick={() => handleChangeActiveMenu(5)}
              activeMenu={activeMenu === '5'}
            >
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
