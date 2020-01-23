import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

// import { UsersList } from '../../../services/likes/likes.service';
import { FooterService } from '../../../services/components/footer.service';

import { ApiService } from '../../../service/api.service';
import { VipPipe } from '../../../pipes/vip/vip.pipe';

@Component({
  selector: 'app-followers-manual',
  templateUrl: './followers-manual.page.html',
  styleUrls: ['./followers-manual.page.scss'],
  providers: [VipPipe]
})
export class FollowersManualPage implements OnInit {

  user = JSON.parse(localStorage.getItem('profile'));

  modalAvatar:string;
  modalDiv:boolean = false;
  modalName:string;
  modalId:any;
  modalQuantity:number = 0.3;
  usersList:any;
  // usersList:Array<any> = UsersList;

  constructor(public events: Events, public api: ApiService, private footerService: FooterService, public vip: VipPipe) {
    if (this.vip.transform(this.user)) {
      this.modalQuantity+=0.1;
    }
  }

  ngOnInit() {
    this.api.usersAll().subscribe(data=>{
      this.usersList = data;
    })
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  showModal( index:number ){

    this.modalAvatar = this.usersList[index].avatar;
    // this.modalName = this.usersList[index].name + ' ' + this.usersList[index].lastName;
    this.modalName = this.usersList[index].name;
    this.modalId = this.usersList[index].id;
    this.modalDiv = true;

  }

  onlyClose(){this.modalDiv = false;}

  closeModal(){

    let vipfans;

    if (localStorage.getItem('vipfans')) {
      vipfans = JSON.parse(localStorage.getItem('vipfans'))
    }else{
      vipfans = [];
    }
    vipfans.push(this.modalId);
    localStorage.setItem('vipfans',JSON.stringify(vipfans));

    document.getElementById('vipfans-'+this.modalId).classList.add('dissapear');

    let id = this.modalId;

    setTimeout(()=>{
      let el = document.getElementById('vipfans-'+id);
      el.parentNode.removeChild(el);

    },1000)


    let l:any = localStorage.getItem('totalfp');

    if (!l) {
      l = '0';
    }

    l++;

    localStorage.setItem('totalfp',l.toString())

    this.events.publish('addFollowers',this.modalQuantity);

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
