import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice'},
      { id: 13, name: 'Dr. sdafe'},
      { id: 14, name: 'Dr. sadf'},
      { id: 15, name: 'Dr. as'},
      { id: 16, name: 'Dr. jgj'},
      { id: 17, name: 'Dr. 23sfsdf'},
      { id: 18, name: 'Dr. Nasdfice'},
      { id: 19, name: 'Dr. hjkhNice'},
      { id: 120, name: 'Dr. 123123'},
    ];
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
