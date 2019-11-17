import React, { Component } from 'react';

import { TimelineContainer, Date, Status } from './styles';

export default class Timeline extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    var { timeline } = this.props;
    timeline.date = timeline.date.split(' ');
    timeline.status = timeline.status.split('-');
    console.log(timeline.status);

    return(
      <TimelineContainer>
        <Date>
          <span>
            <strong>{timeline.date[0]}</strong>
          </span>
          <span>{timeline.date[1]}</span>
        </Date>
        <Status>
          {timeline.status.map(status => (
            <h4>{status}</h4>
          ))}
          <p>{`Para: ${timeline.details.from}`}</p>
          <p>{timeline.details.to ? `De: ${timeline.details.to}` : ''}</p>
        </Status>
      </TimelineContainer>
    );
  }
}
