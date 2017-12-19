import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ButtonPage } from '../button/button';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  buttonClick(){
    this.navCtrl.push(ButtonPage);
  }

}
