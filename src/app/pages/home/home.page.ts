import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FooterService } from '../../services/components/footer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  avatar:string = 'assets/imgs/samples/avatar-sample1.jpg';
  form01: FormGroup;
  name:string = 'Araceli González';
  text1:string = 'Puedes conseguir seguidores en modo manual o comprar paquetes';
  text2:string = '218';
  text3:string = '3K1';
  text4:string = '1k2';

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private footerService: FooterService) {}

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      url: ['', Validators.required]
    });
    
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  onSubmit(){
    
  }

}
