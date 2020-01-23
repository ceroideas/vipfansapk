import {Injectable,NgZone} from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import { AUTH_CONFIG } from '../auth.config';
import Auth0Cordova from '@auth0/cordova';
import * as auth0 from 'auth0-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

import { ApiService } from '../../service/api.service';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ = new Subject();
  // isLoggedIn: Boolean = false;
  // auth0 = new auth0.WebAuth({
  //   clientID: '6DiQrSI0967uzGAIVSjY2RskUTQZFc2x',
  //   domain: 'ceroideas.eu.auth0.com',
  //   responseType: 'token id_token',
  //   packageIdentifier: 'io.ivip.app'
  // });

  Auth0 = new auth0.WebAuth(AUTH_CONFIG);
  Client = new Auth0Cordova(AUTH_CONFIG);
  accessToken: string;
  user: any;
  loggedIn: boolean;
  loading = true;

  data:any;
  resp:any;
  headers:any;

  constructor(public api: ApiService, public router: Router, public http: HttpClient, public zone: NgZone, private storage: Storage, private safariViewController: SafariViewController, public events: Events) {

    // Check if user is logged In when Initializing
    // const loggedIn = this.isLoggedIn = this.isAuthenticated();
    this.isLoggedIn$.next(this.loggedIn);

  }

  login() {
    this.loading = true;
    const options = {
      scope: 'openid profile offline_access'
    };
    // Authorize login request with Auth0: open login page and get auth results
    this.Client.authorize(options, (err, authResult) => {
      if (err) {
        this.zone.run(() => this.loading = false);
        throw err;
      }
      // Set access token
      this.storage.set('access_token', authResult.accessToken);
      this.accessToken = authResult.accessToken;
      // Set access token expiration
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      this.storage.set('expires_at', expiresAt);
      // Set logged in
      this.loading = false;
      this.loggedIn = true;
      // Fetch user's profile info
      this.Auth0.client.userInfo(this.accessToken, (err, profile) => {
        if (err) {
          throw err;
        }
        this.api.usersAdd(profile).subscribe(data=>{
          localStorage.setItem('profile',JSON.stringify(data));
          this.events.publish('goToStart');
          this.events.publish('login');
        })
        // localStorage.setItem('profile', JSON.stringify(profile));
        // alert(JSON.stringify(profile));
        this.storage.set('profile', profile).then(val =>
          this.zone.run(() => this.user = profile)
        );
      });
    });
  }

  logout() {
    this.storage.remove('profile');
    this.storage.remove('access_token');
    this.storage.remove('expires_at');
    this.accessToken = null;
    this.user = null;
    this.loggedIn = false;

    this.safariViewController.isAvailable()
      .then((available: boolean) => {
        const domain = AUTH_CONFIG.domain;
        const clientId = AUTH_CONFIG.clientId;
        const pkgId = AUTH_CONFIG.packageIdentifier;
        let url = `https://${domain}/v2/logout?client_id=${clientId}&returnTo=${pkgId}://${domain}/cordova/${pkgId}/callback`;
        if (available) {
          this.safariViewController.show({
            url: url
          })
          .subscribe((result: any) => {
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded') console.log('Loaded');
              else if(result.event === 'closed') console.log('Closed');
            },
            (error: any) => console.error(error)
          );
        } else {
          // use fallback browser
          // cordova.InAppBrowser.open(url, '_system');
          window.open(url, '_system');
        }
      }
    );
  }

  // public login(): void {
  //   this.auth0.authorize();
  // }

  public handleAuthentication(): void {
    this.Auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        const loggedIn = this.loggedIn = true;
        this.isLoggedIn$.next(loggedIn);
        this.router.navigate(['/home']);
      } else if (err) {
        const loggedIn = this.loggedIn = false;
        this.isLoggedIn$.next(loggedIn);
        this.router.navigate(['/home']);
      }
      console.log(this.loggedIn);
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  // public logout(): void {
  //   // Remove tokens and expiry time from localStorage
  //   localStorage.removeItem('access_token');
  //   localStorage.removeItem('id_token');
  //   localStorage.removeItem('expires_at');
  //   // Go back to the home route
  //   const loggedIn = this.isLoggedIn = false;
  //   this.isLoggedIn$.next(loggedIn);
  // }

  // public isAuthenticated(): boolean {
  //   // Check whether the current time is past the
  //   // Access Token's expiry time
  //   const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
  //   return new Date().getTime() < expiresAt;
  // }



}
