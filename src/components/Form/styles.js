import styled, { keyframes, css } from 'styled-components';

export const FormContainer = styled.form`
  max-width: 550px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);

  & > * {
    margin-bottom: 15px;
  }

  img {
    width: 100px;
    margin-top: -90px;
    border: 6px solid #fff;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
    border-radius: 50%;
    -moz-window-dragging: none;
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
  }

  span {
    margin-top: 10px;
    font-size: 18px;
    color: #666;
    text-align: center;
  }

  input {
    margin-top: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: #999;
    width: 240px;

    &:valid {
      box-shadow: 0 0 4px var(--success-color);
    }

    &::placeholder {
      font-size: 18px;
      text-align: center;
      font-weight: bold;
      color: #999;
    }
  }
`;

const rotate = keyframes`
  from: {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  border-radius: 4px;
  padding: 10px 0px;
  width: 262px;
  height: 43px;
  font-size: 18px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;