import { RootState } from "@/app/store";

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartTotal = (state: RootState) => state.cart.cartTotal;