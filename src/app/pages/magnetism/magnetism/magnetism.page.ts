import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ExchangeMagnetismPage } from '../exchange-magnetism/exchange-magnetism.page';
import { SelectMagnetismPage } from '../select-magnetism/select-magnetism.page';
import { SelectMagnetismMessageModalPage } from '../select-magnetism-message-modal/select-magnetism-message-modal.page';

import { FooterService } from '../../../services/components/footer.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-magnetism',
  templateUrl: './magnetism.page.html',
  styleUrls: ['./magnetism.page.scss'],
})
export class MagnetismPage implements OnInit {

  @ViewChild('magnetismAnimation', {static: false}) magnetismAnimation: ElementRef;

  user = JSON.parse(localStorage.getItem('profile'));

  followers:number = 55;
  userId:string = this.user.id;

  lp = 30;
  fp = 40;
  cp = 10;
  vp = 50;

  lt:any = 20;
  ft:any = 20;
  ct:any = 5;
  vt:any = 45;

  targetlp:any = 100;
  targetfp:any = 60;
  targetcp:any = 50;
  targetvp:any = 90;

  buttons = [
  {lp:null},
  {fp:null},
  {cp:null},
  {vp:null} ]

  elements = 0 // borrar en produccion

  constructor(public modalController: ModalController,
    public toast: ToastController,
    public translate: TranslateService,
    private footerService: FooterService) { }

  ngOnInit() {
    function makePercent(t,i)
    {
      let total = 0;

      if (i > 100) {
        i = 100;
      }

      if (t == 'lp') { total = (i*100)/40; }
      if (t == 'fp') { total = (i*100)/10; }
      if (t == 'cp') { total = (i*100)/20; }
      if (t == 'vp') { total = (i*100)/50; }


      return total;
    }

/**/
    if (localStorage.getItem('buttonlp'))
      {this.buttons['lp'] = null;
      this.targetlp = localStorage.getItem('buttonlp');
      this.lp = makePercent('lp',localStorage.getItem('totallp'))
      this.lt = localStorage.getItem('totallp');
  }else{this.buttons['lp'] = 1; this.elements += 1;}
/**/
    if (localStorage.getItem('buttonfp'))
      {this.buttons['fp'] = null;
      this.targetfp = localStorage.getItem('buttonfp');
      this.fp = makePercent('fp',localStorage.getItem('totalfp'))
      this.ft = localStorage.getItem('totalfp');
  }else{this.buttons['fp'] = 1; this.elements += 1;}
/**/
    if (localStorage.getItem('buttoncp'))
      {this.buttons['cp'] = null;
      this.targetcp = localStorage.getItem('buttoncp');
      this.cp = makePercent('cp',localStorage.getItem('totalcp'))
      this.ct = localStorage.getItem('totalcp');
  }else{this.buttons['cp'] = 1; this.elements += 1;}
/**/
    if (localStorage.getItem('buttonvp'))
      {this.buttons['vp'] = null;
      this.targetvp = localStorage.getItem('buttonvp');
      this.vp = makePercent('vp',localStorage.getItem('totalvp'))
      this.vt = localStorage.getItem('totalvp');
  }else{this.buttons['vp'] = 1; this.elements += 1;}

  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

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

  async presentExchangeMagnetismModal() {
    const modal = await this.modalController.create({
      component: ExchangeMagnetismPage,
      componentProps: {
        'followers': this.followers
      }
    });
    return await modal.present();
  }

  doClick(i)
  {
    let mess = "";
    let id;

    if (i == 'lp') {mess = this.translate.instant("MAGNETISM.givelikes"); id = 0; this.lt = 0; this.lp = 0; localStorage.setItem('buttonlp','40'); this.targetlp = '40';}
    if (i == 'fp') {mess = this.translate.instant("MAGNETISM.givevipfans"); id = 1; this.ft = 0; this.fp = 0; localStorage.setItem('buttonfp','10'); this.targetfp = '10';}
    if (i == 'cp') {mess = this.translate.instant("MAGNETISM.givecomments"); id = 3; this.ct = 0; this.cp = 0; localStorage.setItem('buttoncp','50'); this.targetcp = '50';}
    if (i == 'vp') {mess = this.translate.instant("MAGNETISM.givevideos"); id = 2; this.vt = 0; this.vp = 0; localStorage.setItem('buttonvp','20'); this.targetvp = '20';}

    document.getElementById('button-'+id).classList.add('dissapear');

    setTimeout(()=>{
      let el = document.getElementById('button-'+id);
      el.parentNode.removeChild(el);


      this.elements -= 1;

    },1000)

    this.toast.create({message:mess,duration:3000}).then((t)=>{t.present()});

  }

}
