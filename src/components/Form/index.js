import React, { Component } from 'react';

import PackageIcon from '../../assets/images/package.svg';
import { FormContainer } from './styles';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  handleInputChange = e => {
    this.setState({ input: e.target.value.toUpperCase() });
  }

  render() {
    const { input } = this.state;
    return(
      <FormContainer>
        <img src={PackageIcon} alt="Pacote"/>
        <span>Rastreamento de objetos nos Correios, todas as modalidades.</span>
        <input 
          type="text"
          autoFocus
          placeholder="Código de rastreio"
          value={input}
          onChange={this.handleInputChange}
          pattern="[A-Z]{2}[0-9]{9}[A-Z]{2}"
          title="Exemplo: AA132456789BB"
          required />
        <button type="submit">Rastrear</button>
      </FormContainer>
    );
  }
}
