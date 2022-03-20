import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signin, storeUserFromToken } from './store/actions/auth.actions';
import { State } from './store/reducers';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './modules/auth/auth.service';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  lang: string;

  constructor(
    private store: Store,
    private translate: TranslateService,
    private authService: AuthService,
  ) {
    // static translation initialization
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // this.lang = 'en';
    // for automatic lang detection
    const browserLang = translate.getBrowserLang();
    this.lang = browserLang.match(/uk|ru/) ? 'uk' : 'en';
    translate.use(this.lang);

    // set to store static translation language
    // this.store.dispatch(new LoadLang());
  }

  ngOnInit() {
    this.store.dispatch(storeUserFromToken());
  }
}
