import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

import { PublicationList } from '../../../services/likes/likes.service';
import { FooterService } from '../../../services/components/footer.service';

import { ApiService } from '../../../service/api.service';
import { VipPipe } from '../../../pipes/vip/vip.pipe';

@Component({
  selector: 'app-likes-manual',
  templateUrl: './likes-manual.page.html',
  styleUrls: ['./likes-manual.page.scss'],
  providers: [VipPipe]
})
export class LikesManualPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'));

  modalPicture:string;
  modalDiv:boolean = false;
  modalName:string;
  modalId:any;
  modalQuantity:number = 0.3;
  publicationList:any;
  // publicationList:Array<any> = PublicationList;

  users:any = [];

  constructor(public events: Events, public api: ApiService, private footerService: FooterService, public vip: VipPipe) {
    if (this.vip.transform(this.user)) {
      this.modalQuantity+=0.1;
    }
  }

  ngOnInit() {
    this.api.usersAll().subscribe(data=>{
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

  closeModal(){

    let likes;

    if (localStorage.getItem('likes')) {
      likes = JSON.parse(localStorage.getItem('likes'))
    }else{
      likes = [];
    }
    likes.push(this.modalId);
    localStorage.setItem('likes',JSON.stringify(likes));

    document.getElementById('likes-'+this.modalId).classList.add('dissapear');

    let id = this.modalId;

    setTimeout(()=>{
      let el = document.getElementById('likes-'+id);
      el.parentNode.removeChild(el);

    },1000)


    let l:any = localStorage.getItem('totallp');

    if (!l) {
      l = '0';
    }

    l++;

    localStorage.setItem('totallp',l.toString())

    this.events.publish('addLikes',this.modalQuantity);

    this.modalDiv = false;
  }

  onlyClose(){this.modalDiv = false;}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
