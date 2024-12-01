import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// Создаём корень
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Рендерим приложение
root.render(
  <App />
);
