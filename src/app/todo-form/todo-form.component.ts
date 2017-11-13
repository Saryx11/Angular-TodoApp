import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoFormComponent implements OnInit {

  @Output()
  todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  nameTodo = '';

  createTodo() {
    if(this.nameTodo !== '') {
      const item: Todo = new Todo(this.nameTodo, false);
      console.log('le todo en sortie :');
      console.log(item);
      this.todoCreated.emit(item);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
