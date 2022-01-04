import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  books: [],
};
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state) => {
      state.loading = true;
    },
    getBooksSuccess: (state, { payload }) => {
      state.books = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getBooksFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getBooks, getBooksSuccess, getBooksFailure } =
  booksSlice.actions;

export const booksSelector = (state) => state.books;

export default booksSlice.reducer;

export function fetchBooks() {
  return async (dispatch) => {
    dispatch(getBooks());

    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/overview.json",
        {
          params: {
            published_date: "2019-01-01",
            "api-key": "xF0Q4kwpnc8oehJ3IeRWREQkJKnQytcY",
          },
        }
      );
      dispatch(getBooksSuccess(response.data.results.lists));
    } catch (error) {
      dispatch(getBooksFailure());
    }
  };
}
