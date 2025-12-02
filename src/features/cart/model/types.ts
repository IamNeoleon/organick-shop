import { TProduct } from "../../product/model/types";

export type TCartProduct = Omit<TProduct, 'category' | 'description' | 'rating'> & {
   quantity: number;
}

export interface ICartState {
   cartItems: TCartProduct[];
}