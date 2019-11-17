import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  -webkit-user-drag: none;
  -moz-window-dragging: none;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  h2 {
    margin: 0;
    color: #263238;
  }

  img {
    -webkit-user-drag: none;
    -moz-window-dragging: none;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }

  button {
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
  }
`;

export const FourZeroFour = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 150px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 4px solid #263238;
  border-radius: 20px;

  h1 {
    font-size: 10em;
    font-family: 'Kanit';
    font-weight: bold;
    margin: 0;
    color: #263238;
  }
`;

export const Label = styled.div`
  width: fit-content;
  height: fit-content;
  background: #fff;
  padding: 3px;
  margin-bottom: -19px;
  z-index: 10;
`;