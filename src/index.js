import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/Global.scss';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(<App />);
