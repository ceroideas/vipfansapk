import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';

import { FooterService } from '../../../services/components/footer.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

	user = JSON.parse(localStorage.getItem('profile'))

  constructor(private router: Router,private footerService: FooterService, public events: Events) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  logout()
  {
    this.events.publish('clickCogout')
  }

  goToPremium()
  {
  	this.router.navigate(['magnetism/become_premium']);
  }

}
