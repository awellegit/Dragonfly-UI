import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Dragonfly } from '../../../models/dragonfly.interface';
import { ExampleDataSource } from './example.datasource';

const ELEMENT_DATA: Dragonfly[] = [
  {
    knownAs: "Butterfly Dragonfly",
    species: "Rhyothemis fuliginosa",
    class: "Insecta",
    imageUrl: "assets/800px-Rhyothemis_fuliginosa.jpg",
  },
  {
    knownAs: "Dragonfly Anatomy",
    species: "All",
    class: "Insecta",
    imageUrl: "assets/Dragonfly_anatomy.jpg",
  }
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  displayedColumns: string[] = ['knownAs', 'species', 'class', 'imageUrl'];
  dataToDisplay = [...ELEMENT_DATA];
  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Dragonfly Notes', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Dragonfly Notes', cols: 2, rows: 1 },
      ];
    })
  );
}

