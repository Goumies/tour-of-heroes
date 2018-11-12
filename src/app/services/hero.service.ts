import { Injectable } from '@angular/core';
import { Hero } from '@app/classes/hero';
import { HEROES } from '@app/mock/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
