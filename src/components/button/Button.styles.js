import styled from 'styled-components';

export const CustomButton = styled.button`
  background: transparent;
  border: 1px solid cadetblue;
  border-radius: 4px;
  padding: 10px 15px;
  text-transform: uppercase;
  color: cadetblue;
  cursor: pointer;

  &:hover {
    border-color: #fff;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      border: 1px solid cadetblue;
      color: cadetblue;
    }
  }
`;

export const AccentButton = styled(CustomButton)`
  background-color: cadetblue;
  color: #fff;

  &:hover {
    border-color: cadetblue;
    background-color: #6cb2b4ff;
  }
`;

export const GhostButton = styled(CustomButton)`
  border: 0;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;
