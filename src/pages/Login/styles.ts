import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background: #FAFAFA;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

export const TitleContainer = styled.div`
  margin-bottom: 40px;
`;

export const WelcomeTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;
  text-align: center;
  color: #333333;
  opacity: 0.9;
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  line-height: 120%;

  text-transform: uppercase;

  color: #333333;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    max-width: 400px; /* ou qualquer outra largura máxima que você queira */
    flex: 1;
  }

`;
