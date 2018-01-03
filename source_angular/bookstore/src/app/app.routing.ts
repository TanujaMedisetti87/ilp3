import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import { BooksComponent } from './library/books.component';
import { BookComponent } from './library/book.component';
import { AddBookFormComponent } from './library/addbook-form.component';
import { EditBookFormComponent } from './library/editbook-form.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'library', component: BooksComponent },
  { path: 'library/:id', component: BookComponent },
  { path: 'addBook', component: AddBookFormComponent},
  { path: 'editBook/:id', component: EditBookFormComponent}
];

export const routing = RouterModule.forRoot(appRoutes);





