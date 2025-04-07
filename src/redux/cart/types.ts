import { TProduct } from '../products/types';

export interface ICartState {
  cartItems: TCartItem[];
  selectedCartItem?: TCartItem;
}

export type TCartItem = {
  id: number;
  product: TProduct;
  selectedColor: string;
  selectedMaterial: string;
  count: number;
};
