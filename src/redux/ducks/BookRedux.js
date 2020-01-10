import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {createSelector} from 'reselect';

/* Types & Action Creators */

const {Types, Creators} = createActions({
  books: ['startIndex', 'search'],
  booksSuccess: ['books', 'totalItems'],
  booksFail: ['error'],

  detail: ['id'],
  detailSuccess: ['book'],
  detailFail: ['error'],
});

export const BookTypes = Types;
export const BookActions = Creators;

/* Selectors */

const selectState = createSelector(
  state => state.book,
  book => book,
);
const selectLoading = createSelector(selectState, state => state.loading);
const selectBooks = createSelector(selectState, state => state.books);
const selectTotalItems = createSelector(selectState, state => state.totalItems);
const selectLoadingDetail = createSelector(
  selectState,
  state => state.loading_detail,
);
const selectDetail = createSelector(selectState, state => state.detail);

export const BookSelectors = {
  selectLoading,
  selectBooks,
  selectTotalItems,
  selectLoadingDetail,
  selectDetail,
};

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  books: [],
  totalItems: 0,
  error: null,

  loading_detail: false,
  detail: {},
});

/* Reducers */

export const booksRequest = (state, {startIndex}) =>
  state.merge({
    loading: true,
    books: startIndex == 0 ? [] : state.books,
  });

export const booksSuccess = (state, {books, totalItems}) =>
  state.merge({loading: false, totalItems, books: [...state.books, ...books]});
export const booksFail = (state, {error}) =>
  state.merge({loading: false, error});

export const detailRequest = state =>
  state.merge({
    loading_detail: true,
  });

export const detailSuccess = (state, {book}) =>
  state.merge({loading_detail: false, detail: book});

export const detailFail = (state, {error}) =>
  state.merge({loading_detail: false, error});

/* Reducers to types */

export default createReducer(INITIAL_STATE, {
  [Types.BOOKS]: booksRequest,
  [Types.BOOKS_SUCCESS]: booksSuccess,
  [Types.BOOKS_FAIL]: booksFail,
  [Types.DETAIL]: detailRequest,
  [Types.DETAIL_SUCCESS]: detailSuccess,
  [Types.DETAIL_FAIL]: detailFail,
});
