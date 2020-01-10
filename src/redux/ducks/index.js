import {combineReducers} from 'redux';
import Book from './BookRedux';

const reducers = combineReducers({
  book: Book,
});

export default reducers;
