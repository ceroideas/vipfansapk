import { Component, OnInit } from '@angular/core';
import { Events, ToastController } from '@ionic/angular';

import { PublicationList } from '../../../services/likes/likes.service';
import { FooterService } from '../../../services/components/footer.service';

import { ApiService } from '../../../service/api.service';
import { VipPipe } from '../../../pipes/vip/vip.pipe';

@Component({
  selector: 'app-videos-manual',
  templateUrl: './videos-manual.page.html',
  styleUrls: ['./videos-manual.page.scss'],
  providers: [VipPipe]
})
export class VideosManualPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'));

  modalPicture:string;
  modalDiv:boolean = false;
  modalName:string;
  modalId:any;
  modalQuantity:number;
  // publicationList:Array<any> = PublicationList;
  publicationList:any;

  constructor(public events: Events, public api: ApiService, private footerService: FooterService, public vip: VipPipe, public toast: ToastController) {
    this.api.getGains().subscribe((data:any)=>{
      this.modalQuantity = (data.videos || 0.3);
      if (this.vip.transform(this.user)) {
        this.modalQuantity+=(data.premium || 0.1);
      }
    })
  }

  ngOnInit() {
    this.api.videosAll().subscribe(data=>{
      this.publicationList = data;
    })
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  showModal( index:number ){

    this.modalPicture = this.publicationList[index].avatar;
    this.modalName = this.publicationList[index].name;
    this.modalId = this.publicationList[index].id;
    this.modalDiv = true;

  }

  onlyClose(){this.modalDiv = false;}

  closeModal(){

    let videos;

    if (localStorage.getItem('videos')) {
      videos = JSON.parse(localStorage.getItem('videos'))
    }else{
      videos = [];
    }
    videos.push(this.modalId);
    localStorage.setItem('videos',JSON.stringify(videos));

    document.getElementById('videos-'+this.modalId).classList.add('dissapear');

    let id = this.modalId;

    setTimeout(()=>{
      let el = document.getElementById('videos-'+id);
      el.parentNode.removeChild(el);

    },1000)


    let l:any = localStorage.getItem('totalvp');

    if (!l) {
      l = '0';
    }

    l++;

    localStorage.setItem('totalvp',l.toString())

    this.events.publish('addVideos',this.modalQuantity);

    this.modalDiv = false;

    let b = localStorage.getItem('buttonvp');
    if (b) {
      let c = JSON.parse(b);
      if (typeof c[3] !== 'undefined') {
        c[3]++;
        if (c[3] == c[0]) {
          this.toast.create({message:'Has completado la tarea "Reproducir '+c[0]+' vídeos"', duration:3000}).then(t=>{t.present()});
          localStorage.removeItem('buttonvp');
          this.events.publish('addMagnetism',c[1]);
          if (!localStorage.getItem('buttonlp') && !localStorage.getItem('buttonfp') && !localStorage.getItem('buttoncp') && !localStorage.getItem('buttonvp')) {
            this.events.publish('changeVideo',false);
          }
        }else{
          localStorage.setItem('buttonvp',JSON.stringify(c));
        }
      }else{
        c[3]=1;
        localStorage.setItem('buttonvp',JSON.stringify(c));
      }
    }

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
