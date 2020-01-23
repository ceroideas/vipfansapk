import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-getting-comments',
  templateUrl: './getting-comments.page.html',
  styleUrls: ['./getting-comments.page.scss'],
})
export class GettingCommentsPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'))

  avatar:string = this.user['avatar'];
  name:string = this.user['name'];
  
  form01: FormGroup;
  text2: string = '218';
  text3: any = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')).length*0.3 : "0";

  total = 0;

  sentence = "";

  constructor(private _formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private router: Router,
    private footerService: FooterService) {

    let sentences = localStorage.getItem('sentences') ? JSON.parse(localStorage.getItem('sentences')) : [];
    this.total = sentences.length;

  }

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      comment: ['', ],
      url: ['', ]
    });
    
  }

  addSentence()
  {
    if (this.sentence != "") {

      let sentences = localStorage.getItem('sentences') ? JSON.parse(localStorage.getItem('sentences')) : [];

      if (sentences.length == 10) {
        return false;
      }

      sentences.push(this.sentence);

      localStorage.setItem('sentences',JSON.stringify(sentences));

      this.sentence = "";

      this.total = sentences.length;
    }
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  onSubmit() {
    // this.alertCtrl.create({header: "Orden enviada",buttons: [
    //   {text:"Ok"}
    // ]}).then((a)=>{
    //   a.present();
    // })
  }

}
