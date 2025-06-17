import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFiltersState } from './types'


const initialState: IFiltersState = {
   selectedCategory: '',
   selectedOrder: '',
   currentPage: 1,
   searchValue: ''
} satisfies IFiltersState as IFiltersState

export const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategory(state, action: PayloadAction<string>) {
         state.selectedCategory = action.payload
         state.currentPage = 1;
      },
      setOrder(state, action: PayloadAction<string>) {
         state.selectedOrder = action.payload
         state.currentPage = 1
      },
      setCurrentPage(state, action: PayloadAction<number>) {
         state.currentPage = action.payload
      },
      setSearchValue(state, action: PayloadAction<string>) {
         state.searchValue = action.payload
         state.currentPage = 1
      }
   },
})

export const { setCategory, setOrder, setCurrentPage, setSearchValue } = filterSlice.actions

export default filterSlice.reducer