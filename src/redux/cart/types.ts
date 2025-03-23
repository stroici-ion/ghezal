import { TProduct } from '../products/types';

export interface ICartState {
  cartItems: TCartItem[];
  selectedCartItem?: TCartItem;
}

export type TCartItem = {
  product: TProduct;
  selectedColor: string;
  selectedMaterial: string;
  count: number;
};
