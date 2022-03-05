import { Component, OnInit } from '@angular/core';
import { IGamer } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],
})
export class TrainPage implements OnInit {
  players: IGamer[];
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    console.log('view')
    this.getRaiting();
  }

  getRaiting() {
    this.sharedService.getRaiting()
      .subscribe((players) => {
        this.players = players;
        console.log('raiting players', players);
      });
  }

}
