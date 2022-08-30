import styled from 'styled-components';

export const AddPostContainer = styled.div`
  background-color: #2f2f2f;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  gap: 15px;

  textarea {
    border-radius: 4px;
  }

  img {
    border-radius: 100%;
  }
`;

export const ActionsContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 15px;
`;

export const UserPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;
