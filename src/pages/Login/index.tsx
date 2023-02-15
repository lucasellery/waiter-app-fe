import { Container, Content, TitleContainer, WelcomeTitle, MainTitle, FormContainer } from './styles';

export function Login() {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <WelcomeTitle>Bem-vindo(a) ao</WelcomeTitle>
          <MainTitle>
            <b>WAITER</b>
            <span style={{ fontWeight: 300 }}>APP</span>
          </MainTitle>
        </TitleContainer>

        <FormContainer>
          <label htmlFor="" id='email'>E-mail</label><br />
          <input type="text" id='email' placeholder='Seu e-mail de acesso' />

          <br />

          <label htmlFor="" id='password' className='password'>Senha</label><br />
          <input type="text" id='password' className='password' placeholder='Informe sua senha' />
        </FormContainer>
      </Content>
    </Container>
  );
}
