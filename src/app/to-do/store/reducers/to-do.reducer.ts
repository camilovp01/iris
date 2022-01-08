import { createReducer, on } from "@ngrx/store";
import { addToDo, deleteToDo, ToggleToDo } from "../actions/to-do.actions";
import { toDoinitialState } from "../state/to-do.state";

export const toDoReducer = createReducer(
  toDoinitialState,
  on(addToDo, (state, { toDo }) => [...state, { ...toDo }]),
  on(deleteToDo, (state, { id }) => {
    const newToDo = state.filter((todo) => todo.id !== id);
    return [...newToDo];
  }),
  on(ToggleToDo, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  ),
);
