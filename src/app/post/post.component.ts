import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  form: FormGroup;
  datasaved=false;
  allbooks:Observable<Book[]>
  bookidtoupdate = null;
  constructor(private service:BookService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',[Validators.required]],
      Designation:['',[Validators.required]]
    });
    this.getsoftbooks();
  }
  submit(){
    this.datasaved=false;
    let book=this.form.value;
    this.createbooks(book);
    this.form.reset();
  }

  booktoedit (bookid:string){
    this.service.getbookbyid(bookid).subscribe(book =>{
      this.bookidtoupdate = bookid;
      this.form.controls['name'].setValue(book.name);
      this.form.controls['Designation'].setValue(book.Designation);
    })
  }


  createbooks(book:Book){
    if(this.bookidtoupdate == null){
      this.service.createBook(book).subscribe(
        book =>{
          this.datasaved=true;
          this.getsoftbooks();
          this.bookidtoupdate=null;
        }
      )
    }
    else{
      book.id=this.bookidtoupdate;
      this.service.UpdateBook(book).subscribe(book =>{
        this.datasaved = true;
        this.getsoftbooks();
        this.bookidtoupdate=null;
      })
    }
  }

  deletebook(bookid:string){
    this.service.DeleteBook(bookid).subscribe(book =>{
      this.getsoftbooks();
    })
  }


  getsoftbooks(){
    this.allbooks=this.service.getBookFromStore();
  }
}
