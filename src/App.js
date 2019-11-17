import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

import { AppContainer, BodyContainer } from './styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <BodyContainer>        
        <Form />
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
