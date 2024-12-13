import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { registerRequest } from '../../model/authSlice';
import styles from './Register.module.scss'

const Register = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerRequest({ name, email, password }));
  };

  return (
    <form className={styles.form } onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Register;
