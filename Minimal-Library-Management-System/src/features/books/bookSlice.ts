import type { RootState } from "@/app/store";
import type { IBook } from "@/interfaces/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    books: IBook[]
};

const initialState : InitialState = {
     books: []
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers:{
    }
})
export const selectBook = (state: RootState  ) => {
     return state.bookList.books
}

export default bookSlice.reducer