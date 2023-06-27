

import { Maybe, Page, Todo } from "../../..";
import { TodosController } from "../application/todosController";
import { TodosPresenter } from "../application/todosPresenter";

export class TodosPage implements Page {

  constructor (
    private presenter: TodosPresenter, 
    private controller: TodosController
    ) {

  }

  getTodoInViewByName (name: string): Maybe<Todo> {
    return this.presenter.getTodoByName(name);
  }

  selectTodoOnPage (todo: Todo) {
    // this should select the todo and we should now be looking at a different page now
    // this needs to call into a use case which invokes an event
    this.controller.selectTodo(todo);
  }

  editTodoDescription (newDescription: string) {
    this.controller.editTodo(newDescription)
  }
}