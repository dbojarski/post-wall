import styled from 'styled-components';

export const Dropdown = styled.div`
  right: 0;
  top: 100%;
  padding-top: 5px;
  display: none;
  width: 200px;
  position: absolute;
`;

export const UserPillContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  background-color: #3f3f3f;
  padding: 3px 10px 3px 3px;
  border-radius: 20px;
  position: relative;

  &:hover ${Dropdown} {
    display: block;
  }
`;

export const Photo = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100%;
`;

export const UserName = styled.span`
  padding: 0 10px;
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #1f1f1f;
  border-radius: 4px;
  overflow: hidden;

  li {
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.02);
    }
  }
`;
