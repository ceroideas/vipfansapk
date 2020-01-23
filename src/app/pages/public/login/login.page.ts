import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';

// import { AuthService } from '../../../services/instagram-auth/auth.service';
import { AuthService } from '../../../services/auth/auth.service';
import { ApiService } from '../../../service/api.service';

import { TranslateService } from '@ngx-translate/core';

import { AutenticationService } from '../../../services/autentication/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AuthService]
})
export class LoginPage implements OnInit {

  @ViewChild('loginAnimation', {static: false}) loginAnimation: ElementRef;

  @ViewChild('dSlides', {static: false}) slides: IonSlides;

  showVideo: boolean = true;
  showSlider: boolean = false;

  constructor(public auth: AuthService,
    public events: Events,
    public authService: AutenticationService,
    public alertCtrl: AlertController,
    public translate: TranslateService,
    public api: ApiService,
    private router: Router, ) {

    this.events.subscribe('goToStart',()=>{
      this.router.navigate(['forms/form01']);
    })

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
    // this.api.usersAdd({picture:"https://lamenteesmaravillosa.com/wp-content/uploads/2018/07/hombre-capucha.jpg",name:"Chris Evans",sub:"1",nickname:"chris123"}).subscribe(data=>{
    //   localStorage.setItem('profile',JSON.stringify(data));
    //   // console.log(data);
    //   this.router.navigate(['forms/form01']);
    //   this.events.publish('login');
    // });

    // this.router.navigate(['forms/form01']);
    // localStorage.setItem('profile', JSON.stringify({picture:"",name:""}));
    this.auth.login();
    // localStorage.setItem('instavipUser', JSON.stringify(this.auth.user));
    // alert(JSON.stringify(this.auth.user));
  }

}
