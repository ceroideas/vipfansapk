import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, ToastController, Events } from '@ionic/angular';
import { ExchangeMagnetismPage } from '../exchange-magnetism/exchange-magnetism.page';
import { SelectMagnetismPage } from '../select-magnetism/select-magnetism.page';
import { SelectMagnetismMessageModalPage } from '../select-magnetism-message-modal/select-magnetism-message-modal.page';

import { FooterService } from '../../../services/components/footer.service';

import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-magnetism',
  templateUrl: './magnetism.page.html',
  styleUrls: ['./magnetism.page.scss'],
})
export class MagnetismPage implements OnInit {

  @ViewChild('magnetismAnimation', {static: false}) magnetismAnimation: ElementRef;

  user;

  likes:any;
  followers:any;
  videos:any;
  comments:any;
  userId:string;

  lp = 0;
  fp = 0;
  cp = 0;
  vp = 0;

  lt:any = 0;
  ft:any = 0;
  ct:any = 0;
  vt:any = 0;

  targetlp:any = 0;
  targetfp:any = 0;
  targetcp:any = 0;
  targetvp:any = 0;

  buttons:any = [
  {lp:null},
  {fp:null},
  {cp:null},
  {vp:null} ]

  reslp;
  resfp;
  rescp;
  resvp;

  elements = 0 // borrar en produccion

  loaded = false;

  packages:any = [];

  constructor(public modalController: ModalController,
    public toast: ToastController,
    public events: Events,
    public api: ApiService,
    public translate: TranslateService,
    private footerService: FooterService) {

    // this.events.subscribe('addLikes',()=>{
    //   console.log('addLikes magnetismo');
    // })

    this.events.subscribe('reloadCredits',()=>{
      this.user = JSON.parse(localStorage.getItem('profile'));
      
      this.likes = parseFloat(this.user.likes).toFixed(1);
      this.followers = parseFloat(this.user.followers).toFixed(1);
      this.videos = parseFloat(this.user.videos).toFixed(1);
      this.comments = parseFloat(this.user.comments).toFixed(1);
    })

  }

  ngOnInit() {
    console.log('magnetismInit');

  }

  ionViewDidEnter() {

    this.user = JSON.parse(localStorage.getItem('profile'));
    this.userId = this.user.id;

    this.likes = parseFloat(this.user.likes).toFixed(1);
    this.followers = parseFloat(this.user.followers).toFixed(1);
    this.videos = parseFloat(this.user.videos).toFixed(1);
    this.comments = parseFloat(this.user.comments).toFixed(1);

    function makePercent(i,j)
    {
      let total = 0;

      if (i > 100) {
        i = 100;
      }

      total = (i*100)/j;

      return total;
    }
    this.elements = 0;

    this.api.getPackages().subscribe(data=>{
      this.packages = data;

      // let bk = this.packages;
      // this.packages = [];

      setTimeout(()=>{
        // if (localStorage.getItem('buttonlp'))
        //   {this.buttons['lp'] = null;
        //   this.targetlp = JSON.parse(localStorage.getItem('buttonlp'))[0];

        //   this.lp = makePercent('lp',localStorage.getItem('buttonlp') ? (JSON.parse(localStorage.getItem('buttonlp'))[2] || 0) : 0)

        //   this.lt = localStorage.getItem('buttonlp') ? (JSON.parse(localStorage.getItem('buttonlp'))[2] || 0) : 0;
        //   this.reslp = this.targetlp-(localStorage.getItem('buttonlp') ? (JSON.parse(localStorage.getItem('buttonlp'))[2] || 0) : 0);
        // }else{this.buttons['lp'] = 1; this.elements += 1; this.lp = 0/*30*/;}

        if (localStorage.getItem('buttonlp')) {
          let values = JSON.parse(localStorage.getItem('buttonlp'));
          this.targetlp = values[0];

          this.lp = makePercent((values[3] || 0),values[0]);

          this.lt = (values[3] || 0);
          this.reslp = this.targetlp-(values[3] || 0);
        }else{
          this.buttons['lp'] = 1; this.elements += 1; this.lp = 0; this.targetlp = 0; this.lt = 0;
        }

        if (localStorage.getItem('buttonfp')) {
          let values = JSON.parse(localStorage.getItem('buttonfp'));
          this.targetfp = values[0];

          this.fp = makePercent((values[3] || 0),values[0]);

          this.ft = (values[3] || 0);
          this.resfp = this.targetfp-(values[3] || 0);
        }else{
          this.buttons['fp'] = 1; this.elements += 1; this.fp = 0; this.targetfp = 0; this.ft = 0;
        }

        if (localStorage.getItem('buttoncp')) {
          let values = JSON.parse(localStorage.getItem('buttoncp'));
          this.targetcp = values[0];

          this.cp = makePercent((values[3] || 0),values[0]);

          this.ct = (values[3] || 0);
          this.rescp = this.targetcp-(values[3] || 0);
        }else{
          this.buttons['cp'] = 1; this.elements += 1; this.cp = 0; this.targetcp = 0; this.ct = 0;
        }

        if (localStorage.getItem('buttonvp')) {
          let values = JSON.parse(localStorage.getItem('buttonvp'));
          this.targetvp = values[0];

          this.vp = makePercent((values[3] || 0),values[0]);

          this.vt = (values[3] || 0);
          this.resvp = this.targetvp-(values[3] || 0);
        }else{
          this.buttons['vp'] = 1; this.elements += 1; this.vp = 0; this.targetvp = 0; this.vt = 0;
        }

        // if (localStorage.getItem('buttoncp'))
        //   {this.buttons['cp'] = null;
        //   this.targetcp = JSON.parse(localStorage.getItem('buttoncp'))[0];

        //   this.cp = makePercent('cp',localStorage.getItem('totalcp') ? (JSON.parse(localStorage.getItem('totalcp'))[2] || 0) : 0)

        //   this.ct = localStorage.getItem('totalcp') ? (JSON.parse(localStorage.getItem('totalcp'))[2] || 0) : 0;
        //   this.rescp = this.targetcp-(localStorage.getItem('buttoncp') ? (JSON.parse(localStorage.getItem('buttoncp'))[2] || 0) : 0);
        // }else{this.buttons['cp'] = 1; this.elements += 1;   this.cp = 0/*10*/;}

        // if (localStorage.getItem('buttonvp'))
        //   {this.buttons['vp'] = null;
        //   this.targetvp = JSON.parse(localStorage.getItem('buttonvp'))[0];

        //   this.vp = makePercent('vp',localStorage.getItem('buttonvp') ? (JSON.parse(localStorage.getItem('buttonvp'))[2] || 0) : 0)
          
        //   this.vt = localStorage.getItem('buttonvp') ? (JSON.parse(localStorage.getItem('buttonvp'))[2] || 0) : 0;
        //   this.resvp = this.targetvp-(localStorage.getItem('buttonvp') ? (JSON.parse(localStorage.getItem('buttonvp'))[2] || 0) : 0);
        // }else{this.buttons['vp'] = 1; this.elements += 1;   this.vp = 0/*50*/;}

        this.footerService.getCurrentSection();

        this.loaded = true;
      },10)
    })

  }

