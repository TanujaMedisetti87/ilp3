import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from "./books.service";

@Component({
  selector: 'addbook-form',
  templateUrl: './addbook-form.component.html'
})
export class AddBookFormComponent {
  publisher: any;
  pdate: any;
  name: any;
  author: any;
  isbn: any;
  price: any;
  genre: any;
  format: any;
  genres: string[] = ["Science fiction", "Educational","Satire", "Drama", "Action","Adventure","Romance","Mystery","Horror"];
  formats: string[] = ["Hard Cover","Digital"];

  constructor(private _bookService: BooksService, private router: Router) { }

  onSubmit(formValue: any){
    //console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    //let bookCount = this._bookService.getBookCount();
    let newBook = {
          //id: bookCount + 1,
          name: formValue.name,
          author: formValue.author,
          isbn: formValue.isbn,
          pdate: formValue.pdate,
          publisher:formValue.publisher,
          price:formValue.price,
          genre: formValue.genre,
          format: formValue.format,
          
          
          
        };
        this._bookService.addBook(newBook)
          .subscribe((books:any)=>this.router.navigate(['books']),(err)=>console.log(err));
      this.router.navigate(['/library']);
  }
}