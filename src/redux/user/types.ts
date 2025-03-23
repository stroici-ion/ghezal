import { TProduct } from '../products/types';

export interface IUserState {
  user?: TUser;
}

export type TUser = {
  id: number;
  username: string;
};
