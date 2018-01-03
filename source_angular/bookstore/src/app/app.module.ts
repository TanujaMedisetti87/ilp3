import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import {AboutComponent} from './about/about.component';
import { BooksComponent } from './library/books.component';
import { BookComponent } from './library/book.component';
import { AddBookFormComponent } from './library/addbook-form.component';
import { EditBookFormComponent } from './library/editbook-form.component';
import { BookFilterPipe } from './library/books-filter.pipe';
import { BooksService } from './library/books.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, CommonModule, routing,HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, AboutComponent, BooksComponent, BookComponent, AddBookFormComponent, EditBookFormComponent, BookFilterPipe ],
  providers: [ BooksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }