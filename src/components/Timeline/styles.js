import styled from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0px;
  min-height: 60px;
  color: #333;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-right: 1px solid #eee;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  h4 {
    margin: 0;
    margin-top: -2px;
    text-align: center;
  }

  p {
    margin: 0;
  }
`;