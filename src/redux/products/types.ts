export interface IProductsState {
  products: TProduct[];
}

export type TProduct = {
  id: number;
  title: string;
  imageUrls: string[];
  price: number;
  categoryId?: number;
  colors?: string[];
};
