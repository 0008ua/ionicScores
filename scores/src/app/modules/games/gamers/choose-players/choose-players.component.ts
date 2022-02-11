import { AfterViewChecked, Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionSelectors, EntityActionFactory, MergeStrategy } from '@ngrx/data';
import { ReducerManager, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { IGamer, Colors, IGame } from 'src/app/interfaces';
import { GamerDataService, GamerService } from 'src/app/store/gamer-data.service';
import { AuthService } from '../../../auth/auth.service';
import { environment } from 'src/environments/environment';
import { AlertController, PopoverController } from '@ionic/angular';
import { SelectColorComponent } from '../select-color/select-color.component';
import { CreateGamerComponent } from '../create-gamer/create-gamer.component';
import { v4 as uuidv4 } from 'uuid';
import { GameService } from 'src/app/store/game-data.service';
import { addRound, loadRounds } from 'src/app/store/actions/round.actions';
import { loadPlayers } from 'src/app/store/actions/player.actions';
import * as fromPlayersReducer from '../../../../store/reducers/player.reducer';
import * as fromPlayersActions from '../../../../store/actions/player.actions';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-choose-players',
  templateUrl: './choose-players.component.html',
  styleUrls: ['./choose-players.component.scss'],
})
export class ChoosePlayersComponent implements OnInit {
  gamers$: Observable<IGamer[]> | Store<IGamer[]>;
  gamers: IGamer[] = [];

  // games$: Observable<IGame[]> | Store<IGame[]>;
  // games: IGame[] = [];

  filtredGamers: IGamer[] = [];
  // showSelectColor: number | null;
  players: IGamer[] = [];
  players$: Observable<IGamer[]>;
  // recentPlayers$: Observable<IGamer[]>;
  // playersTotal$: Observable<number>;

  playersColors = environment.games.train.playersColors as Colors[];
  filtredColors = environment.games.train.playersColors as Colors[];

  constructor(
    private store: Store,
    public translate: TranslateService,
    private gamerService: GamerService,
    public popoverController: PopoverController,
    public alertController: AlertController,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    this.players$.subscribe((players) => {
      this.players = players;
      this.filter();
    });


    this.gamers$ = this.gamerService.entities$;
    this.gamers$.subscribe((gamers) => {
      this.gamers = gamers;
      this.filter();
    });
  }

  startGameHandler() {
    // const players = this.players.map((player) => ({
    //   _id: player._id,
    //   scoresLine: []
    // }));

    // const stationsRoundPlayers = this.players.map((player) => ({
    //   _id: player._id,
    //   scoresLine: [12]
    // }));

    // const clientGame = {
    //   _id: uuidv4(),
    //   type: 'train',
    // };



    // const rounds = [
    //   { _id: 'start', players, clientGame },
    //   { _id: 'routes', players, clientGame },
    //   { _id: 'length', players, clientGame },
    //   { _id: 'stations', players: stationsRoundPlayers, clientGame },
    //   { _id: 'cars', players, clientGame },
    // ];

    this.sharedService.createRounds('train');

    // this.store.dispatch(clientGameStartAction({ clientGame }));
    // this.store.dispatch(loadRounds({ rounds }));
    // this.store.dispatch(loadPlayers({ players: this.players }));


    // dispatch(clientGameActions.setAll([clientGame]));
    // dispatch(recentPlayerActions.setAll(this.players));
    // dispatch(clientRoundActions.setAll(clientRounds));

  }

  async presentPopover(event: Event, component: any, data: any): Promise<any> {
    const popover = await this.popoverController.create({
      component,
      cssClass: 'select-color-popover',
      // event,
      componentProps: data,
      translucent: true,
    });
    await popover.present();
    return await popover.onDidDismiss();
  }

  async showSelectColorPopup(event: Event, index: number) {
    const { data } = await this.presentPopover(event, SelectColorComponent, { colors: this.filtredColors });
    if (data) {
      const { color } = data;
      this.chooseColorHandler(color, index);
    }
  }

  async showCreateGamerPopup(event: Event) {
    const { data } = await this.presentPopover(event, CreateGamerComponent, null);
    if (data) {
      const { gamer } = data;
      console.log('gamer', data);
      this.createGamerHandler(gamer);
    }
  }

  filter() {
    this.filtredGamers = this.gamers.filter((gamer) => {
      for (const player of this.players) {
        if (player._id === gamer._id) {
          return false;
        }
      }
      return true;
    });
    this.filtredColors = this.playersColors.filter((color) => {
      for (const player of this.players) {
        if (player.color === color) {
          return false;
        }
      }
      return true;
    });
  }

  choosePlayerHandler(e: any, index: number) {
    const players = this.players.map((player, idx) => {
      if (idx === index) {
        const preferredColor = this.filtredGamers[0].color;
        if (this.filtredColors.includes(preferredColor)) {
          return e.target.value;
        } else {
          return { ...e.target.value, color: this.filtredColors[0] };
        }
      }
      return player;
    });
    console.log('players', players);
    this.store.dispatch(fromPlayersActions.loadPlayers({players}));



    // this.filter();
  }

  chooseColorHandler(color: Colors, index: number) {
    this.players = this.players.map((player, idx) => {
      if (idx === index) {
        return { ...player, color };
      }
      return player;
    });
    this.filter();
  }

  removePlayerHandler(_id: string) {
    this.store.dispatch(fromPlayersActions.deletePlayer({ id: _id }));
    // this.players = this.players.filter((player, idx) => idx !== index);
    // console.log('this.players', this.players);
    // this.store.dispatch(loadPlayers({ players: [...this.players] }));

    // this.filter();
  }

  removeAllPlayersHandler() {
    this.store.dispatch(fromPlayersActions.clearPlayers());

    // this.players = [];
    // this.filter();
    // this.addPlayerHandler();
  }


  addPlayerHandler(firstEl = true) {
    if (!this.filtredGamers.length) {
      return;
    }
    let candidate = this.filtredGamers[0];
    if (!firstEl) {
      candidate = this.filtredGamers[this.filtredGamers.length - 1];
    }
    const preferredColor = candidate.color;
    if (this.filtredColors.includes(preferredColor)) {
      this.store.dispatch(fromPlayersActions.addPlayer({ player: { ...candidate } }));
    } else {
      this.store.dispatch(fromPlayersActions.addPlayer({ player: { ...candidate, color: this.filtredColors[0] } }));
    }
    // this.filter();
  }

  createGamerHandler(gamer: IGamer) {
    this.gamerService.add(gamer)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
