import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ItoDoState } from "../../store/state/to-do.state";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() toDo: ItoDoState = {};
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() toggleEvent: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: number | undefined): void {
    if (id) {
      this.deleteEvent.emit(id);
    }
  }

  toggleTodo(id: number | undefined): void {
    console.log(id);
    
    if (id) {
      this.toggleEvent.emit(id);
    }
  }
}
