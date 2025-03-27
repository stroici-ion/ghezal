export interface IProductsState {
  products: TProduct[];
}

export type TProduct = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  categoryId?: number;
  colors?: string[];
};
