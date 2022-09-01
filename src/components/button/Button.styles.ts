import styled from 'styled-components';
import { HTMLProps, PropsWithChildren } from 'react';

export const CustomButton = styled.button<
  HTMLProps<HTMLButtonElement> & PropsWithChildren
>`
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

export const AccentButton = styled(CustomButton)<
  HTMLProps<HTMLButtonElement> & PropsWithChildren
>`
  background-color: cadetblue;
  color: #fff;

  &:hover {
    border-color: cadetblue;
    background-color: #6cb2b4ff;
  }
`;

export const GhostButton = styled(CustomButton)<
  HTMLProps<HTMLButtonElement> & PropsWithChildren
>`
  border: 0;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;
