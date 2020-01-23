import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FooterService } from '../../../services/components/footer.service';

import { TranslateService } from '@ngx-translate/core';

declare var Stripe;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  likeIcon:string = "c-like.png";
  followersIcon:string = "w-frends.png";
  commentsIcon:string = "w-followers.png";
  videosIcon:string = "w-videos.png";

  likesDiv:boolean = true;
  followersDiv:boolean = false;
  commentsDiv:boolean = false;
  videosDiv:boolean = false;

  showButton:boolean = false;
  selected = 0;
  total = 299;

  totales = [
  {price:2.99,ammount:'50'},
  {price:5.99,ammount:'100'},
  {price:9.99,ammount:'500'},
  {price:15.99,ammount:'1000'},
  ]

  counts = {likes:0,vipfans:0,comments:0,videos:0};

  stripe = Stripe('pk_test_12xCI3gbxzDBPLAgzm1VgISJ');
  card: any;

  constructor(private footerService: FooterService, private http: HttpClient, private loading: LoadingController, private toast: ToastController, private translate: TranslateService) {
    this.counts.likes = parseInt(localStorage.getItem('likesCounts')) || 0;
    this.counts.vipfans = parseInt(localStorage.getItem('vipfansCounts')) || 0;
    this.counts.comments = parseInt(localStorage.getItem('commentsCounts')) || 0;
    this.counts.videos = parseInt(localStorage.getItem('videosCounts')) || 0;
  }

  ngOnInit() {
    this.setupStripe();
  }

  ionViewDidEnter() {

    this.footerService.getCurrentSection();

  }

  commentsIconToggle(){

    this.showButton = false;

    if( this.commentsIcon == "w-followers.png" ){

      this.commentsIcon = "c-followers.png";
      this.commentsDiv = true;
      this.showButton = true;

    }else{

      this.commentsIcon = "w-followers.png";
      this.commentsDiv = false;

    }

    this.followersIcon = "w-frends.png";
    this.likeIcon = "w-like.png";
    this.videosIcon = "w-videos.png";
    this.followersDiv = false;
    this.likesDiv = false;
    this.videosDiv = false;


  }

  followersIconToggle(){

    this.showButton = false;

    if( this.followersIcon == "w-frends.png" ){

      this.followersIcon = "c-frends.png";
      this.followersDiv = true;
      this.showButton = true;

    }else{

      this.followersIcon = "w-frends.png";
      this.followersDiv = false;

    }

    this.commentsIcon = "w-followers.png";
    this.likeIcon = "w-like.png";
    this.videosIcon = "w-videos.png";
    this.commentsDiv = false;
    this.likesDiv = false;
    this.videosDiv = false;


  }

  likeIconToggle(){

    this.showButton = false;

    if( this.likeIcon == "w-like.png" ){

      this.likeIcon = "c-like.png";
      this.likesDiv = true;
      this.showButton = true;

    }else{

      this.likeIcon = "w-like.png";
      this.likesDiv = false;

    }

    this.commentsIcon = "w-followers.png";
    this.followersIcon = "w-frends.png";
    this.videosIcon = "w-videos.png";
    this.commentsDiv = false;
    this.followersDiv = false;
    this.videosDiv = false;


  }

  videosIconToggle(){

    this.showButton = false;

    if( this.videosIcon == "w-videos.png" ){

      this.videosIcon = "c-videos.png";
      this.videosDiv = true;
      this.showButton = true;

    }else{

      this.videosIcon = "w-videos.png";
      this.videosDiv = false;

    }

    this.commentsIcon = "w-followers.png";
    this.followersIcon = "w-frends.png";
    this.likeIcon = "w-like.png";
    this.commentsDiv = false;
    this.followersDiv = false;
    this.likesDiv = false;


  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#fff',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(event)

      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
          this.makePayment(result);
        }
      });
    });
  }

  makePayment(result) {

    this.loading.create().then((l)=>{

      l.present();

      setTimeout(()=>{
        l.dismiss();

        let t = this.totales.find(x=>x.price == (this.total/100)).ammount;
        let p;

        if (this.likesDiv) {p = this.translate.instant("SHOP.lk"); this.counts.likes += parseInt(t); }
        if (this.followersDiv) {p = this.translate.instant("SHOP.vf"); this.counts.vipfans += parseInt(t); }
        if (this.commentsDiv) {p = this.translate.instant("SHOP.cm"); this.counts.comments += parseInt(t); }
        if (this.videosDiv) {p = this.translate.instant("SHOP.vd"); this.counts.videos += parseInt(t); }

        this.toast.create({message:this.translate.instant("SHOP.added")+t+" "+p+this.translate.instant("SHOP.toyou"),duration:4000}).then((t)=>{
          t.present();

          localStorage.setItem('likesCounts',(this.counts.likes).toString());
          localStorage.setItem('vipfansCounts',(this.counts.vipfans).toString());
          localStorage.setItem('commentsCounts',(this.counts.comments).toString());
          localStorage.setItem('videosCounts',(this.counts.videos).toString());
        })
      },2000)

      this.http
      .post('https://us-central1-shoppr-c97a7.cloudfunctions.net/payWithStripe', 
      {
        amount: this.total,
        currency: "eur",
        token: result.id
      })
      .subscribe(data => {
        console.log("makePayment", data);
      });

    })
  }


  /**/


  addSelection(i,type,price)
  {
    switch(type){
      case 'likes':
        this.selected = i;
        this.total = price*100;
        break;
      case 'followers':
        this.selected = i;
        this.total = price*100;
        break;
      case 'comments':
        this.selected = i;
        this.total = price*100;
        break;
      case 'videos':
        this.selected = i;
        this.total = price*100;
        break;
    }

    console.log(this.total);
  }

}
