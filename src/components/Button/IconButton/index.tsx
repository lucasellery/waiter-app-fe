import { Container, Button } from './styles';

interface IconButtonProps {
  icon: React.ReactElement;
  label: string;
  direction: 'row' | 'column';
  weight?: string;
}

export function IconButton({ icon, label, direction, weight, ...rest }: IconButtonProps) {
  return (
    <Container>
      <Button weight={weight} direction={direction}>
        <i>{icon}</i>
        <p>{label}</p>
      </Button>
    </Container>
  );
}
