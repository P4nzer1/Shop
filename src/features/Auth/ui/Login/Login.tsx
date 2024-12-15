import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../model/authSlice';
import Input from '../../../../shared/ui/components/Input/Input';
import Button from '../../../../shared/ui/components/Buttons/Button/Button';

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    !Object.values(formData).every((value) => value.trim())
      ? alert("Заполните все поля")
      : dispatch(loginRequest(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Введите email"
      />
      <Input
        type="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Введите пароль"
      />
      <Button text="Войти" type='submit' />
    </form>
  );
};

export default Login;

