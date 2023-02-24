import { Header } from './Header';
import { Orders } from '../../components/Orders';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Orders />
    </Container>
  );
}
