import styled from 'styled-components';
import { RiHomeLine } from 'react-icons/ri';

export const Container = styled.div`
  margin-bottom: 3rem;

  display: flex;
  flex-flow: row nowrap;

  align-items: center;
  justify-content: space-between;

  margin-right: 1.875rem;

  h1 {
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #333333;

    display: flex;
    align-items: center;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #666666;
    opacity: 0.9;
    white-space: nowrap;
  }
`;

export const TitleContainer = styled.div`

`;

export const HomeIcon = styled(RiHomeLine)`
  margin-right: 12.43px;
`;
