import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, TCartProduct } from "./types";

const initialState: ICartState = {
   cartItems: [],
   cartTotal: 0,
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
      setCartSum(state, action: PayloadAction<number>) {
         state.cartTotal = action.payload;
      },
   },
});

export const {
   onAddItem,
   onDeleteItem,
   updateCountItem,
   setCartFromLs,
   setCartSum,
} = cartSlice.actions;

export default cartSlice.reducer;