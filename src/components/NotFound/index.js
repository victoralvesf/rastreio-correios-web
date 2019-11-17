import React, { Component } from 'react';

import DarthVader from '../../assets/images/darth-vader.svg';

import { NotFoundContainer, FourZeroFour, Label } from './styles';

export default class NotFound extends Component {
  redirectToTarget = () => {
    this.props.history.push('/');
  }

  render() {
    return(
      <NotFoundContainer>
        <Label>
          <h2>Página não encontrada!</h2>
        </Label>
        <FourZeroFour>
          <h1>4</h1>
          <img src={DarthVader} alt="Darth Vader" />
          <h1>4</h1>
        </FourZeroFour>
        <h3>Você não conhece o poder do lado sombrio!</h3>
        <button onClick={this.redirectToTarget}>Voltar para o início</button>
      </NotFoundContainer>
    )
  }
};
