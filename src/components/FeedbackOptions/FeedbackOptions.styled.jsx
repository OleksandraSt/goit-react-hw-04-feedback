import styled from '@emotion/styled';

export const ButtonContainer = styled.ul`
  text-align: center;
  margin: auto;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  color: #2a2a2a;
  border: 1px solid green;
  cursor: pointer;
  text-transform: uppercase;
  :not(:last-child) {
    margin-right: 20px;
  }
`;