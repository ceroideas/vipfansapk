import { Component, OnInit } from '@angular/core';
import { Events, ToastController } from '@ionic/angular';

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
  modalQuantity:number;
  usersList:any;
  // usersList:Array<any> = UsersList;

  constructor(public events: Events, public api: ApiService, private footerService: FooterService, public vip: VipPipe, public toast: ToastController) {
    this.api.getGains().subscribe((data:any)=>{
      this.modalQuantity = (data.followers || 0.3);
      if (this.vip.transform(this.user)) {
        this.modalQuantity+=(data.premium || 0.1);
      }
    })
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

    let b = localStorage.getItem('buttonfp');
    if (b) {
      let c = JSON.parse(b);
      if (typeof c[3] !== 'undefined') {
        c[3]++;
        if (c[3] == c[0]) {
          this.toast.create({message:'Has completado la tarea "Seguir '+c[0]+' VipFans"', duration:3000}).then(t=>{t.present()});
          localStorage.removeItem('buttonfp');
          this.events.publish('addMagnetism',c[1]);
          if (!localStorage.getItem('buttonlp') && !localStorage.getItem('buttonfp') && !localStorage.getItem('buttoncp') && !localStorage.getItem('buttonvp')) {
            this.events.publish('changeVideo',false);
          }
        }else{
          localStorage.setItem('buttonfp',JSON.stringify(c));
        }
      }else{
        c[3]=1;
        localStorage.setItem('buttonfp',JSON.stringify(c));
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
