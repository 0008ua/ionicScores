import { Directive, Injector, Input } from '@angular/core';
import { RoundMember, UID } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';
import { RoundBase, RoundScoresLine } from './round-interfaces';

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
}

