import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

import { AppContainer, BodyContainer } from './styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <BodyContainer>        
        <Routes />
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
