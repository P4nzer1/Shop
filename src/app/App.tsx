import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import Login from '../features/Auth/ui/Login/Login';
import Register from '../features/Auth/ui/Register/Register';
import CartPage from '../pages/CartPage/CartPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

export default function App ()  {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};


