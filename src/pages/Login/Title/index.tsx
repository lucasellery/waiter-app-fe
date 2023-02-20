import React from 'react';
import { TitleContainer, WelcomeTitle, MainTitle } from './styles';

export function Title() {
  return (
    <>
      <TitleContainer>
        <WelcomeTitle>Bem-vindo(a) ao</WelcomeTitle>
        <MainTitle>
          <b>WAITER</b>
          <span style={{ fontWeight: 300 }}>APP</span>
        </MainTitle>
      </TitleContainer>
    </>
  );
}
