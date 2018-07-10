import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public navCtrl: NavController) {

  }

  redirectGoogle() {
    this.platform.ready().then(() => {
       new InAppBrowser("https://www.google.com",'_blank');
  });
  }

}
