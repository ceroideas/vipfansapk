import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, Events } from '@ionic/angular';
import { Router } from '@angular/router';

import { TransferMagnetismModalPage } from '../transfer-magnetism-modal/transfer-magnetism-modal.page';

import { ApiService } from '../../../service/api.service';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-transfer-magnetism',
  templateUrl: './transfer-magnetism.page.html',
  styleUrls: ['./transfer-magnetism.page.scss'],
})
export class TransferMagnetismPage implements OnInit {

  percentage: number = 30;
  userId:string = '0011';
  form01: FormGroup;
  usersList:any;

  constructor(private _formBuilder: FormBuilder,
    public modalController: ModalController,
    private router: Router,
    private events: Events,
    public api: ApiService,
    private footerService: FooterService) {

  }

  ngOnInit() {

    this.api.usersAll().subscribe(data=>{
      this.usersList = data;
    })

    this.form01 = this._formBuilder.group({
      url: ['', Validators.required]
    });
    
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  onSubmit(){

    this.presentTransferMagnetismModal();

  }

  async presentTransferMagnetismModal() {
    const modal = await this.modalController.create({
      component: TransferMagnetismModalPage
    });
    modal.onDidDismiss().then(() => this.router.navigate(['magnetism/magnetism']) );
    return await modal.present();
  }

  presentModal()
  {
    this.events.publish('presentModal');
  }

}
