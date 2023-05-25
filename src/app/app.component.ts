import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBook } from './state/books.selectors';
import { BooksAction, BooksApiActions } from './state/book.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectBook);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksAction.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksAction.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
