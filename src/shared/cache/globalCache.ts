
import { TodosState } from "../..";

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