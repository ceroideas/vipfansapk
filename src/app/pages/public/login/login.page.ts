import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, AlertController, LoadingController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';

// import { AuthService } from '../../../services/instagram-auth/auth.service';
import { AuthService } from '../../../services/auth/auth.service';
import { ApiService } from '../../../service/api.service';

import { TranslateService } from '@ngx-translate/core';

import { AutenticationService } from '../../../services/autentication/autentication.service';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AuthService,Facebook]
})
export class LoginPage implements OnInit {

  tocapantalla = true;

  @ViewChild('loginAnimation', {static: false}) loginAnimation: ElementRef;

  @ViewChild('dSlides', {static: false}) slides: IonSlides;

  showVideo: boolean = true;
  showSlider: boolean = false;

  constructor(public auth: AuthService,
    private fb: Facebook,
    public events: Events,
    public authService: AutenticationService,
    public alertCtrl: AlertController,
    public translate: TranslateService,
    public loadingCtrl: LoadingController,
    public api: ApiService,
    private router: Router, ) {

    this.events.subscribe('goToStart',()=>{
      this.router.navigate(['forms/form01']);
    });

    setTimeout(()=>{
      this.tocapantalla = false;
    },3000);

  }

  facebookLogin()
  {
    this.fb.login(['public_profile', 'email'])
    .then(res => {
      // alert(JSON.stringify(res));
      if (res.status === 'connected') {
        this.getUserDetail(res.authResponse.userID);
      }
    })
    .catch(e => {console.log('Error logging into Facebook', e);alert('error'+JSON.stringify(e))});
  }

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        console.log(res);

        // alert(JSON.stringify(res));

        res.avatar = res.picture.data.url;
        res.nickname = res.email.split("@")[0];

        // alert(JSON.stringify(res));

        localStorage.setItem('profile',JSON.stringify(res));
        // alert(JSON.stringify(this.users));

        this.router.navigate(['forms/form01']);
        this.events.publish('login');
      })
      .catch(e => {
        console.log(e);
      });
  }

  openAlert()
  {
    this.alertCtrl.create({message:this.translate.instant("SLIDES.invitation1"),buttons:
    [{
      text: this.translate.instant("SLIDES.accept"),
      handler:()=>{
        this.goToLogin();
      }
    },{
      text: this.translate.instant("SLIDES.cancel"),
      handler:()=>{
        
      }
    }],inputs:[
    {
      type: 'text',
      placeholder: this.translate.instant("SLIDES.paste")
    }
    ]}).then((a)=>{
      a.present();
    })
  }

  ngOnInit() {

    if (!localStorage.getItem('sliderOff')) {
      this.showSlider = true;
    }

    setTimeout(() => {

      if (localStorage.getItem('profile')) {
        if (localStorage.getItem('profile-completed')) {

          this.authService.login();

          this.router.navigate(['likes/likes-manual']);
        }else{
          this.router.navigate(['forms/form01']);
        }
      }else{
        this.showVideo = false;
      }

     // }, 10);
     }, 10000);

  }

  muteVideo()
  {
    let el = document.getElementsByTagName('video')[0];

    if (el.volume == 0) {
      el.volume = 1;
    }else{
      el.volume = 0;
    }

  }

  next(i)
  {
    this.slides.slideTo(i);
  }

  goToLogin()
  {
    this.showSlider = false;
    localStorage.setItem('sliderOff','true');
  }

  goToStart() {
    // this.loadingCtrl.create().then((l)=>{
    //   l.present();
    //   this.api.usersAdd({picture:"https://lamenteesmaravillosa.com/wp-content/uploads/2018/07/hombre-capucha.jpg",name:"Chris Evans",sub:"1",nickname:"chris123"}).subscribe(data=>{
    //     localStorage.setItem('profile',JSON.stringify(data));
    //     // console.log(data);
    //     this.router.navigate(['forms/form01']);
    //     this.events.publish('login');
    //     l.dismiss();
    //   });
    // })

    // this.router.navigate(['forms/form01']);
    // localStorage.setItem('profile', JSON.stringify({picture:"",name:""}));
    this.auth.login();
    // localStorage.setItem('instavipUser', JSON.stringify(this.auth.user));
    // alert(JSON.stringify(this.auth.user));
  }

}
