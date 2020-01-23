import { Component, ViewChild, ElementRef } from '@angular/core';
import { MenuController, Events } from '@ionic/angular';
import { Router } from '@angular/router';

import { FooterService } from '../../services/components/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  @ViewChild('magnetismAnimation', {static: false}) magnetismAnimation: ElementRef;

  likeIcon: string = "b-like.png";
  followersIcon: string = "b-frends.png";
  commentsIcon: string = "followers.png";
  videosIcon: string = "b-videos.png";
  tutorial;

  constructor(private router: Router,
    public events: Events,
    private footerService: FooterService) {

    let tutorial:any = localStorage.getItem('tutorial');

    if (tutorial) {
      if (tutorial != 'complete') {
        if (tutorial == 1) {this.tutorial = 1;}
        if (tutorial == 2) {this.tutorial = 2;}
        if (tutorial == 3) {this.tutorial = 3;}
        if (tutorial == 4) {this.tutorial = 4;}
        if (tutorial == 5) {this.tutorial = 5;}
        if (tutorial == 6) {this.tutorial = 6;}
        if (tutorial == 7) {this.tutorial = 7;}
      }
    }else{
      this.tutorial = 1;
    }

    this.events.publish('tutorial',this.tutorial);

    this.events.subscribe('completeTutorial',(t)=>{
      this.tutorial = false;
    })

    console.log(this.tutorial);

  }

  nextTutorial(i)
  {
    if (i-1 != this.tutorial) {
      return false;
    }
    this.tutorial = i;

    this.events.publish('tutorial',this.tutorial);
    localStorage.setItem('tutorial',this.tutorial.toString());
  }

  ngOnInit() {

    this.getCurrentSection();
  }

  getCurrentSection(){

    this.footerService.currentSection.subscribe(section => { 

      if (section == 'likes') {

        this.likeIconToggle();

      } else if (section == 'followers') {

        this.followersIconToggle();

      } else if (section == 'comments') {

        this.commentsIconToggle();

      } else if (section == 'videos') {

        this.videosIconToggle();

      } else if (section == 'selec-automatic-mode') {

        this.automaticIconToggle();

      } else if (section == 'other' || section == 'process') {

        this.magnetismIconToggle();

      }

    });

  }


  commentsIconToggle() {

    this.likeIcon = "b-like.png";
    this.followersIcon = "b-frends.png";
    this.commentsIcon = "c-followers.png";
    this.videosIcon = "b-videos.png";

  }

  followersIconToggle() {

    this.likeIcon = "b-like.png";
    this.followersIcon = "c-frends.png";
    this.commentsIcon = "followers.png";
    this.videosIcon = "b-videos.png";

  }

  likeIconToggle() {

    this.likeIcon = "c-like.png";
    this.followersIcon = "b-frends.png";
    this.commentsIcon = "followers.png";
    this.videosIcon = "b-videos.png";

  }

  videosIconToggle() {

    this.likeIcon = "b-like.png";
    this.followersIcon = "b-frends.png";
    this.commentsIcon = "followers.png";
    this.videosIcon = "c-videos.png";

  }

  automaticIconToggle() {

    this.likeIcon = "b-like.png";
    this.followersIcon = "b-frends.png";
    this.commentsIcon = "followers.png";
    this.videosIcon = "b-videos.png";

  }

  magnetismIconToggle() {

    this.likeIcon = "b-like.png";
    this.followersIcon = "b-frends.png";
    this.commentsIcon = "followers.png";
    this.videosIcon = "b-videos.png";

  }

  playMagnetismAnimation(){

    this.magnetismAnimation.nativeElement.play();

    setTimeout(() => {

      this.magnetismIconToggle();
      this.router.navigate(['/magnetism/magnetism']);

     }, 2000);
    
  }



}
