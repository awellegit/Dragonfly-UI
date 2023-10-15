import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../pages/pages/form/form.component';
import { DashboardComponent } from '../pages/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonflyModRoutingModule {}
