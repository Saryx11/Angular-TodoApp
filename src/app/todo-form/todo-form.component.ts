import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from '../model/Todo';
import {TodoServices} from '../../services/TodoServices';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TodoServices]
})
export class TodoFormComponent implements OnInit {
  constructor(private todoService: TodoServices) {}

  @Output()
  todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  nameTodo = '';

  createTodo() {
    // this.todoCreated.emit(this.todoService.addTodo(this.nameTodo));
    // this.nameTodo = '';
    if (this.nameTodo !== '') {
      const item: Todo = new Todo(this.nameTodo, false);
      this.nameTodo = '';
      console.log('le todo en sortie :');
      console.log(item);
      this.todoCreated.emit(item);
    }
  }



  ngOnInit() {
  }

}
