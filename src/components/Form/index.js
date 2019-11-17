import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

import PackageIcon from '../../assets/images/package.svg';
import { FormContainer, SubmitButton } from './styles';

import api from '../../services/api';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      trackingInput: '',
      loading: false,
    }
  }

  handleInputChange = e => {
    this.setState({ trackingInput: e.target.value.toUpperCase() });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    this.setState({ loading: true });
    const { trackingInput } = this.state;

    const response = await api.get('/tracking', {
      params: {
        id: trackingInput,
      }
    })

    console.log(response);

    this.setState({ loading: false });

    this.props.history.push({
      pathname: `/tracking/${trackingInput}`,
      state: { tracking: response.data },
    });
  }

  render() {
    const { trackingInput, loading } = this.state;
    return(
      <FormContainer onSubmit={this.handleSubmit}>
        <img src={PackageIcon} alt="Pacote"/>
        <span>Rastreamento de objetos nos Correios, todas as modalidades.</span>
        <input 
          type="text"
          autoFocus
          placeholder="Código de rastreio"
          value={trackingInput}
          onChange={this.handleInputChange}
          pattern="[A-Z]{2}[0-9]{9}[A-Z]{2}"
          title="Exemplo: AA132456789BB"
          required />
        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#666" size={14} />
          ) : (
            'Rastrear'
          )}
        </SubmitButton>
      </FormContainer>
    );
  }
}
