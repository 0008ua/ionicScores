import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IGame } from '../interfaces';

@Injectable()

export class GameDataService extends DefaultDataService<IGame> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('game', http, httpUrlGenerator);
  }
  // getAll(): Observable<User[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-language': 'en-US',
  //     }),
  //   };
  //   const urlPath = this.httpUrlGenerator.collectionResource('Operator', '');
  //   console.log('urlPath', urlPath);
  //   return this.http.get<User[]>(urlPath, httpOptions);
  // }
}

@Injectable({
  providedIn: 'root',
})
export class GameService extends EntityCollectionServiceBase<IGame> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('game', serviceElementsFactory);
  }
}
