import { Component } from '@angular/core';
import { Book } from './book';
import {BookService } from './book.service'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-demo';
  softBook:Book[];
  // softBook:string; this is use for map & subscribe
  constructor(private obj: BookService){}

  ngOnInit(){
    this.getsoftbooks();
  }
  getsoftbooks(){
    this.obj.getBookFromStore().subscribe(book=>this.softBook=book);
    // this.obj.getBookFromStore(100).map(book => book.name).subscribe(
    //   name =>{
    //     this.softBook = name; //this is use for subscribe
    //   }
    // )
  }

  // input:string="Hello I am parent";
}
