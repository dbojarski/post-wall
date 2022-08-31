import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../state/user/user.selectors';
import {
  Dropdown,
  DropdownList,
  Photo,
  UserName,
  UserPillContainer,
} from './UserPill.styles';
import { signOutStart } from '../../state/user/user.reducer';

export function UserPill() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onSignOut = () => dispatch(signOutStart());

  return (
    <UserPillContainer>
      <Photo src={user.photoURL} />
      <UserName>{user.displayName}</UserName>
      <Dropdown>
        <DropdownList>
          <li onClick={onSignOut}>Sign out</li>
        </DropdownList>
      </Dropdown>
    </UserPillContainer>
  );
}
