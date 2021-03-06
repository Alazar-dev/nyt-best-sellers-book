import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  categories: [],
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCategoriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getCategories, getCategoriesSuccess, getCategoriesFailure } =
  categoriesSlice.actions;

export const categoriesSelector = (state) => state.categories;

export default categoriesSlice.reducer;

export function fetchBookCategories() {
  return async (dispatch) => {
    dispatch(getCategories());

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
      dispatch(getCategoriesSuccess(response.data.results.lists));
    } catch (error) {
      dispatch(getCategoriesFailure());
    }
  };
}
