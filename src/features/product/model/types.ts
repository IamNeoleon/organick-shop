export type TProduct = {
   id: number;
   name: string;
   category: string;
   description: string;
   imageUrl: string;
   price: number;
   rating: number;
};

export interface IResponseProducts {
   meta: {
      total_items: number;
      total_pages: number;
      current_page: number;
      per_page: number;
      remaining_count: number;
   };
   items: TProduct[];
}

export type TTab = {
   id: number
   title: string,
   text: string,
}


export type ProductsQueryParams = {
   page?: number;
   limit?: number;
   category?: string;
   sortBy?: string;
   search?: string
};

export interface IFiltersState {
   selectedCategory: string,
   selectedOrder: string,
   currentPage: number,
   searchValue: string
}