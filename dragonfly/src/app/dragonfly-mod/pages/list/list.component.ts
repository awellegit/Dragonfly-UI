import { Component, OnInit, Input } from '@angular/core';
import { Dragonfly } from '../../models/dragonfly.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
   dragonflies: Dragonfly[] = [
    {
      knownAs: "Butterfly Dragonfly",
      species: "Rhyothemis fuliginosa",
      class: "Insecta",
      order: "Odonata",
      family: "Libellulidae",
      domain: "Eukaryota",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      about: "The Buttuerfly Dragonfly has iridescent shades of deep blue. Males also have spots on the tips of their back wings.",
      size: "35-41mm long",
      habitat: "Inland freshwater wetlands",
      diet: "Mosquitoes",
      lifeCycle: "Egg, Larva (nymph or damselfly), Adult",
      lifeSpan: "One week to eight weeks",
      range: "China, Taiwan, Japan, and the Korean Peninsula"
    }
  ]
  
  headers: {headerName: string, fieldName: keyof Dragonfly}[] = [
    {headerName: "Known As", fieldName: "knownAs"},
    {headerName: "Species", fieldName: "species"},
    {headerName: "Class", fieldName: "class"},
    {headerName: "Order", fieldName: "order"},
  ]

  constructor() { }

}
