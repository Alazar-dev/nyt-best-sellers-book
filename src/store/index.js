import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categories";
import booksReducer from "../slices/books";

const reducer = {
  categories: categoriesReducer,
  books: booksReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
