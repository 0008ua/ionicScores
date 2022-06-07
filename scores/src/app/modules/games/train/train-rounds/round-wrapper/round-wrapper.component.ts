import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { Round, RoundMember, UID } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';
import { RoundBase, ROUND_COMPONENT } from '../round-interfaces';

@Component({
  selector: 'app-round-wrapper',
  templateUrl: './round-wrapper.component.html',
  styleUrls: ['./round-wrapper.component.scss'],
})
export class RoundWrapperComponent implements OnInit, RoundWrapperComponent {
  @ContentChild(ROUND_COMPONENT, { static: true })
  roundComponent: RoundBase;
  @Input() playerId: UID;
  @Input() roundId: string;

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
  }

  getRoundById(): Round {
    return this.sharedService.getRoundById(this.roundId);
  }

  calcScores(): number {
    return this.getMemberByPlayerId().scoresLine.reduce((prev, cur) => prev + cur, 0);
  }

  getPlayerColor(): string {
    return this.sharedService.getPlayerColor(this.playerId);
  }

  getPlayerName(): string {
    return this.sharedService.getPlayerName(this.playerId);
  }

  getMemberByPlayerId(): RoundMember {
    return this.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
  }
}
