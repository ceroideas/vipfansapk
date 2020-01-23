import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Events } from '@ionic/angular';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-select-magnetism-message-modal',
  templateUrl: './select-magnetism-message-modal.page.html',
  styleUrls: ['./select-magnetism-message-modal.page.scss'],
})
export class SelectMagnetismMessageModalPage implements OnInit {

  icon = "";
  _counts:any = 0;

  constructor(public modalController: ModalController, public navParams: NavParams, public events: Events,
    private footerService: FooterService) {

    this.icon = this.navParams.get('type');
    let counts = this.navParams.get('counts');

    switch(this.icon) {
      case 'like':
        this._counts = counts[0];
        this.icon = 'likes';
        break;
      case 'frends':
        this._counts = counts[1];
        this.icon = 'persons';
        break;
      case 'followers':
        this._counts = counts[2];
        this.icon = 'comments';
        break;
      case 'videos':
        this._counts = counts[3];
        this.icon = 'videos';
        break;
    }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  closeModal(){

    // if (this._counts == 0) {
    //   this.modalController.dismiss({
    //     'dismissed': true
    //   });
    // }

    let interval = setInterval(()=>{

      if (this._counts == 0) {

        clearInterval(interval);

        setTimeout(()=>{
          this.modalController.dismiss({
            'dismissed': true
          });

          switch(this.icon) {
            case 'like':
              this.events.publish('resetLikes');
              break;
            case 'frends':
              this.events.publish('resetFollowers');
              break;
            case 'followers':
              this.events.publish('resetComments');
              break;
            case 'videos':
              this.events.publish('resetVideos');
              break;
          }
        },500)
      }else{
        this._counts = (this._counts-0.1).toFixed(1);
      }

    },(100/this._counts))

  }

}
