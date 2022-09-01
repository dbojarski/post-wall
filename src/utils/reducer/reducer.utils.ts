import { Action } from '@reduxjs/toolkit';

export type ActionWithPayload<P = any> = Action & {
  payload: P;
};
