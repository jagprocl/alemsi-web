import { createRoot } from 'react-dom/client';
import { ReactDOM } from 'react-dom';
import App from './App.jsx';
import './sass/main.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
