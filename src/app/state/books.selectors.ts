import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const selectBook = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectorCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBook,
  selectorCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
