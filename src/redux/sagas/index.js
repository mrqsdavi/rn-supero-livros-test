import {takeLatest, all} from 'redux-saga/effects';
import API from '../../services/Api';

/* ------------- Types ------------- */

import {BookTypes} from '../ducks/BookRedux';

/* ------------- Sagas ------------- */

import {books} from './BookSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([takeLatest(BookTypes.BOOKS, books, api)]);
}
