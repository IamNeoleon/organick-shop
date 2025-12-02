import { TCartProduct } from "@/features/cart/model";
import { TProduct } from "@/features/product/model";

export const buildSortByParam = (orderStr: string) => {
   const [field, direction] = orderStr
      .toLowerCase()
      .replace(/[()]/g, '')
      .trim()
      .split(/\s+/);

   if (!field) return '';

   return direction === 'desc' ? `-${field}` : field;
};

export const getRandomProducts = (arr: TProduct[], n: number) => {
   let copy = arr.slice();
   let result: TProduct[] = [];

   for (let i = 0; i < n; i++) {
      if (copy.length === 0) break;

      let randomIndex = Math.floor(Math.random() * copy.length);

      result.push(copy[randomIndex]);
      copy.splice(randomIndex, 1);
   }

   return result;
}

export const saveCartToLs = (arr: TCartProduct[]) => {
   if (arr.length > 0) {
      localStorage.setItem('cart_organick', JSON.stringify(arr));
   }
}

export const getCartFromLs = (): TCartProduct[] => {
   const data = localStorage.getItem('cart_organick');
   return data ? JSON.parse(data) as TCartProduct[] : [];
}

export const clearCartFromLs = () => {
   localStorage.removeItem('cart_organick')
}

export const calculateCartTotal = (cartItems: TCartProduct[]) => {
   let sum = 0

   for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];

      sum += item.price * item.quantity
   }

   return sum
}