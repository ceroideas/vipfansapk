import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { FooterService } from '../../../services/components/footer.service';

import { ClengthPipe } from '../../../pipes/clength/clength.pipe';

@Component({
  selector: 'app-comments-template',
  templateUrl: './comments-template.page.html',
  styleUrls: ['./comments-template.page.scss'],
  providers:[ClengthPipe]
})
export class CommentsTemplatePage implements OnInit {

  form01: FormGroup;

  comments = [];

  editable = [];

  checkeds:any = [];

  total = 0;

  values:any = [];

  checkTodas = false;

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private cl: ClengthPipe,
    private alertCtrl: AlertController,
    private footerService: FooterService) {

    this.comments = localStorage.getItem('sentences') ? JSON.parse(localStorage.getItem('sentences')) : [];

    for (var i = 0; i < this.comments.length; i++) {
      this.editable[i] = false;
    }
  }

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      comment: ['', ],
      url: ['', ]
    });
    
  }

  checkTotal()
  {
    setTimeout(()=>{
      this.total = this.cl.transform(this.checkeds);
    },100)
  }

  checkAll()
  {
    let val;
    if (this.checkTodas) {
      val = false;
    }else{
      val = true;
    }

    for (var i = 0; i < this.comments.length; i++) {
        this.checkeds[i] = val;
      }
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  edit(i)
  {
    if (this.editable[i]) {
      this.editable[i] = false;
      this.comments[i] = this.values[i];
      localStorage.setItem('sentences',JSON.stringify(this.comments));
    }else{
      this.editable[i] = true;
      this.values[i] = this.comments[i];
    }
  }

  delete(i)
  {
    this.comments.splice(parseInt(i),1);
    localStorage.setItem('sentences',JSON.stringify(this.comments));
  }

  onSubmit() {

    console.log();

    for (var i in this.checkeds) {
      if (this.checkeds[i]) {
        this.comments.splice(parseInt(i),1);
      }
    }

    localStorage.setItem('sentences',JSON.stringify(this.comments));

    this.checkeds = [];
    this.total = 0;


    this.alertCtrl.create({header: "Comentarios enviados",buttons: [
      {text:"Ok"}
    ]}).then((a)=>{
      a.present();
    })
  }

}
