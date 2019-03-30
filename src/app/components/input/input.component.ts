import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public inputText: string;

  //Like constructor in React creates initial state / data
  constructor() {
    this.inputText = '';
   }

  ngOnInit() {
  }
  //Such as putting functions above the JSX in React or in <Script> tags in Vue below the HTML
  public addToDo(): void {
    this.inputText = '';
  }

}