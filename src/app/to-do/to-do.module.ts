import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { toDoFeatureStoreName } from "../global/constanst";
import { ItemComponent } from "./components/item/item.component";
import { ToDoReducerFeature } from "./store/reducers";
import { ToDoRoutingModule } from "./to-do-routing.module";
import { ToDoComponent } from "./to-do.component";
import { ToDoFacade } from "./to-do.facade";

@NgModule({
  declarations: [ToDoComponent, ItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToDoRoutingModule,
    StoreModule.forFeature(toDoFeatureStoreName, ToDoReducerFeature),
  ],
  providers: [ToDoFacade],
})
export class ToDoModule {}
