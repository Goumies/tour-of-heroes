import { Injectable } from '@angular/core';
import { Hero } from '@app/classes/hero';
import { HEROES } from '@app/mock/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '@app/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
