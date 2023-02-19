import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

export function Button({ onClick, disabled, children, type }: ButtonProps) {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </ButtonContainer>
  );
}
