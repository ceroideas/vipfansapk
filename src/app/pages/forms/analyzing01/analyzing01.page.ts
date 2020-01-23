import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-analyzing01',
  templateUrl: './analyzing01.page.html',
  styleUrls: ['./analyzing01.page.scss'],
})
export class Analyzing01Page implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'))

  avatar:string = this.user['avatar'];
  name:string = this.user['name'];
  form01: FormGroup;
  message: string = this.translate.instant("FORM.form14");
  processStep: number = 0;
  percentage: number = 0;
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;
  step6: boolean = false;

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private translate: TranslateService
    ) { }

  ngOnInit() {

    this.form01 = this._formBuilder.group({
      photo: ['', Validators.required],
      folowers: ['', Validators.required],
      posts: ['', Validators.required],
      publication: ['', Validators.required],
      more_folowers: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.analizingProcess();

  }

  analizingProcess() {

    setTimeout(() => {

      this.processAnimation();

    }, 1000);

  }

  processAnimation() {

    this.processStep++;

    if (this.processStep == 1) {

      this.message = this.translate.instant("FORM.form15");
      this.percentage += 20;
      this.step1 = true;
      this.analizingProcess();

    } else if (this.processStep == 2) {

      this.message = this.translate.instant("FORM.form16");
      this.percentage += 20;
      this.step2 = true;
      this.analizingProcess();

    } else if (this.processStep == 3) {

      this.message = this.translate.instant("FORM.form17");
      this.percentage += 20;
      this.step3 = true;
      this.analizingProcess();

    } else if (this.processStep == 4) {

      this.message = this.translate.instant("FORM.form18");
      this.percentage += 20;
      this.step4 = true;
      this.analizingProcess();

    } else if (this.processStep == 5) {

      this.message = this.translate.instant("FORM.form19");
      this.percentage += 20;
      this.step5 = true;
      this.analizingProcess();

    } else if (this.processStep == 6) {

      this.message = this.translate.instant("FORM.form20");
      this.step6 = true;
      this.analizingProcess();

    } else if (this.processStep == 7) {

      this.router.navigate(['/forms/analyzing02']);

    }


  }

}
