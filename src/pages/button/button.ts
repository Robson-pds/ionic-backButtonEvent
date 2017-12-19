import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

@Component({
  selector: 'page-button',
  templateUrl: 'button.html'
})

export class ButtonPage {

  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.setBackButtonAction()
  }

  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
      //here implements the event you want
      alert('Click');
    }
  }

}
