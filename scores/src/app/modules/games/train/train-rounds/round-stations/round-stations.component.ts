import { Component, Injector, Input, OnInit } from '@angular/core';
import { RoundMember, UID } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';
import { RoundBase, ROUND_COMPONENT } from '../round-interfaces';
import { RoundBaseDirective } from '../round.directive';

@Component({
  selector: 'app-round-stations',
  templateUrl: './round-stations.component.html',
  styleUrls: ['./round-stations.component.scss'],
  providers: [{
    provide: ROUND_COMPONENT,
    useExisting: RoundStationsComponent,
  }]
})
export class RoundStationsComponent
extends RoundBaseDirective
implements OnInit, RoundBase {
  // @Input() playerId: UID;
  // @Input() roundId: string;

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
  }

  addToScoresLine(score: number): void {
    this.sharedService.addToScoresLine(score, this.playerId, this.roundId);
  }

  removeFromScoresLine(score: number): void {
    this.sharedService.removeFromScoresLine(score, this.playerId, this.roundId);
  }

  // getMemberByPlayerId(): RoundMember {
  //   console.log('getMemberByPlayerId', this)
  //   return super.getMemberByPlayerId()
  //   // return this.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
  // }

  calcScores(): number {
    return this.getMemberByPlayerId().scoresLine.reduce((prev, cur) => prev + cur, 0);
  }
}
