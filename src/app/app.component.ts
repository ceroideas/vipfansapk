import { Component } from '@angular/core';

import { MenuController, NavController, Events } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AutenticationService } from './services/autentication/autentication.service'
import { AuthService } from './services/auth/auth.service'
import { ApiService } from './service/api.service'

// Import Auth0Cordova
import Auth0Cordova from '@auth0/cordova';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [TranslateService]
})
export class AppComponent {

  showHeader: boolean = false;
  showFooter: boolean = false;

  perspective = 1;

  user = JSON.parse(localStorage.getItem('profile'));

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private events: Events,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AutenticationService,
    private auth: AuthService,
    private nav: NavController,
    private api: ApiService,
    private translate: TranslateService
  ) {

    this.api.getRestrictions().subscribe(data=>{
      localStorage.setItem('restrictions',JSON.stringify(data));
    })

    let ln;

    if (!localStorage.getItem('lang')) {
      ln = window.navigator.language||navigator.language;

      if (ln.indexOf('en') != -1) {
        ln = 'en';
      }else{
        ln = 'es';
      }
    }else{
      ln = localStorage.getItem('lang');
    }

    this.translate.setDefaultLang('es');
    this.translate.use(ln);

    this.initializeApp();

    this.events.subscribe('login',()=>{
      this.user = JSON.parse(localStorage.getItem('profile'));
    })

    this.events.subscribe('clickCogout',()=>{
      this.logout();
    })
  }

  setlang(ln)
  {
    localStorage.setItem('lang',ln);
    this.translate.use(ln);
    location.reload();
  }

  rotateThis()
  {
    let el = document.querySelector('#rotate');
    el.setAttribute('style', 'transform: rotate(2160deg);transition: all 3000ms;width: 24px; opacity: .7;');

    setTimeout(()=>{
      el.setAttribute('style', 'width: 24px; opacity: .7;');
    },3000)
  }

  closeMenu(){

    this.menu.close('first');

  }

  logout()
  {
    this.closeMenu();
    localStorage.removeItem('profile');
    this.auth.logout();
    this.authService.logout();

    this.showHeader = false;
    this.showFooter = false;

    this.router.navigate(['/login']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Redirect back to app after authenticating
      (window as any).handleOpenURL = (url: string) => {
        Auth0Cordova.onRedirectUri(url);
      }

      // this.router.navigate(['videos/getting-videos']);
      //     this.showHeader = true;
      //     this.showFooter = true;

      localStorage.removeItem('likes');
      localStorage.removeItem('vipfans');
      localStorage.removeItem('comments');
      localStorage.removeItem('videos');

      localStorage.removeItem('buttonlp');
      localStorage.removeItem('buttonfp');
      localStorage.removeItem('buttonvp');
      localStorage.removeItem('buttoncp');

      localStorage.removeItem('totallp');
      localStorage.removeItem('totalfp');
      localStorage.removeItem('totalvp');
      localStorage.removeItem('totalcp');

      this.authService.autenticationState.subscribe(state => {

        if (state) {
          this.router.navigate(['likes/likes-manual']);
          // this.router.navigate(['gestion/gestion']);
          this.showHeader = true;
          this.showFooter = true;
        } else {
          this.router.navigate(['login']);
        }

      });

    });

  }

  telegram()
  {
    window.open('https://t.me/vipfans','_blank');
  }

  faqs()
  {
    window.open('http://depruebas.club/vipfans/backend/public/faqs','_blank');
  }

  contact()
  {
    window.open('http://depruebas.club/vipfans/backend/public/contacto','_blank');
  }

  changePerspective()
  {
    if (this.perspective == 1) {
      this.perspective = 2
    }else{
      this.perspective = 1;
    }
  }

  goToGestion()
  {
    this.router.navigate(['gestion/gestion']);
  }
}
