import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import {BookActions} from '../ducks/BookRedux';

export function* books(api, {startIndex, search}) {
  try {
    const response = yield call(api.books, startIndex, search);
    console.log(response);
    if (response.problem) throw new Error(response.problem);
    const books = path(['data', 'items'], response);
    yield put(BookActions.booksSuccess(books));
  } catch (e) {
    yield put(BookActions.booksFail(e));
  }
}
