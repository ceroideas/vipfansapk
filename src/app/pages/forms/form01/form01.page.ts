import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AgeList, GenderList } from '../../../services/forms/form.service';
import { ProvincesService } from '../../../services/provinces/provinces.service';

import { TranslateService } from '@ngx-translate/core';

import { ApiService } from '../../../service/api.service'

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
  thematicsList:any;
  provincesList:Array<any>;

  promociones;
  email;

  checkbox = false;

  show = 'disclaimer';

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private translate: TranslateService,
              private toast: ToastController,
              private api: ApiService,
              private provincesService: ProvincesService) {
    this.api.getTheme().subscribe(data=>{
      this.thematicsList = data;
    });
  }

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      province: ['', Validators.required],
      thematic: ['', Validators.required],
      promotions: [''],
      email: ['', Validators.required],
      conditions: [false, Validators.required]
    });

    this.getProvinces();
    
  }

  getProvinces(){

    this.data = [];
  
    // this.provincesService.getProvinces()
    //   .then(data => {
    //     this.data = data;        
    //     this.provincesList = this.data;
    //   },
    //   error => {
    //     // console.error(error);
    //   });

  }

  onSubmit(){

    this.form01.value['id'] = this.user.id;

    if (!this.email) {
      return this.toast.create({duration:3000,message:this.translate.instant("FORM.form1-1")}).then((t)=>{t.present()})
    }

    this.api.saveInformation(this.form01.value).subscribe(data=>{
      console.log('saved',data);
    })

    this.router.navigate(['/forms/analyzing01']);

  }

  onSubmit1() {

    if (!this.checkbox) {
      return this.toast.create({duration:3000,message:this.translate.instant("FORM.form29")}).then((t)=>{t.present()})
    }

    this.show = 'form';

  }

  promotionsToggle(){

    if( this.form01.get('promotions').value ){
      this.form01.get('promotions').setValue(false);
    }else{
      this.form01.get('promotions').setValue(true);
    }

  }

}
