import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addToDo, deleteToDo, ToggleToDo } from "./store/actions/to-do.actions";
import { selectToDo } from "./store/selectors/to-do.selector";
import { ItoDoState } from "./store/state/to-do.state";

@Injectable()
export class ToDoFacade {
  public selectToDo: Observable<ItoDoState[]> = this.store.pipe(
    select(selectToDo),
  );

  constructor(private store: Store<ItoDoState>) {}

  /**
   * Add Todo
   * @param toDo To do
   */
  addTodo(toDo: ItoDoState): void {
    this.store.dispatch(addToDo({ toDo }));
  }

  /**
   * delete Todo
   * @param id To do Id
   */
  deleteToDo(id: number): void {
    this.store.dispatch(deleteToDo({ id }));
  }

  /**
   * toggle Todo
   * @param id To do Id
   */
  toggleToDo(id: number): void {
    this.store.dispatch(ToggleToDo({ id }));
  }
}