  playMagnetismAnimation(){

    this.magnetismAnimation.nativeElement.play();

    setTimeout(() => {

      this.presentSelectMagnetismModal();

     }, 2000);
    
  }

  async presentSelectMagnetismModal() {
    const modal = await this.modalController.create({
      component: SelectMagnetismPage
    });
    modal.onWillDismiss().then(() => this.presentSelectMagnetismMessageModal() );
    return await modal.present();
  }

  async presentSelectMagnetismMessageModal() {
    const modal = await this.modalController.create({
      component: SelectMagnetismMessageModalPage
    });
    return await modal.present();
  }

  // async presentExchangeMagnetismModal() {
  //   const modal = await this.modalController.create({
  //     component: ExchangeMagnetismPage,
  //     componentProps: {
  //       'followers': this.followers
  //     }
  //   });
  //   return await modal.present();
  // }

  doClick(i,qty,points,id)
  {
    let bk = this.packages;

    if (!this.buttons[i]) {
      return false;
    }
    let mess = "";

    if (i == 'lp') {mess = this.translate.instant("MAGNETISM.givelikes"); this.lt = 0; this.lp = 0;
      localStorage.setItem('buttonlp','['+qty+','+points+','+id+']'); this.targetlp = qty;
      this.reslp = qty;
    }

    if (i == 'fp') {mess = this.translate.instant("MAGNETISM.givevipfans"); this.ft = 0; this.fp = 0;
      localStorage.setItem('buttonfp','['+qty+','+points+','+id+']'); this.targetfp = qty;
      this.resfp = qty;
    }

    if (i == 'cp') {mess = this.translate.instant("MAGNETISM.givecomments"); this.ct = 0; this.cp = 0;
      localStorage.setItem('buttoncp','['+qty+','+points+','+id+']'); this.targetcp = qty;
      this.rescp = qty;
    }

    if (i == 'vp') {mess = this.translate.instant("MAGNETISM.givevideos"); this.vt = 0; this.vp = 0;
      localStorage.setItem('buttonvp','['+qty+','+points+','+id+']'); this.targetvp = qty;
      this.resvp = qty;
    }

    this.buttons[i] = null;

    this.events.publish('changeVideo',true);

    this.packages = [];
    setTimeout(()=>{

      this.packages = bk;

      setTimeout(()=>{


      // document.getElementById('button-'+id).classList.add('dissapear');
      document.getElementById('button-'+id).classList.remove('available-tasks');
      document.getElementById('button-'+id).classList.add('available-tasks-2');

      },10)

      // setTimeout(()=>{
      //   let el = document.getElementById('button-'+id);
      //   el.parentNode.removeChild(el);
      //   this.elements -= 1;
      // },1000)

      this.toast.create({message:mess,duration:3000}).then((t)=>{t.present()});

    },10)

  }

}
