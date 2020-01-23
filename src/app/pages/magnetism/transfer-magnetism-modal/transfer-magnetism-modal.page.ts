import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-transfer-magnetism-modal',
  templateUrl: './transfer-magnetism-modal.page.html',
  styleUrls: ['./transfer-magnetism-modal.page.scss'],
})
export class TransferMagnetismModalPage implements OnInit {

  constructor(public modalController: ModalController,
    private footerService: FooterService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  closeModal(){

    this.modalController.dismiss({
      'dismissed': true
    });

  }

}
