import React, {Suspense} from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Spinner } from '../shared/ui/Spinner';

import HomePage from '../pages/HomePage/HomePage';
import Login from '../features/Auth/ui/Login/Login';
import Register from '../features/Auth/ui/Register/Register';
import CartPageLazy from '../pages/CartPage/CartPage';
import ProfilePageLazy from '../pages/ProfilePage/ProfilePage';


export default function App ()  {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPageLazy/>}/>
            <Route path="/profile" element={<ProfilePageLazy/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};


