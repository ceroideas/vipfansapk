import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-send-comments',
  templateUrl: './send-comments.page.html',
  styleUrls: ['./send-comments.page.scss'],
})
export class SendCommentsPage implements OnInit {

  form01: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private footerService: FooterService) {}

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      comment: ['', ],
      url: ['', ]
    });
    
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  onSubmit() {

  }

}
