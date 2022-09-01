import styled from 'styled-components';

export const TagsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TagsItem = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const TagsNew = styled.span`
  padding: 2px;
  background-color: cadetblue;
  border-radius: 4px;
  width: 15px;
  height: 15px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
`;
