import styled from 'styled-components';

interface IconButtonProps {
  direction: 'row' | 'column';
  weight?: string;
}

export const Container = styled.div``;

export const Button = styled.button<IconButtonProps>`
  width: 108px;
  height: 108px;
  border: none;
  background-color: transparent;

  display: flex;
  flex-direction: ${(({ direction }) => direction === 'row' ? 'row' : 'column')};
  flex-wrap: nowrap;
  align-items: center;

  text-transform: ease-in-out 300ms;

  p {
    margin-left: ${(({ direction }) => direction === 'row' && '12px')};
    color: ${(({ direction }) => direction === 'row' && '#D73035')};
    white-space: nowrap;
    font-weight: ${(({weight}) => weight)};
  }

  &:hover {
    color: ${(({ direction }) => direction === 'column' && '#D73035')};
    filter: ${(({ direction }) => direction === 'row' && 'brightness(120%) saturate(120%)')};
  }
`;
