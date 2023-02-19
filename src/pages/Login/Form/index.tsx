import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

import { FormContainer, Input, Label } from './styles';

export function Form() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Dados do formulário:', formValues);
    navigate('/home');
  };


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues({...formValues, [name]: value});
  }

  console.log(formValues);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="" id='email'>E-mail</Label><br />
      <Input
        type="email"
        id='email'
        placeholder='Seu e-mail de acesso'
        name='email'
        value={formValues.email}
        onChange={handleChange}
      />

      <br />

      <Label htmlFor="" id='password' className='password'>Senha</Label><br />
      <Input
        type="password"
        id='password'
        className='password'
        name='password'
        placeholder='Informe sua senha'
        value={formValues.password}
        onChange={handleChange}
      />

      <Button type="submit" disabled={formValues.email.length <= 0 || formValues.password.length <= 0 } >
        Fazer login
      </Button>
    </FormContainer>
  );
}
