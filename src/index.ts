import { TodosController } from "./modules/todos/application/todosController";
import { TodosPresenter } from "./modules/todos/application/todosPresenter";
import { TodosPage } from "./modules/todos/pages/todosPage";
import { TodosRepo } from "./modules/todos/repos/todosRepo";


interface TodosAPI {

}

abstract class Controller {

}

abstract class Presenter {}

class TodoDetailPage  {

}

interface GlobalDataModel {
  todos: TodosState;
}

export class GlobalCache {
  constructor (private globalDataModel: GlobalDataModel) {

  }

  public static createEmpty() {
    return new GlobalCache({ todos: { todos: [] }})
  }
}

export type PageType = TodosPage | TodoDetailPage;

export interface Page {

}

interface PagesAPI {
  getCurrentPage (): Page
}

interface RoutingAPI {
  getCurrentRoute (): string;
}

// this thing will probably be what runs the entire application



export class ApplicationDriver {
  private app: Application;

  constructor (app: Application) {
    this.app = app;
  }

  getCurrentPage () {
    return this.app.pages.getCurrentPage()
  }

  getCurrentRoute () {
    return this.app.routing.getCurrentRoute();
  }
}

interface Application {
  todos: TodosAPI;
  pages: PagesAPI;
  routing: RoutingAPI;
}

type Context = 'dev' | 'prod' | 'test'

class TodosModule implements TodosAPI {

}

export interface TodoProps {
  id?: string;
  name: string;
  completed: boolean;
}

export interface CreateTodoInputProps {
  name: string;
  completed: boolean;
}

export class Todo {
  private props: TodoProps;

  private constructor (props: TodoProps) {
    this.props = props;
  }

  getName () {
    return this.props.name;
  }

  getId () {
    return this.props.id
  }

  isComplete () {
    return this.props.completed
  } 

  public static create (inputProps: CreateTodoInputProps) {
    return new Todo({
      // do ID later
      ...inputProps
    })
  } 
}

abstract class Collection<T> {
  items: T[];
  constructor (items:T []) {
    this.items = items;
  }

  length (): number {
    return this.items.length;
  }
}

export class Todos extends Collection<Todo> {
  
}


export type Maybe<T> = T | undefined;

interface TodoDTO {

}

export interface TodosState {
  selectedTodo?: Todo;
  todos: TodoDTO[]
}



class PageService implements PagesAPI {

  constructor (
    private currentPage: Page
    ) {
    
  }

  getCurrentPage () {
    return this.currentPage; 
  }
}

class RoutingModule implements RoutingAPI {
  getCurrentRoute (): string {
    return '/'
  }
}

export class CompositionRoot {

  private context: Context;
  private application: Application;
  private applicationDriver: ApplicationDriver;
  private todosPresenter: TodosPresenter;
  private todosController: TodosController;
  private todosRepo: TodosRepo;
  private todosPage: TodosPage;
  private globalCache: GlobalCache;

  constructor (context: Context) {
    this.context = context;
    this.application = this.createApplication();
    this.applicationDriver = this.createApplicationDriver();
    this.globalCache = this.createGlobalCache();
    this.todosRepo = this.createTodosRepo();
    this.todosPresenter = this.createTodosPresenter();
    this.todosController = this.createTodosController();
    this.todosPage = this.createTodosPage();
  }

  private createGlobalCache () {
    return GlobalCache.createEmpty();
  }

  private createTodosPage () {
    let todosPresenter = this.getTodosPresenter();
    let todosController = this.getTodosController();
    return new TodosPage(todosPresenter, todosController);
  }

  private createTodosRepo () {
    let globalCache = this.getGlobalCache();
    return new TodosRepo(globalCache);
  }

  private createTodosPresenter () {
    return new TodosPresenter();
  }

  private createTodosController () {
    let todosRepo = this.getTodosRepo();
    return new TodosController(todosRepo);
  }

  private getTodosRepo () {
    return this.todosRepo;
  }

  private getTodosPresenter () {
    return this.todosPresenter;
  }

  private getTodosController () {
    return this.todosController;
  }

  public getTodosPage () {
    return this.todosPage;
  }

  private getGlobalCache () {
    return this.globalCache;
  }

  private createApplication () {
    let todos = new TodosModule();
    let todosPage = this.getTodosPage();
    let pages = new PageService(todosPage);
    let routing = new RoutingModule();

    return { todos, pages, routing }
  }

  private createApplicationDriver () {
    let application = this.getApplication()
    return new ApplicationDriver(application);
  }

  getApplication (): Application {
    return this.application;
  }

  getApplicationDriver () {
    return this.applicationDriver;
  }
}