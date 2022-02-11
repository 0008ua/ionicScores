import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService, EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory, HttpUrlGenerator
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IGamer, IUser } from '../interfaces';

@Injectable()

export class GamerDataService extends DefaultDataService<IGamer> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('gamer', http, httpUrlGenerator);
  }
  add(entity: IGamer): Observable<IGamer> {
    console.log('add entity', entity);
    return super.add(entity).pipe(
      tap((gamers) => console.log('gamers all', gamers))
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class GamerService extends EntityCollectionServiceBase<IGamer> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('gamer', serviceElementsFactory);
  }
}


