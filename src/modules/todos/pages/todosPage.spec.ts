
import { GlobalCache } from "../../../shared/cache/globalCache";
import { TodosController } from "../application/todosController";
import { TodosPresenter } from "../application/todosPresenter";
import { TodosRepo } from "../repos/todosRepo";
import { TodosPage } from "./todosPage";

describe('todosPage', () => {

  describe('createTodo', () => {

    let todoText: string;
    let cache: GlobalCache;
    let todosRepo: TodosRepo; 
    let todosPresenter: TodosPresenter;
    let todosController: TodosController;
    let todosPage: TodosPage;

    beforeEach(() => {
      todoText = "let's do something"
      cache = new GlobalCache({ todos: { todos: [] } })
      todosRepo = new TodosRepo(cache);
      todosPresenter = new TodosPresenter(cache);
      todosController = new TodosController(todosRepo);
      todosPage = new TodosPage(todosPresenter, todosController);
    })

    test('create a new todo when none exists', async () => {
      // refactor this to composite root
      

      await todosController.createTodo(todoText);

      let todos = todosPresenter.getAllTodos();
      expect(todos.length()).toBe(1);
      expect(todos.items[0]).toBe(todoText);
    })
  })

})