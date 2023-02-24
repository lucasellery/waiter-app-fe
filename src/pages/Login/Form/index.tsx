import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

import { FormContainer, Input, Label, WarningLabel, PasswordContainer, PasswordInputContainer } from './styles';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const temporaryPass = '1234';

export function Form() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const isButtonDisabled = formValues.email.length <= 0 || formValues.password.length < 4;
  const incorrectPasswordLabel = isPasswordIncorrect ? 'Senha incorreta. Tente novamente.' : 'Senha é obrigatória e deve ter no mínimo 4 caracteres.';

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handleIsPasswordIncorrect() {
    if (formValues.password !== temporaryPass || formValues.password.length < 4) {
      setIsPasswordIncorrect(true);
    }

    setIsPasswordIncorrect(false);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValues.password !== temporaryPass) {
      setIsPasswordIncorrect(true);
      return;
    }

    setIsPasswordIncorrect(false);
    navigate('/dashboard/orders');
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues({...formValues, [name]: value});
    handleIsPasswordIncorrect();
  }

  console.log(formValues);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="email" id='email'>E-mail</Label><br />
      <Input
        type="email"
        id='email'
        placeholder='Seu e-mail de acesso'
        name='email'
        className='email'
        value={formValues.email}
        onChange={handleChange}
        style={{ marginBottom: '2rem' }}
      />

      <br />

      <PasswordContainer>
        <Label htmlFor="password" id='password' className='password'>Senha</Label><br />
        <PasswordInputContainer>
          <div className="password-container">
            <Input
              type={showPassword ? 'text' : 'password'}
              id='password'
              className='password'
              name='password'
              placeholder='Informe sua senha'
              value={formValues.password}
              onChange={handleChange}
              style={{ borderColor: isPasswordIncorrect ? '#D73035' : '#CCCCCC' }}
            />
            <i className="password-toggle-icon" onClick={toggleShowPassword}>
              {!showPassword && <AiOutlineEye size={24} color="#666666" />}
              {showPassword && <AiOutlineEyeInvisible size={24} color="#666666" />}
            </i>
          </div>
        </PasswordInputContainer>
        {isPasswordIncorrect && (
          <WarningLabel>
            <RiErrorWarningLine />
            {incorrectPasswordLabel}
          </WarningLabel>
        )}
      </PasswordContainer>

      <Button type="submit" disabled={isButtonDisabled || isPasswordIncorrect}>
        Fazer login
      </Button>
    </FormContainer>
  );
}
