import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { homeRouting, toDoRouting } from "../global/constanst";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: homeRouting,
    pathMatch: "full",
  },
  {
    path: homeRouting,
    component: HomeComponent,
  },
  {
    path: toDoRouting,
    loadChildren: () =>
      import("../to-do/to-do.module").then((m) => m.ToDoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
