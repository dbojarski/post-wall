import { User } from './user.reducer';
import { RootState } from '../root.reducer';

export const selectUser = (state: RootState): User | null => state.user.data;
