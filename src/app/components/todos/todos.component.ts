import { Component, OnInit, Input } from '@angular/core';

import {Todo} from '../../classes/todo';
import {AddingService} from '../../services/adding.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input()
  private todo: Todo;
  
  constructor(private addingService: AddingService) { }

  ngOnInit() {
  }

  //Grabs the id of the item being deleted and passes it up to the adding.services.ts file
  private handleDeleteTodo(): void {
    this.addingService.handleDeleteTodo(this.todo.id);
  }

}