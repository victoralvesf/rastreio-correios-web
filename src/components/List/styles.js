import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-top: 20px;
  max-height: 88%;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
  }

  tr {
    text-align: left;
  }
`;
