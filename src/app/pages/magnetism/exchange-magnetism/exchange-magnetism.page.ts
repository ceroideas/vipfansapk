import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-exchange-magnetism',
  templateUrl: './exchange-magnetism.page.html',
  styleUrls: ['./exchange-magnetism.page.scss'],
})
export class ExchangeMagnetismPage implements OnInit {

  @Input() followers: string;

  constructor(public modalController: ModalController,
    private footerService: FooterService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  closeModal() {

    this.modalController.dismiss({
      'dismissed': true
    });

  }

}
