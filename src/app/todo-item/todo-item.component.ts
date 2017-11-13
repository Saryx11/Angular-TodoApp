import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent implements OnInit {

  @Input()
  toDo: Todo;

  @Output()
  todoModify: EventEmitter<Todo> = new EventEmitter<Todo>();

  toggleCheck(todo) {
    todo.isDone = !todo.isDone;
    this.todoModify.emit(todo);
  }

  constructor() { }

  ngOnInit() {

  }

}
