import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AgeList, GenderList, ThematicsList } from '../../../services/forms/form.service';
import { ProvincesService } from '../../../services/provinces/provinces.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.page.html',
  styleUrls: ['./form01.page.scss'],
})
export class Form01Page implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'))

  avatar:string = this.user['avatar'];
  data:any;
  name:string = this.user['name'];
  text1:string = this.translate.instant("FORM.form1"); 
  form01: FormGroup;
  ageList:Array<any> = AgeList;
  genderList:Array<any> = GenderList;
  thematicsList:Array<any> = ThematicsList;
  provincesList:Array<any>;

  promociones;
  email;

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private translate: TranslateService,
              private toast: ToastController,
              private provincesService: ProvincesService) {}

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      province: ['', Validators.required],
      thematic: ['', Validators.required],
      promotions: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.getProvinces();
    
  }

  getProvinces(){

    this.data = [];
  
    this.provincesService.getProvinces()
      .then(data => {
        this.data = data;        
        this.provincesList = this.data;
      },
      error => {
        // console.error(error);
      });

  }

  onSubmit(){

    if (this.promociones && !this.email) {
      return this.toast.create({duration:3000,message:this.translate.instant("FORM.form1-1")}).then((t)=>{t.present()})
    }

    this.router.navigate(['/forms/analyzing01']);

  }

  promotionsToggle(){

    if( this.form01.get('promotions').value ){
      this.form01.get('promotions').setValue(false);
    }else{
      this.form01.get('promotions').setValue(true);
    }

  }

}
