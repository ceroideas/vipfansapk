import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-selec-automatic-mode',
  templateUrl: './selec-automatic-mode.page.html',
  styleUrls: ['./selec-automatic-mode.page.scss'],
})
export class SelecAutomaticModePage implements OnInit {

  likeIcon:string = "w-like.png";
  followersIcon:string = "w-frends.png";
  commentsIcon:string = "w-followers.png";
  videosIcon:string = "w-videos.png";

  constructor(private router: Router, private events: Events,
    private footerService: FooterService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  commentsIconToggle(){


    if( this.commentsIcon == "w-followers.png" ){

      this.commentsIcon = "c-followers.png";

    }else{

      this.commentsIcon = "w-followers.png";

    }

    this.followersIcon = "w-frends.png";
    this.likeIcon = "w-like.png";
    this.videosIcon = "w-videos.png";
    this.router.navigate(['/comments/getting-comments']);

  }

  followersIconToggle(){


    if( this.followersIcon == "w-frends.png" ){

      this.followersIcon = "c-frends.png";

    }else{

      this.followersIcon = "w-frends.png";

    }

    this.commentsIcon = "w-followers.png";
    this.likeIcon = "w-like.png";
    this.videosIcon = "w-videos.png";
    this.router.navigate(['/followers/getting-followers']);

  }

  likeIconToggle(){


    if( this.likeIcon == "w-like.png" ){

      this.likeIcon = "c-like.png";

    }else{

      this.likeIcon = "w-like.png";

    }

    this.commentsIcon = "w-followers.png";
    this.followersIcon = "w-frends.png";
    this.videosIcon = "w-videos.png";
    this.router.navigate(['/likes/getting-likes']);

  }

  videosIconToggle(){


    if( this.videosIcon == "w-videos.png" ){

      this.videosIcon = "c-videos.png";

    }else{

      this.videosIcon = "w-videos.png";

    }

    this.commentsIcon = "w-followers.png";
    this.followersIcon = "w-frends.png";
    this.likeIcon = "w-like.png";
    this.router.navigate(['/videos/getting-videos']);

  }

  presentModal()
  {
    this.events.publish('presentModal');
  }

}
