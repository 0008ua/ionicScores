import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { from, Observable, of, throwError } from 'rxjs';
import { GetResult, Storage } from '@capacitor/storage';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IGamer, IUser, NamedScore, Round, RoundCfg, RoundMember, UID } from '../interfaces';
import { Store } from '@ngrx/store';
import { selectAllPlayers } from '../store/reducers/player.reducer';
import { v4 as uuidv4 } from 'uuid';
import { environment } from 'src/environments/environment';
import { clearRounds, loadRounds } from '../store/actions/round.actions';
import { addRoundMembers, clearRoundMembers, loadRoundMembers } from '../store/actions/round-member.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { selectAllRounds } from '../store/reducers/round.reducer';
import { selectAllRoundMembers, selectByIdRoundMember } from '../store/reducers/round-member.reducer';
import * as fromAppActions from '../store/actions/app.actions';
import { selectRedirectionUrl } from '../store/reducers/app.reducer';
import { Router } from '@angular/router';
import { redirection } from '../store/actions/app.actions';
import * as fromRoundMembersActions from '../store/actions/round-member.actions';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  players: IGamer[] = [];
  players$: Observable<IGamer[]>;

  rounds: Round[] = [];
  rounds$: Observable<Round[]>;

  roundMembers: RoundMember[] = [];
  roundMembers$: Observable<RoundMember[]>;

  host = environment.host;
  url$: Observable<string>;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,

  ) {
    this.url$ = this.store.select(selectRedirectionUrl);
    this.url$
      .subscribe((url) => {
        if (url) {
          this.router.navigateByUrl(url);
          this.store.dispatch(redirection({ redirectionUrl: null }));
        }
      });

    this.players$ = this.store.select(selectAllPlayers);
    this.players$.subscribe((players) => {
      this.players = players;
    });

    this.rounds$ = this.store.select(selectAllRounds);
    this.rounds$.subscribe((rounds) => {
      this.rounds = rounds;
    });

    this.roundMembers$ = this.store.select(selectAllRoundMembers);
    this.roundMembers$.subscribe((roundMembers) => {
      this.roundMembers = roundMembers;
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

  checkStorageItemExists(key: string): Observable<any> {
    return from(Storage.keys()).pipe(
      map((keysResult) => {
        return keysResult.keys.includes(key);
      })
    );
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
    return this.checkStorageItemExists('token').pipe(
      switchMap((isTokenExists) => {
        if (!isTokenExists) {
          return this.setToken(null);
        }
        return of(null);
      }),
      switchMap((_) => this.getToken()),
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

    let roundMembers = [];
    const rounds: Round[] = environment.games[gameType].rounds
      .filter((roundCfg: RoundCfg) => roundCfg._id !== 'start')
      .map((roundCfg: RoundCfg) => {
        const members = this.players.map((player) => ({
          _id: uuidv4(),
          player: player._id,
          scoresLine: roundCfg.initialScoresLine,
          namedScoresLine: roundCfg.initialNamedScoresLine,
        }));
        roundMembers = [...roundMembers, ...members];
        return {
          _id: roundCfg._id + roundCfg.namePostfix,
          roundMembers: members.map((member) => (member._id)),
          clientGame,
          icon: roundCfg.icon,
          name: roundCfg._id,
          namePostfix: roundCfg.namePostfix,
        };
      });
    this.store.dispatch(fromAppActions.loadGame({ roundMembers, rounds }));
  }

  addRounds(roundCfg: RoundCfg): void {
    const members = this.players.map((player) => ({
      _id: uuidv4(),
      player: player._id,
      scoresLine: roundCfg.initialScoresLine,
      namedScoresLine: roundCfg.initialNamedScoresLine,
    }));
    const roundMembers = [...this.roundMembers, ...members];
    const rounds = [
      ...this.rounds,
      {
        _id: roundCfg._id + (this.rounds.length + 1),
        roundMembers: members.map((member) => (member._id)),
        clientGame: this.rounds[0].clientGame,
        icon: roundCfg.icon,
        name: roundCfg._id,
        namePostfix: this.rounds.length + 1 + '',
      }
    ];
    this.store.dispatch(fromAppActions.loadGame({ roundMembers, rounds }));
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

  getPlayerTotalScores(player: string): number {

    let sum = 0;
    this.roundMembers.forEach((roundMember) => {
      if (roundMember.player === player) {
        sum += roundMember.scoresLine.reduce((prev, cur) => prev + cur, 0);
      }
    });
    return sum;
  }

  calcQtyOfArrItems(item: string | number, playerId: string, roundId: string): number {
    let count = 0;

    this.getMemberByPlayerId(playerId, roundId).scoresLine.forEach((arrItem) => {
      if (arrItem === item) {
        count++;
      }
    });
    return count;
  }

  calcScores(playerId: UID, roundId: string): number {
    return this.getMemberByPlayerId(playerId, roundId).scoresLine.reduce((prev, cur) => prev + cur, 0);
  }

  getPlayerColor(playerId: UID): string {
    return this.players.find((player) => player._id === playerId).color;
  }

  getPlayerName(playerId: UID): string {
    return this.players.find((player) => player._id === playerId).name;
  }

  getRoundById(roundId: string): Round {
    return this.rounds.find((round) => round._id === roundId);
  }

  getMemberByPlayerId(playerId: UID, roundId: string): RoundMember {
    const round = this.getRoundById(roundId);
    return this.roundMembers
      .find((roundMember) =>
        roundMember.player === playerId && round?.roundMembers.includes(roundMember._id)
      );
  }
  getRoundMemberById$(roundMemberId: UID): Observable<RoundMember> {
    return this.store.select(selectByIdRoundMember(roundMemberId));
  }

  addToNamedScoresLine(namedScore: NamedScore, playerId: UID, roundId: string) {
    console.log('namedScore', namedScore)
    const roundMember = this.getMemberByPlayerId(playerId, roundId);
    const changes = {
      ...roundMember,
      namedScoresLine: [...roundMember.namedScoresLine, namedScore],
    };
    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: roundMember._id,
        changes,
      }
    }));
    this.addToScoresLine(namedScore.value, playerId, roundId);
  }

  addToScoresLine(score: number, playerId: UID, roundId: string) {
    const roundMember = this.getMemberByPlayerId(playerId, roundId);
    const changes = {
      ...roundMember,
      scoresLine: [...roundMember.scoresLine, score],
    };
    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: roundMember._id,
        changes,
      }
    }));
  }

  removeFromNamedScoresLine(namedScore: NamedScore, playerId: UID, roundId: string) {
    const roundMember = this.getMemberByPlayerId(playerId, roundId);
    const namedScoresLine = [...roundMember.namedScoresLine];
    const index = namedScoresLine.findIndex((ns) => ns.name === namedScore.name);
    if (index !== -1) {
      namedScoresLine.splice(index, 1);
      const changes = {
        ...roundMember,
        namedScoresLine,
      };
      this.store.dispatch(fromRoundMembersActions.updateRoundMember({
        roundMember:
        {
          id: roundMember._id,
          changes,
        }
      }));

      this.removeFromScoresLine(namedScore.value, playerId, roundId);
    };
  }

  removeFromScoresLine(score: number, playerId: UID, roundId: string) {
    const roundMember = this.getMemberByPlayerId(playerId, roundId);
    const scoresLine = [...roundMember.scoresLine];
    const index = scoresLine.indexOf(score);
    scoresLine.splice(index, 1);

    const changes = {
      ...roundMember,
      scoresLine,
    };

    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: roundMember._id,
        changes,
      }
    }));
  }

  setScoresLine(scoresLine: number[], playerId: UID, roundId: string) {
    const roundMember = this.getMemberByPlayerId(playerId, roundId);
    const changes = {
      ...roundMember,
      scoresLine,
    };

    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: roundMember._id,
        changes,
      }
    }));
  }
}
