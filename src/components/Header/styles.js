import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;
  background: var(--main-color);
  font-size: 28px;
  font-weight: bold;

  a {
    text-decoration: none;
  }

  span {
    margin: 0;
    color: #333;
  }
`;