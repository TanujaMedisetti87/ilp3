import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from "./books.service";

@Component({
  selector: 'editbook-form',
  templateUrl: './editbook-form.component.html'
})
export class EditBookFormComponent {
  genres: string[] = ["Science fiction", "Satire","Educational", "Drama", "Action","Adventure","Romance","Mystery","Horror"];
  formats: string[] = ["Hard Cover","Digital"];
  

  constructor(private _bookService: BooksService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  book: any={};

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          this.id = +params['id'];
      });
      this.book = this._bookService.getBook(this.id)
        .subscribe((bookq:any)=>this.book=(JSON.parse(JSON.stringify(bookq))),
        err=>console.log(err));
  }

  onSubmit(formValue: any){
    //console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedBook = {
          id: this.book.id,
          name: formValue.name,
          author: formValue.author,
          isbn: formValue.isbn,
          pdate:formValue.pdate,
          publisher: formValue.publisher,
          price: formValue.price,
          genre: formValue.genre,
          format: formValue.format,
      
          
         
        };
    this._bookService.updateBook(updatedBook)
      .subscribe((books:any)=>this.router.navigate(['books']),err=>console.log(err));
    this.router.navigate(['/library']);

  }
}