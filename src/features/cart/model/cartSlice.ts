import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, TCartProduct } from "./types";

const initialState: ICartState = {
   cartItems: [],
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      setCartFromLs(state, action: PayloadAction<TCartProduct[]>) {
         state.cartItems = action.payload;
      },
      onAddItem(state, action: PayloadAction<TCartProduct>) {
         state.cartItems.push(action.payload);
      },
      onDeleteItem(state, action: PayloadAction<number>) {
         state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload
         );
      },
      updateCountItem(
         state,
         action: PayloadAction<{ id: number; quantity: number }>
      ) {
         const item = state.cartItems.find(
            (item) => item.id === action.payload.id
         );
         if (item) item.quantity = action.payload.quantity;
      },
      clearCart(state) {
         state.cartItems = []
      }
   },
});

export const {
   onAddItem,
   onDeleteItem,
   updateCountItem,
   setCartFromLs,
   clearCart
} = cartSlice.actions;

export default cartSlice.reducer;