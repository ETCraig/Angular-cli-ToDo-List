import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  toggle = true;
  status = 'UnFinished'
  @Input()
  private todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  handleChangeTodo() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'UnFinished' : 'Finished';
  }

}