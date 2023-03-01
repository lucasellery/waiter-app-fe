import { TfiReload } from 'react-icons/tfi';
import { IconButton } from '../../../components/Button/IconButton';
import { Container, HomeIcon, TitleContainer } from './styles';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <h1>
          <HomeIcon size={28} color="#333333" />
        Home
        </h1>
        <p>Acompanhe os pedidos dos clientes</p>
      </TitleContainer>

      <IconButton
        icon={<TfiReload size={18} color='#D73035' />}
        label="Reiniciar o dia"
        direction='row'
        weight='600'
      />
    </Container>
  );
}
