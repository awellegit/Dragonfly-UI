import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../pages/list/list.component';
import { FormComponent } from '../pages/pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: '',
    component: FormComponent,
  },
];

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonflyModRoutingModule {}
