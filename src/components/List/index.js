import React, { Component } from 'react';

import { ListContainer } from './styles';

import TrackingDetails from '../TrackingDetails';
import Timeline from '../Timeline';

export default class List extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  redirectWithBadRequest = () => {
    this.props.history.push('/404');
  }

  render() {
    const { state } = this.props.location;
    if (state === undefined) {
      this.redirectWithBadRequest();
      return null;
    }

    const { tracking } = state;

    const infoData = {
      modality: tracking.response.modality,
      trackingCode: tracking.response.trackingCode
    }

    return(
      <ListContainer>
        <TrackingDetails data={infoData} />
        {tracking.response.timeline.map(item => (
          <Timeline key={item.date} timeline={item} />
        ))}
      </ListContainer>
    )
  }
};
