import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../model/authSlice';
import styles from './Register.module.scss'
import Input from '../../../../shared/ui/components/Input/Input';
import Button from '../../../../shared/ui/components/Button/Button';

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    !Object.values(formData).every((value) => value.trim())
      ? alert("Заполните все поля")
      : dispatch(registerRequest(formData));
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        type='text'
        name='name'
        value={formData.name}
        onChange={onChange}
        placeholder='Введите имя' />
      <Input
        type='email'
        name='email'
        value={formData.email}
        onChange={onChange}
        placeholder='Введите email' />
      <Input
        type='password'
        name='password'
        value={formData.password}
        onChange={onChange}
        placeholder='Введите пароль' />

      <Button type='submit' text='Зарегистрироваться' />
    </form>
  );
};

export default Register;
