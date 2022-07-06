import { Directive, Injector, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGamer, NamedScore, Round, RoundMember, UID } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';
import { selectAllRoundMembers } from 'src/app/store/reducers/round-member.reducer';
import { selectAllRounds } from 'src/app/store/reducers/round.reducer';
import { environment } from 'src/environments/environment';
import { RoundBase, RoundScoresLine, RoundTBase } from './round-interfaces';

@Directive({
  selector: '[appRound]',
})
export class RoundBaseDirective
  implements RoundBase {
  @Input() playerId: UID;
  @Input() roundId: string;
  sharedService: SharedService;

  constructor(
    injector: Injector,
  ) {
    this.sharedService = injector.get(SharedService);
  }

  getMemberByPlayerId(): RoundMember {
    return this.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
  }
}

@Directive({
  selector: '[appRoundScoresLine]'
})
export class RoundScoresLineDirective extends RoundBaseDirective
  implements RoundScoresLine {

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  addToScoresLine(score: number): void {
    this.sharedService.addToScoresLine(score, this.playerId, this.roundId);
  }

  removeFromScoresLine(score: number): void {
    this.sharedService.removeFromScoresLine(score, this.playerId, this.roundId);
  }

  addToNamedScoresLine(namedScore: NamedScore, playerId?: UID) {
    this.sharedService.addToNamedScoresLine(namedScore, playerId || this.playerId, this.roundId);
  }

  removeFromNamedScoresLine(namedScore: NamedScore) {
    this.sharedService.removeFromNamedScoresLine(namedScore, this.playerId, this.roundId);
  }
}

@Directive({
  selector: '[appRoundT]',
})
export class RoundTBaseDirective extends RoundScoresLineDirective
  implements RoundTBase {
  store: Store;
  rounds$: Observable<Round[]>;
  roundMembers$: Observable<RoundMember[]>;
  // roundMembers: RoundMember[];

  constructor(
    injector: Injector,
  ) {
    super(injector);
    this.store = injector.get(Store);
    this.rounds$ = this.store.select(selectAllRounds);
    this.roundMembers$ = this.store.select(selectAllRoundMembers);
    // this.roundMembers$.subscribe((roundMembers) => this.roundMembers = roundMembers)
  }
}
