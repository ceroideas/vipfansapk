import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

import { PublicationList } from '../../../services/likes/likes.service';
import { FooterService } from '../../../services/components/footer.service';

import { ApiService } from '../../../service/api.service';
import { VipPipe } from '../../../pipes/vip/vip.pipe';

@Component({
  selector: 'app-comments-manual',
  templateUrl: './comments-manual.page.html',
  styleUrls: ['./comments-manual.page.scss'],
  providers: [VipPipe]
})
export class CommentsManualPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'));

  modalPicture:string;
  modalDiv:boolean = false;
  modalName:string;
  modalId:any;
  modalQuantity:number = 0.3;
  // publicationList:Array<any> = PublicationList;
  publicationList:any;

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
  onlyClose(){this.modalDiv = false;}

  closeModal(){

    let comments;

    if (localStorage.getItem('comments')) {
      comments = JSON.parse(localStorage.getItem('comments'))
    }else{
      comments = [];
    }
    comments.push(this.modalId);
    localStorage.setItem('comments',JSON.stringify(comments));

    document.getElementById('comments-'+this.modalId).classList.add('dissapear');

    let id = this.modalId;

    setTimeout(()=>{
      let el = document.getElementById('comments-'+id);
      el.parentNode.removeChild(el);

    },1000)


    let l:any = localStorage.getItem('totalcp');

    if (!l) {
      l = '0';
    }

    l++;

    localStorage.setItem('totalcp',l.toString())

    this.events.publish('addComments',this.modalQuantity);

    this.modalDiv = false;

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
