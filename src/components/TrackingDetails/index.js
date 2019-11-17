import React, { Component } from 'react';

import { Tracking } from './styles';

export default class TrackingDetails extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    return(
      <Tracking>
        <h3>{`${data.modality} - ${data.trackingCode}`}</h3>
      </Tracking>
    )
  }
};
