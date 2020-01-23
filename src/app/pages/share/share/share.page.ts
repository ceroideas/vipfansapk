import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { FooterService } from '../../../services/components/footer.service';

import { TranslateService } from '@ngx-translate/core';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
  providers: [SocialSharing]
})
export class SharePage implements OnInit {

	user = JSON.parse(localStorage.getItem('profile'));
  code;

  constructor(private router: Router,private footerService: FooterService, public alertCtrl: AlertController, public translate: TranslateService,private socialSharing: SocialSharing) {
    function generatePassword() {
      var length = 8,
          charset = "0123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }

    this.code = generatePassword();

  }

  openAlert()
  {
    this.alertCtrl.create({message:this.translate.instant("SHARE.share1")+": "+this.code,buttons:
    [{
      text: this.translate.instant("SLIDES.accept"),
    },{
      text: this.translate.instant("SHARE.share"),
      handler:()=>{
        this.socialSharing.share(this.translate.instant("SHARE.message")+":"+this.code, "", "", "").then((t)=>{
          console.log('shared',t)
        }).catch((e)=>{
          console.log('error sharing',e)
        })
      }
    }]}).then((a)=>{
      a.present();
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

}
