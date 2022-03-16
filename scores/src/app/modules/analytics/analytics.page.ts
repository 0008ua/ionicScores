import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import { logout } from 'src/app/store/actions/auth.actions';
import { selectUser, selectUserRole } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-games',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  userRole$: Observable<IUser['role']>;
  user$: Observable<IUser>;
  lang: string;

  constructor(
    private store: Store,
    public translate: TranslateService,
    private menuController: MenuController,
  ) { }

  ngOnInit() {
    this.userRole$ = this.store.select(selectUserRole);
    this.user$ = this.store.select(selectUser);
  }

  ionViewWillEnter() {
    console.log('analytics ionViewWillEnter')
    this.menuController.enable(true, 'analytics-menu');
  }

  onLogout() {
    this.store.dispatch(logout());
  }

  switchLanguage() {
    this.lang = this.lang === 'en' ? 'uk' : 'en';
    this.translate.use(this.lang);
  }

}
