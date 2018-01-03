import { Component, OnInit } from '@angular/core';
import { BooksService } from "./books.service";
import { Book } from './book';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: any[]= new Array;
  
  name : string;
  heroForm : FormGroup;   
  author : boolean= true;
  isbn: boolean= true;
  pdate : Date;
  publisher: boolean= true;
  price : Number;
  genre: boolean= true;
  format: boolean= true;
  nameFilter: string;
  title: string;

  constructor(private _bookService: BooksService,private fb: FormBuilder) { 
  
  //   this.createForm();
  // }

  // createForm() {
  //   this.heroForm = this.fb.group({
  //     a: '', 
  //     b: '',
  //     c: '',
  //     d: '', 
  //     e: '',
  //     f: '',
  //     g: '',
  
  //   });
  }

  get selectedOptions() { 
    return this.books
              .filter(opt => opt.checked)
              .map(opt => opt.id)
    }



  ngOnInit() {
    this._bookService.getBooks().subscribe(
      (books:any) =>  this.books = books,//=books,
      err => console.log(err) );
  }

  deleteBook(empid: any) {
    this._bookService.deleteBook(empid)
      .subscribe((books:any)=>this.books=books,err=>console.log(err));
  }


  filter: Book = new Book();
  }