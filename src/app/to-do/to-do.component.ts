import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ItoDoState } from "./store/state/to-do.state";
import { ToDoFacade } from "./to-do.facade";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.scss"],
})
export class ToDoComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  title: string = "To do List";
  subTitle: string = "All";
  statesToDo: string[] = ["All", "Complete", "Pending"];
  toDoList: ItoDoState[] = [];
  titleToDo: string = "";

  constructor(private toDoFacade: ToDoFacade) {}

  ngOnInit(): void {
    this.selectToDo.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      console.log(value);

      this.toDoList = value;
    });
  }

  addnewToDo(): void {
    if (this.titleToDo !== "") {
      const newToDo: ItoDoState = {
        id: new Date().valueOf(),
        completed: false,
        title: this.titleToDo,
      };
      this.titleToDo = "";
      this.addTodo(newToDo);
    }
  }

  addTodo(toDo: ItoDoState): void {
    this.toDoFacade.addTodo(toDo);
  }

  deleteToDo(id: number): void {
    this.toDoFacade.deleteToDo(id);
  }

  toggleToDo(id: number): void {
    this.toDoFacade.toggleToDo(id);
  }

  get selectToDo(): Observable<ItoDoState[]> {
    return this.toDoFacade.selectToDo;
  }
}
