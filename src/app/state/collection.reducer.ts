import { createReducer, on } from '@ngrx/store';
import { BooksAction } from './book.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BooksAction.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),

  on(BooksAction.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
    
  })
);
