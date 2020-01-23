import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  currentSection = new BehaviorSubject('main');

  constructor(private router: Router) { }


  getCurrentSection() {

    let activeRoute: string = this.router.url;
    let mainRoute: string = activeRoute.split('/')[1];
    let secondRoute: string = activeRoute.split('/')[2];

    console.log(secondRoute)

    if (mainRoute == 'likes') {

      this.currentSection.next('likes');
      return this.currentSection.value;

    } else if (mainRoute == 'followers') {

      this.currentSection.next('followers');
      return this.currentSection.value;

    } else if (mainRoute == 'comments') {

      this.currentSection.next('comments');
      return this.currentSection.value;

    } else if (mainRoute == 'videos') {

      this.currentSection.next('videos');
      return this.currentSection.value;

    } else if (mainRoute == 'process') {

      this.currentSection.next('process');
      return this.currentSection.value;

    } else if (mainRoute == 'selec-automatic-mode') {

      this.currentSection.next('selec-automatic-mode');
      return this.currentSection.value;

    } else if (mainRoute == 'shop') {

      this.currentSection.next('shop');
      return this.currentSection.value;

    } else if (mainRoute == 'transfer_magnetism') {

      this.currentSection.next('transfer_magnetism');
      return this.currentSection.value;

    } else if (mainRoute == 'magnetism') {

      if (secondRoute == 'become_premium') {
        this.currentSection.next('become_premium');
      }else{
        this.currentSection.next('magnetism');
      }
      return this.currentSection.value;

    } else if (mainRoute == 'become_premium') {

      this.currentSection.next('become_premium');
      return this.currentSection.value;

    } else if (mainRoute == 'gestion') {

      this.currentSection.next('gestion');
      return this.currentSection.value;

    } else if (mainRoute == 'share') {

      this.currentSection.next('share');
      return this.currentSection.value;

    } else {

      this.currentSection.next('other');
      return this.currentSection.value;

    }

  }

}
