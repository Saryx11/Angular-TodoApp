import {Component, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  listToDo: Array<Todo> = [];

  handleCreationofTodo(todo) {
    console.log(todo);
    this.listToDo.push(todo);
  }

  cleanList() {
    this.listToDo = [];
  }
  ridOfTheDone() {
    this.listToDo = this.listToDo.filter((item) => {
        return !item.isDone;
    });
  }

  changeTheTodo(event){
    console.log(event);
    this.listToDo[event] = event;
    console.log(this.listToDo);
  }

  constructor() { }

  ngOnInit() {
  }

}
