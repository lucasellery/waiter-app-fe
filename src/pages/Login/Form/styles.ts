import styled from 'styled-components';

export const FormContainer = styled.form`
  flex: 1;
  max-width: 400px;
  width: 384px;
  display: block;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 150%;
`;

export const PasswordContainer = styled.div`
  margin-bottom: 2rem;
`;

export const PasswordInputContainer = styled.div`
  .password-container {
    position: relative;
  }

  .password {
    padding-right: 30px; /* Adicione um espaço à direita do campo para o ícone */
  }

  .password-toggle-icon {
    position: absolute;
    top: 60%; /* Centralize o ícone verticalmente */
    right: 15px; /* Alinhe o ícone à direita */
    transform: translateY(-50%); /* Centralize o ícone verticalmente */
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 0px 16px;
  height: 56px;
  border: 1px solid;
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #999999;

  width: 100%;
  margin-top: 8px;
`;

export const WarningLabel = styled.p`
  color: #D73035;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  align-items: center;
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;
