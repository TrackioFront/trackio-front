import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './utils/localStorage';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';
import rootReducers from './reducers/rootReducers';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Cargar el estado persistido del localStorage
const persistedState = loadState();

// Crear la tienda con Redux Toolkit
const store = configureStore({
  reducer: rootReducers,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // Habilitar Redux DevTools solo en desarrollo
});

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
