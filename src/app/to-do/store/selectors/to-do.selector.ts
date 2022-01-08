import { createFeatureSelector, createSelector } from "@ngrx/store";
import { toDoFeatureStoreName } from "src/app/global/constanst";
import { ToDoModuleState } from "../state/to-do.state";

export const toDoRootSelector = createFeatureSelector<ToDoModuleState>(
  toDoFeatureStoreName,
);

export const selectToDo = createSelector(
  toDoRootSelector,
  (state: ToDoModuleState) => state.toDoReducer,
);
