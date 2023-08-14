import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dragonfly-mod",
    pathMatch: "full",
  },
  {
    path: "dragonfly-mod",
    loadChildren: () => import("./dragonfly-mod/dragonfly-mod.module").then((m) => m.DragonflyModModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
