import { Component } from '@angular/core';
import { MenuController, Events, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SelectMagnetismPage } from '../../pages/magnetism/select-magnetism/select-magnetism.page';

import { ApiService } from '../../service/api.service';

import { FooterService } from '../../services/components/footer.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  headerIcon:string = 'iman-1.png';
  // quantity:any = (218.0).toFixed(1);
  quantity:any = 0;

  likes:any = 0;
  followers:any = 0;
  videos:any = 0;
  comments:any = 0;

  processIcon:string = 'w-search.png';
  automaticIcon: string = "users-group.png";
  user;
  tutorial;
  title = "";

  constructor(private menu: MenuController,
    public events: Events,
    public api: ApiService,
    private router: Router,
    private translate: TranslateService,
    private modalController: ModalController,
    private footerService: FooterService) {

    this.user = JSON.parse(localStorage.getItem('profile'));

    this.events.subscribe('tutorial',(t)=>{
      this.tutorial = t;
    })

    this.events.subscribe('presentModal',()=>{
      this.presentSelectMagnetismModal();
    })


  }

  completeTutorial()
  {
    if (this.tutorial < 7) {
      return false;
    }
    this.tutorial = false;
    this.events.publish('completeTutorial');

    localStorage.setItem('tutorial',this.tutorial.toString());
  }

  nextTutorial(i)
  {
    if (i-1 != this.tutorial) {
      return false;
    }
    this.tutorial = i;

    localStorage.setItem('tutorial',this.tutorial.toString());
  }

  ngOnInit() {

    this.events.subscribe('resetLikes',(c)=>{
      this.likes = 0;
    })
    this.events.subscribe('resetFollowers',(c)=>{
      this.followers = 0;
    })
    this.events.subscribe('resetComments',(c)=>{
      this.comments = 0;
    })
    this.events.subscribe('resetVideos',(c)=>{
      this.videos = 0;
    })

    this.events.subscribe('addLikes',(likes)=>{
      let total = parseFloat(this.likes);
      total += parseFloat(likes);

      console.log(total);

      this.likes = total.toFixed(1);
      this.quantity = this.likes;
    });

    this.events.subscribe('addFollowers',(likes)=>{
      let total = parseFloat(this.followers);
      total += parseFloat(likes);

      console.log(total);

      this.followers = total.toFixed(1);
      this.quantity = this.followers;
    })

    this.events.subscribe('addVideos',(likes)=>{
      let total = parseFloat(this.videos);
      total += parseFloat(likes);

      console.log(total);

      this.videos = total.toFixed(1);
      this.quantity = this.videos;
    })

    this.events.subscribe('addComments',(likes)=>{
      let total = parseFloat(this.comments);
      total += parseFloat(likes);

      console.log(total);

      this.comments = total.toFixed(1);
      this.quantity = this.comments;
    })

    this.footerService.currentSection.subscribe(section => {

      console.log(section);

      if (section == 'likes') {

        this.title = this.translate.instant("LIKE.like");

        this.headerIcon = 'c-like.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = this.likes;

      } else if (section == 'followers') {

        this.title = this.translate.instant("VIPFANS.vipfans");

        this.headerIcon = 'c-frends.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = this.followers;

      } else if (section == 'comments') {

        this.title = this.translate.instant("COMMENTS.comments");

        this.headerIcon = 'c-followers.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = this.comments;

      } else if (section == 'videos') {

        this.title = this.translate.instant("VIDEOS.videos");

        this.headerIcon = 'c-videos.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = this.videos;

      } else if (section == 'selec-automatic-mode') {

        this.title = "";

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "c-users-group.png";

        this.quantity = 0;
      } else if (section == 'process') {

        this.title = this.translate.instant("CAMPAIGNS.campaigns");

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'c-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
      } else if (section == 'shop') {

        this.title = this.translate.instant("MENU.shop");

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
      } else if (section == 'transfer_magnetism') {

        this.title = this.translate.instant("MENU.transfer");

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
      } else if (section == 'magnetism') {

        this.title = this.translate.instant("MAGNETISM.magnetism");

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
      } else if (section == 'become_premium') {

        this.title = "Hazte Vip";

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
      } else if (section == 'gestion') {

        this.title = this.translate.instant("MENU.gestion");

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
      } else if (section == 'share') {

        this.title = this.translate.instant("MENU.invite");

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
      } else {

        this.title = "";

        this.headerIcon = 'iman-1.png';
        this.processIcon = 'w-search.png';
        this.automaticIcon = "users-group.png";

        this.quantity = 0;
        
      }

    });

  }

  openExange()
  {
    if (this.headerIcon == "iman-1.png") {
      this.presentSelectMagnetismModal();
    }
  }

  async presentSelectMagnetismModal() {
    const modal = await this.modalController.create({
      component: SelectMagnetismPage,
      componentProps: {counts:[
        this.likes,
        this.followers,
        this.comments,
        this.videos
      ]}
    });

    // modal.onWillDismiss().then(() => this.presentSelectMagnetismMessageModal() );
    return await modal.present();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  goProcess() {

    let activeRoute: string = this.router.url;
    let mainRoute: string = activeRoute.split('/')[1];
    let goToRoute: string = '';

    if (mainRoute == 'likes') {

      goToRoute = '/likes/getting-likes';

    } else if (mainRoute == 'followers') {

      goToRoute = '/followers/getting-followers';

    } else if (mainRoute == 'comments') {

      goToRoute = '/comments/getting-comments';

    } else if (mainRoute == 'videos') {

      goToRoute = '/videos/getting-videos';

    } else {

      goToRoute = '/selec-automatic-mode/selec-automatic-mode';

    }

    this.router.navigate([goToRoute]);

  }

}
