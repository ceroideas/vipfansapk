import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const SESSION_DATA:any = [];

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  userData:any = {
    "id": 1,
    "usuario": ""
  };


  autenticationState = new BehaviorSubject(false);

  constructor( private plt: Platform ) {

    this.plt.ready().then(() => {

      this.checkToken();

    });

  }


  async login(){

    this.autenticationState.next(true);
    return true;

  }

  async logout(){

    // await this.storage.remove(SESSION_DATA);
    this.autenticationState.next(false);

  }

  isAuthenticated(){

    return this.autenticationState.value;

  }

  async checkToken(){

    // const res = await this.storage.get(SESSION_DATA);
    // if (res) {
    //   this.autenticationState.next(true);
    // }

  }

}
