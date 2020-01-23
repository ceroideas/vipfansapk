import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { FooterService } from '../../../services/components/footer.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'))
  avatar:string = this.user['avatar'];
  name:string = this.user['name'];
  text2:string = '218';
  text3:string = '3K1';
  text4:string = '1k2';

  type;
  status = 'assets/new/pause.svg';
  seconds = 59;

  interval;

  modalDiv:boolean = false;

  lp = 30;
  fp = 80;
  cp = 40;
  vp = 50;

  paused = false;

  toDelete;

  constructor(private footerService: FooterService, public translate: TranslateService, public alertCtrl: AlertController) { }

  ngOnInit() {}

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  showModal(type,n){

    this.toDelete = n;

    this.paused = false;

    let seconds = document.getElementById('seconds') as HTMLSpanElement;

    clearInterval(this.interval);

    let s = 60;

    this.interval = setInterval(()=>{
      s-=1;
      this.seconds = s;

      if (this.seconds == 0) {
        clearInterval(this.interval);
      }
    },1000)

    this.type = this.translate.instant("CAMPAIGNS."+type);

    this.status = 'assets/new/pause.svg';

    this.modalDiv = true;

  }

  pauseActive()
  {
    if (this.status == 'assets/new/pause.svg') {

      this.paused = true;

      this.status = 'assets/new/play.svg';
      
      clearInterval(this.interval);
    }else{

      this.paused = false;

      this.status = 'assets/new/pause.svg';

      let s = this.seconds;

      this.interval = setInterval(()=>{
        s-=1;
        this.seconds = s;

        if (this.seconds == 0) {
          clearInterval(this.interval);
        }
      },1000)
    }
  }

  cancelCampaign()
  {
    this.alertCtrl.create({message:"¿Estas seguro de querer cancelar la campaña?",buttons:[{
      text:"Si",
      handler: ()=>{
        this.modalDiv = false;
        document.getElementById('cuadro-'+this.toDelete).classList.add('dissapear');

        let id = this.toDelete;

        setTimeout(()=>{
          let el = document.getElementById('cuadro-'+id);
          el.parentNode.removeChild(el);

        },1000)
      }
    },{
      text:"No"
    }]}).then((a)=>{
      a.present();
    })
  }

  seeUrl()
  {
    this.alertCtrl.create({message:"URL: <a target='_blank' href="+this.translate.instant("CAMPAIGNS.url_"+this.type)+">"+this.translate.instant("CAMPAIGNS.url_"+this.type)+"</a>"}).then((a)=>{
      a.present();
    })
  }

  seeUrl2(type)
  {
    this.alertCtrl.create({message:"URL: <a target='_blank' href="+this.translate.instant("CAMPAIGNS.url_"+type)+">"+this.translate.instant("CAMPAIGNS.url_"+type)+"</a>"}).then((a)=>{
      a.present();
    })
  }

  closeModal(){

    this.modalDiv = false;

  }

}
