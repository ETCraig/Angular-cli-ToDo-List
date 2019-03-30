import { Injectable } from '@angular/core';

//Imports the class Todo from classes
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class AddingService {
  //Can only be accessed insides the class that contains it
  private todoArray: Todo[];
  private newTodo: number;

  constructor() {
    this.todoArray = [
      new Todo(0, 'The first of many todos.')
    ];
    this.newTodo = 1;
  }
  //Takes inputTest from input.components.ts as text and the id as newTodo
  public handleAddToDo(text: string): void {
    //Creates new todo item
    let todo = new Todo(this.newTodo, text);
    //Adds the new item to the array
    this.todoArray.push(todo);
    //increments the newTodo id for the next addition
    this.newTodo++;
  }
  //Gets all the current items in todoArray and returns them to the call in app.component.html
  public handleGetTodos(): Todo[] {
    return this.todoArray;
  }
  //Called inside the todos.component.html and is handed the id of the item being deleted
  public handleDeleteTodo(id: number): void {
    //Finds the todo with the matching id
    this.todoArray = this.todoArray.filter((todo) => todo.id != id);
  }
}
