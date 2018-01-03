import { Injectable} from '@angular/core';
//import { Init } from "./initial-books";
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Http, Headers } from '@angular/http';
import {Router} from "@angular/router";
import {Book } from "./book";

@Injectable()
export class BooksService  {
  //private _booksUrl = "http://localhost:3000/comment/";
  constructor(private _http: HttpClient, private router: Router) {
    // super();
    // console.log("Initializing Books service ...");
    //this.load();
  }

  // getBookCount() {
  //   let books = JSON.parse(localStorage.getItem('books'));
  //   return books.length;
  // }

  getBooks() {
    //let books = JSON.parse(localStorage.getItem('books'));
    return this._http.get("http://localhost:3000/comment/");
  }

  getBook(id: any) {
    // let books = JSON.parse(localStorage.getItem('books'));
    // let book:any = null;
    // for (let i = 0; i < books.length; i++) {
    //   if (books[i].id == id) {
  //       book = books[i];
  //       break;
  //     }
  //   }
  //   return book;
  return this._http.get("http://localhost:3000/comment/"+id);
  
}

  addBook(newBook: any) {
    // let books = JSON.parse(localStorage.getItem('books'));
    // books.push(newBook);
    //localStorage.setItem('books', JSON.stringify(books));
    return this._http.post("http://localhost:3000/comment/",JSON.stringify(newBook));
    
  }
//CHANGES
  updateBook(updatedBook: any) {
    // let books = JSON.parse(localStorage.getItem('books'));
    // for (let i = 0; i < books.length; i++) {
    //   if (books[i].id == updatedBook.id) {
    //     books[i] = updatedBook;
    //   }
    // }
    // localStorage.setItem('books', JSON.stringify(books));
    var body={
      author:updatedBook.author,
      name:updatedBook.name,
      pdate:updatedBook.pdate,
      publisher:updatedBook.publisher,
      isbn:updatedBook.isbn,
      format:updatedBook.format,
      genre:updatedBook.genre,
      price:updatedBook.price,
      id:updatedBook.id
    };
    return this._http.put("http://localhost:3000/comment/"+body.id,body);
  }

  deleteBook(id: any) {
  //   // let books = JSON.parse(localStorage.getItem('books'));
  //   for (let i = 0; i < books.length; i++) {
  //     if (books[i].id == id) {
  //       books.splice(i, 1);
  //     }
  //   }
  //   localStorage.setItem('books', JSON.stringify(books));
  return this._http.delete("http://localhost:3000/comment/"+id);
   }


}

