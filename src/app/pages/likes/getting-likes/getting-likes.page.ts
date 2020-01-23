import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FooterService } from '../../../services/components/footer.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-getting-likes',
  templateUrl: './getting-likes.page.html',
  styleUrls: ['./getting-likes.page.scss'],
})
export class GettingLikesPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'))

  avatar:string = this.user['avatar'];
  name:string = this.user['name'];
  form01: FormGroup;
  text2: string = '218';
  text3: any = localStorage.getItem('likes') ? JSON.parse(localStorage.getItem('likes')).length*0.3 : "0";

  constructor(private _formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private router: Router,
    private translate: TranslateService,
    private footerService: FooterService) {}

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      url: ['', Validators.required],
      progress: ['', Validators.required]
    });
    
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  onSubmit() {
    this.alertCtrl.create({header: this.translate.instant("LIKE.sent") ,buttons: [
      {text:"Ok"}
    ]}).then((a)=>{
      a.present();
    })
  }

}
