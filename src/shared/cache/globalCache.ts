
import { TodosState } from "../..";
import { BehaviorSubject } from "./behaviourSubject";

export interface GlobalDataModel {
  todos: TodosState;
}

export class GlobalCache {
  
  constructor (private globalDataModel: GlobalDataModel) {

  }

  public static createEmpty() {
    return new GlobalCache({ todos: { todos: [] }})
  }
}

let emptyCache = GlobalCache.createEmpty();
const observableCache = new BehaviorSubject(emptyCache);

observableCache.subscribe('todos', (todos: TodosState) => {

})