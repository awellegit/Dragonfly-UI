import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/pages/form/form.component';
import { DragonflyModRoutingModule } from './dragonfly-mod-routing/dragonfly-mod-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [FormComponent, DashboardComponent],
  imports: [
    CommonModule,
    DragonflyModRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class DragonflyModModule { }
