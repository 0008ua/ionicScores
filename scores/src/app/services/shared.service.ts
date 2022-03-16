import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { from, Observable, of, throwError } from 'rxjs';
import { GetResult, Storage } from '@capacitor/storage';
import { catchError, map, tap } from 'rxjs/operators';
import { IGamer, IUser, Round, RoundCfg } from '../interfaces';
import { Store } from '@ngrx/store';
import { selectAllPlayers } from '../store/reducers/player.reducer';
import { v4 as uuidv4 } from 'uuid';
import { environment } from 'src/environments/environment';
import { loadRounds } from '../store/actions/round.actions';
import { addRoundMembers, clearRoundMembers, loadRoundMembers } from '../store/actions/round-member.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  players: IGamer[] = [];
  players$: Observable<IGamer[]>;

  constructor(
    private store: Store,
    private http: HttpClient,
  ) {
    this.players$ = this.store.select(selectAllPlayers);
    this.players$.subscribe((players) => {
      this.players = players;
    });
  }

  setToStorage(key: string, value: any): Observable<void> {
    return from(Storage.set({ key, value }));
  }

  getFromStorage(key: string): Observable<string | null> {
    return from(Storage.get({ key })).pipe(
      map((data) => {
        if (data.value) {
          return data.value;
        } else {
          return null;
        }
      }),
    );
  }

  removeFromStorage(key: string): Observable<void> {
    console.log('remove', key)
    return from(Storage.remove({ key }));
  }

  removeToken(): Observable<void> {
    return from(Storage.remove({ key: 'token' }));
  }

  setToken(token: string): Observable<void> {
    return from(Storage.set({ key: 'token', value: token }));
  }

  getToken(): Observable<string> {
    return from(Storage.get({ key: 'token' })).pipe(
      map((token) => {
        if (token) {
          return token.value;
        } else {
          return null;
        }
      }),
    );
  }

  decodeToken(): Observable<IUser | any> {
    return this.getToken().pipe(
      map((token) => {
        return jwtDecode(token);
      }),
    );
  }

  createRounds(gameType: string): void {
    const clientGame = {
      _id: uuidv4(),
      type: gameType,
    };
    // this.store.dispatch(clearRoundMembers());
    let roundMembers = [];
    const rounds: Round[] = environment.games[gameType].rounds
      .filter((round: RoundCfg) => round._id !== 'start')
      .map((round: RoundCfg) => {

        const members = this.players.map((player) => ({
          _id: uuidv4(),
          player: player._id,
          scoresLine: round.initialScoresLine,
        }));
        roundMembers = [...roundMembers, ...members];
        // this.store.dispatch(addRoundMembers({ roundMembers: members }));
        return {
          _id: round._id,
          roundMembers: members.map((member) => (member._id)),
          clientGame,
          icon: round.icon
        };
      });

    this.store.dispatch(loadRoundMembers({ roundMembers }));
    this.store.dispatch(loadRounds({ rounds }));
  }

  getRaitingByWins(): Observable<IGamer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IGamer[]>(
      environment.host + 'api/analytics/get-wins/',
      httpOptions,
    ).pipe(catchError((err) => throwError(err)));
  }

  getRaitingByWinsToGames(): Observable<IGamer[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<IGamer[]>(
    environment.host + 'api/analytics/get-wins-to-games/',
    httpOptions,
  ).pipe(catchError((err) => throwError(err)));
}

}
