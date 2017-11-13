import {Todo} from '../app/model/Todo';

export class TodoServices {
  private listToDo: Array<Todo> = [];

  getTodos(){
    return Promise.resolve([...this.listToDo]);
  }

  addTodo(todo: Todo) {
      this.listToDo.push(todo);
      return Promise.resolve([...this.listToDo]);
}

  deleteList() {
    this.listToDo = [];
    return Promise.resolve([...this.listToDo]);
  }

  cleanDone() {
    this.listToDo = this.listToDo.filter((item) => {
      return !item.isDone;
    });
    return Promise.resolve([...this.listToDo]);
  }

}
