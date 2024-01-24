import {
  AnyAction,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { BooksState, IBook, Params } from './types';
import BookService from '../api/BookService';

export const fetchBooks = createAsyncThunk<
  { totalItems: number; items: IBook[] },
  Params,
  { rejectValue: string }
>('books/fetchBooks', async function (options, { rejectWithValue }) {
  try {
    const data = await BookService.getAll(options);
    return data;
  } catch (error) {
    return rejectWithValue('Server Error!');
  }
});

export const fetchBooksById = createAsyncThunk<
  IBook,
  string,
  { rejectValue: string }
>('books/fetchBooksById', async function (options, { rejectWithValue }) {
  try {
    const data = await BookService.getById(options);
    return data;
  } catch (error) {
    return rejectWithValue('Server Error!');
  }
});

export const fetchTopSellersBooks = createAsyncThunk<
  { totalItems: number; items: IBook[] },
  void,
  { rejectValue: string }
>('books/fetchTopSellersBooks', async function (_, { rejectWithValue }) {
  try {
    const data = await BookService.getTopSellersBooks();
    return data;
  } catch (error) {
    return rejectWithValue('Server Error!');
  }
});

export const fetchRecommendedBooks = createAsyncThunk<
  { totalItems: number; items: IBook[] },
  void,
  { rejectValue: string }
>('books/fetchRecommendedBooks', async function (_, { rejectWithValue }) {
  try {
    const data = await BookService.getRecommendedBooks();
    return data;
  } catch (error) {
    return rejectWithValue('Server Error!');
  }
});

const initialState: BooksState = {
  results: [],
  item: null,
  recommendedBooks: [],
  topSellersBooks: [],
  error: null,
  loading: false,
  totalItems: 0,
  isAuth: false,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    signIn(state) {
      state.isAuth = true;
    },
    signOut(state) {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.items;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBooksById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooksById.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchTopSellersBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopSellersBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.topSellersBooks = action.payload.items;
      })
      .addCase(fetchRecommendedBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendedBooks = action.payload.items;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload || 'System error';
      });
  },
});

export const { signIn, signOut } = bookSlice.actions;

export default bookSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
