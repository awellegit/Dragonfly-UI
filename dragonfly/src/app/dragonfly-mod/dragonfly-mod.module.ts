import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/pages/form/form.component';
import { DragonflyModRoutingModule } from './dragonfly-mod-routing/dragonfly-mod-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    DragonflyModRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule
  ]
})
export class DragonflyModModule { }
