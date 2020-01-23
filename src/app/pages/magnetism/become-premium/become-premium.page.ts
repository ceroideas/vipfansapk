import { Component, OnInit } from '@angular/core';

import { FooterService } from '../../../services/components/footer.service';

import { Stripe } from '@ionic-native/stripe/ngx';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-become-premium',
  templateUrl: './become-premium.page.html',
  styleUrls: ['./become-premium.page.scss'],
  providers: [Stripe]
})
export class BecomePremiumPage implements OnInit {

  constructor(private footerService: FooterService, private stripe: Stripe, private translate: TranslateService) { }

  ngOnInit() {
  	this.stripe.setPublishableKey('pk_test_12xCI3gbxzDBPLAgzm1VgISJ');
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  openStripe()
  {

    let el = document.getElementById('openStripe');

    el.classList.remove('jelly');
    setTimeout(()=>{
      el.classList.add('jelly');
    },100)

  	let card = {
  	 number: '4242424242424242',
  	 expMonth: 12,
  	 expYear: 2020,
  	 cvc: '220'
  	}

  	this.stripe.createCardToken(card)
	   .then(token => {console.log(token.id); alert(this.translate.instant("MAGNETISM.payment"))})
	   .catch(error => console.error(error));
  }

}
