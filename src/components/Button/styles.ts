import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  background: ${props => props.disabled ? '#cccccc' : '#D73035'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: 14px 28px;
  border-radius: 44px;
  border: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFF;

  width: 100%;

  transition: all 250ms ease-out;

  &:hover {
      filter: brightness(120%) saturate(120%);
    }
`;
