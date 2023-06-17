import { ActionTypes } from "./types";

export const initialState = {
  filter: {
    search: "",
  },
  books: [],
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.InitialFetch: {
      if (action.payload.books) {
        result = {
          ...state,
          books: action.payload.books,
        };
      }
      break;
    }
    case ActionTypes.SetBook: {
      if (action.payload.book) {
        const updatedBooks = state.books.map((book) =>
          book.id === action.payload.book.id ? action.payload.book : book
        );
        result = {
          ...state,
          books: updatedBooks,
        };
      }
      break;
    }
    case ActionTypes.SetFilter: {
      result = {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
      break;
    }
  }
  return result;
}
