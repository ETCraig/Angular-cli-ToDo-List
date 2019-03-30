import { Component, OnInit } from '@angular/core';

import {AddingService} from '../../services/adding.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public inputText: string;

  //Like constructor in React creates initial state / data
  constructor(private addingService: AddingService) {
    this.inputText = '';
   }

  ngOnInit() {
  }
  //Such as putting functions above the JSX in React or in <Script> tags in Vue below the HTML
  public handleAddToDo(): void {
    this.addingService.handleAddToDo(this.inputText);
    this.inputText = '';
  }

}