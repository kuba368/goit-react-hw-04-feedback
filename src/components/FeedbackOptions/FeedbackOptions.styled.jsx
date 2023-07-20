import styled from 'styled-components';

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  text-transform: capitalize;
  &:hover,
  &:focus {
    background-color: aquamarine;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
