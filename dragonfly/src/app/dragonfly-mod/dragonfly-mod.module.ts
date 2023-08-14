import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/pages/form/form.component';
import { DragonflyModRoutingModule } from './dragonfly-mod-routing/dragonfly-mod-routing.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    DragonflyModRoutingModule
  ]
})
export class DragonflyModModule { }
