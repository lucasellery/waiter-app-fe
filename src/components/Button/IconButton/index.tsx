import { Container, Button } from './styles';

interface IconButtonProps {
  icon: React.ReactElement;
  label: string;
}

export function IconButton({icon, label, ...rest}: IconButtonProps) {
  return (
    <Container>
      <Button>
        <i>{icon}</i>
        <p>{label}</p>
      </Button>
    </Container>
  );
}
