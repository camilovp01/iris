import { createAction, props } from "@ngrx/store";
import { ItoDoState } from "../state/to-do.state";

export const enum TypeActionsToDo {
  add = "[TODO COMPONENT] Add",
  delete = "[TODO COMPONENT] delete",
  toggle = "[TODO COMPONENT] toggle",
}
export const addToDo = createAction(
  TypeActionsToDo.add,
  props<{ toDo: ItoDoState }>(),
);

export const deleteToDo = createAction(
  TypeActionsToDo.delete,
  props<{ id: number }>(),
);

export const ToggleToDo = createAction(
  TypeActionsToDo.toggle,
  props<{ id: number }>(),
);
