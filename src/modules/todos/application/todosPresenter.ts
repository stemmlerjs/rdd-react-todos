
import { Todos, TodosState } from "../../..";
import { GlobalCache } from "../../../shared/cache/globalCache";

export class TodosPresenter {

  // Subscribes to the cache

  private todos: Todos;

  constructor (private globalCache: GlobalCache) {
    this.todos = new Todos([]);
    this.setupSubscriptions();
    // 
  }

  setupSubscriptions () {
    this.globalCache.subscribe('todos', this.onTodosUpdated)
  }

  onTodosUpdated (todosState: TodosState) {
    // Update the view models
  }

  async loadTodos (cb: (todos: Todos) => void) {
    // load todos


    // do async work
    this.todos = new Todos([])
    cb(this.todos)
  }

  getTodoByName (name: string) {
    return this.todos.items.find((t) => t.getName() === name)
  }

  getAllTodos () {
    return this.todos;
  }
}