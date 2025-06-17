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
      localStorage.setItem('cart', JSON.stringify(arr));
   }
}

export const getCartFromLs = (): TCartProduct[] => {
   const data = localStorage.getItem('cart');
   return data ? JSON.parse(data) as TCartProduct[] : [];
}