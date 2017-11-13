import {Component, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {Todo} from '../model/Todo';
import {TodoServices} from '../../services/TodoServices';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TodoServices]
})
export class TodoListComponent implements OnInit {
  constructor(private service: TodoServices){}

  listToDo: Array<Todo> = [];

  handleCreationofTodo(todo) {
    console.log(todo);
    this.service.addTodo(todo).then(value => this.listToDo = value);
    // this.listToDo.push(todo);
  }

  cleanList() {
    this.service.deleteList().then(value => this.listToDo = value);
  }
  ridOfTheDone() {
    this.service.cleanDone().then(value => this.listToDo = value);
  }

  changeTheTodo(event) {
    console.log(event);
    this.listToDo[event] = event;
    console.log(this.listToDo);
  }
  ngOnInit() {
    this.service.getTodos().then(value => this.listToDo = value);
  }

}
