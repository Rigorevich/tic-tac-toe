import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Game } from './components/Game';

import './styles/global.scss';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
