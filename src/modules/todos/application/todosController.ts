

import { Todo } from "../../..";
import { TodosRepo } from "../repos/todosRepo";

export class TodosController {
  // The controller has access to the repository
  // which maintains the state for anything todos related

  constructor (private todosRepo: TodosRepo) {

  }

  selectTodo (todo: Todo) {
    
  }

  editTodo (newDescription: string) {

  }

  createTodo (text: string) {

   // do the creation work here in repo

  }
}