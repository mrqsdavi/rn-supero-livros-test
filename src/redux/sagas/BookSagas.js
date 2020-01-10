import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import {BookActions} from '../ducks/BookRedux';

export function* books(api, {startIndex, search}) {
  try {
    const response = yield call(api.books, startIndex, search);
    if (response.problem) throw new Error(response.problem);
    const books = path(['data', 'items'], response);
    const totalItems = path(['data', 'totalItems'], response);
    yield put(BookActions.booksSuccess(books, totalItems));
  } catch (e) {
    yield put(BookActions.booksFail(e));
  }
}

export function* detail(api, {id}) {
  try {
    const response = yield call(api.detail, id);
    if (response.problem) throw new Error(response.problem);
    const book = path(['data'], response);
    console.log('BOOK', book);
    yield put(BookActions.detailSuccess(book));
  } catch (e) {
    yield put(BookActions.detailFail(e));
  }
}
