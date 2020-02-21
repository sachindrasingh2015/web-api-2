import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  display=true;
  ngOnInit(): void {
  }
  books=[
    {name:'angular', price:100},
    {name:'node', price:200},
  ]
  obj={
    data:"hello everyone"
  }

}
