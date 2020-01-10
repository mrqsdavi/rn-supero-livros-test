import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {createSelector} from 'reselect';

/* Types & Action Creators */

const {Types, Creators} = createActions({
  books: ['startIndex', 'search'],
  booksSuccess: ['books'],
  booksFail: ['error'],
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

export const BookSelectors = {
  selectLoading,
  selectBooks,
};

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  books: [],
  error: null,
});

/* Reducers */

export const booksRequest = (state, {startIndex}) =>
  state.merge({loading: true});
export const booksSuccess = (state, {books}) =>
  state.merge({loading: false, books: [...state.books, ...books]});
export const booksFail = (state, {error}) =>
  state.merge({loading: false, error});

/* Reducers to types */

export default createReducer(INITIAL_STATE, {
  [Types.BOOKS]: booksRequest,
  [Types.BOOKS_SUCCESS]: booksSuccess,
  [Types.BOOKS_FAIL]: booksFail,
});
