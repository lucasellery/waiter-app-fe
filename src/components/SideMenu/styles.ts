import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface Props {
  activeMenu?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 150px;
  width: 130px;
  height: 100vh;

  padding: 40px 0px 0px;

  background: #FFFFFF;
  box-shadow: 10px 0px 32px rgba(204, 204, 204, 0.1);

  li {
    list-style-type: none;

    a {
      text-decoration: none;
    }
  }
`;

export const Nav = styled(NavLink)<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ activeMenu }) => activeMenu ? '#D73035' : '#666666'};

  p {
    white-space: nowrap;
    margin-bottom: 8px;
  }

  hr {
    border-bottom: ${({ activeMenu }) => activeMenu && '1.5px solid #D73035'} ;
    color: ${({ activeMenu }) => activeMenu && '#D73035'};
    width: ${({ activeMenu }) => activeMenu && '12px'};
    display: ${({ activeMenu }) => !activeMenu && 'none'}
  }

  &:hover {
    color: #D73035;
  }
`;

export const MainContent = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: -50px;
  }
`;

export const SecondaryContent = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
