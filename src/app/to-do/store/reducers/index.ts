import { ActionReducerMap } from "@ngrx/store";
import { toDoReducer } from "../reducers/to-do.reducer";
import { ToDoModuleState } from "../state/to-do.state";

export const ToDoReducerFeature: ActionReducerMap<ToDoModuleState> = {
  toDoReducer,
};
