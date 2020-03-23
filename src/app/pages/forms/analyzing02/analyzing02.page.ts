import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticationService } from '../../../services/autentication/autentication.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-analyzing02',
  templateUrl: './analyzing02.page.html',
  styleUrls: ['./analyzing02.page.scss'],
})
export class Analyzing02Page implements OnInit {

  form01: FormGroup;
  user = JSON.parse(localStorage.getItem('profile'))
  avatar:string = this.user['avatar'];
  name:string = this.user['name'];
  text1: string = 'CUMPLES CON LOS REQUISITOS';
  text2: string = 'PUEDES EMPEZAR A USAR LA APP';
  userId: string = '0011';

  checkbox = true;

  constructor(private _formBuilder: FormBuilder,
    private toast: ToastController,
    private translate: TranslateService,
    private authService: AutenticationService, ) { }

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      conditions: [false, Validators.required]
    });

  }

  onSubmit() {

    if (!this.checkbox) {
      return this.toast.create({duration:3000,message:this.translate.instant("FORM.form29")}).then((t)=>{t.present()})
    }

    localStorage.setItem('profile-completed','1');

    this.authService.login();

  }

  conditionsToggle(){

    if( this.form01.get('conditions').value ){
      this.form01.get('conditions').setValue(false);
    }else{
      this.form01.get('conditions').setValue(true);
    }

  }

}
