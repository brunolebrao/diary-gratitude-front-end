import React from 'react';
import GlobalStyle from './assets/styles/global';

import Header from './components/Header';
import Login from './components/Login';

const App = () => (
  <>
    <Header />
    <Login />
    <GlobalStyle />
  </>
);

export default App;
