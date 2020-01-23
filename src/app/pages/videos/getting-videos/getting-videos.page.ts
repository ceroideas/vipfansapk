import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-getting-videos',
  templateUrl: './getting-videos.page.html',
  styleUrls: ['./getting-videos.page.scss'],
})
export class GettingVideosPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'))

  avatar:string = this.user['avatar'];
  name:string = this.user['name'];
  
  form01: FormGroup;
  text2: string = '218';
  text3: any = localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')).length*0.3 : "0";

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
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

  }

}
