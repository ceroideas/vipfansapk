import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';

import { FooterService } from '../../../services/components/footer.service';
import { SelectMagnetismMessageModalPage } from '../../../pages/magnetism/select-magnetism-message-modal/select-magnetism-message-modal.page';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-magnetism',
  templateUrl: './select-magnetism.page.html',
  styleUrls: ['./select-magnetism.page.scss'],
})
export class SelectMagnetismPage implements OnInit {

  likeIcon:string = "w-like.png";
  followersIcon:string = "w-frends.png";
  commentsIcon:string = "w-followers.png";
  videosIcon:string = "w-videos.png";

  selected;

  constructor(public modalController: ModalController,
    public toast: ToastController,
    public navParams: NavParams,
    public translate: TranslateService,
    private footerService: FooterService) { }

  ngOnInit() {}

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  closeModal(){

    if (!this.selected) {
      this.toast.create({message:this.translate.instant("MAGNETISM.mustselect"),duration:4000}).then((t)=>{
        t.present();
      });
    }else{
      this.presentSelectMagnetismMessageModal();
    }

    this.modalController.dismiss({
      'dismissed': true
    });

  }

  async presentSelectMagnetismMessageModal() {
    const modal = await this.modalController.create({
      component: SelectMagnetismMessageModalPage,
      componentProps: {
        type:this.selected,
        counts: this.navParams.get('counts')
      }
    });
    return await modal.present();
  }

  commentsIconToggle(){

    if( this.commentsIcon == "w-followers.png" ){

      this.commentsIcon = "c-followers.png";

      this.selected = 'followers';
    }else{

      this.commentsIcon = "w-followers.png";

      this.selected = null;
    }

    this.followersIcon = "w-frends.png";
    this.likeIcon = "w-like.png";
    this.videosIcon = "w-videos.png"


  }

  followersIconToggle(){

    if( this.followersIcon == "w-frends.png" ){

      this.followersIcon = "c-frends.png";

      this.selected = 'frends';
    }else{

      this.followersIcon = "w-frends.png";

      this.selected = null;
    }

    this.commentsIcon = "w-followers.png";
    this.likeIcon = "w-like.png";
    this.videosIcon = "w-videos.png"


  }

  likeIconToggle(){

    if( this.likeIcon == "w-like.png" ){

      this.likeIcon = "c-like.png";

      this.selected = 'like';
    }else{

      this.likeIcon = "w-like.png";

      this.selected = null;
    }

    this.commentsIcon = "w-followers.png";
    this.followersIcon = "w-frends.png";
    this.videosIcon = "w-videos.png";


  }

  videosIconToggle(){

    if( this.videosIcon == "w-videos.png" ){

      this.videosIcon = "c-videos.png";

      this.selected = 'videos';
    }else{

      this.videosIcon = "w-videos.png";

      this.selected = null;
    }

    this.commentsIcon = "w-followers.png";
    this.followersIcon = "w-frends.png";
    this.likeIcon = "w-like.png";


  }

}
