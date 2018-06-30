import React from 'react';
import { hot } from 'react-hot-loader'

import Routes from './Routes';
import DevTools from './DevTools';
import Main from './main/MainContainer';


const App = ({ children }) => (
  <div>
    <Main>
      <Routes />
      {children}
      <DevTools />
    </Main>
  </div>
);

export default hot(module)(App)
