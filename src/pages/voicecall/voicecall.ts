import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-voicecall',
  templateUrl: 'voicecall.html',
})
export class VoiceCallPage {

  public mute= false;
  public colorCode:any;
  public primaryColor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colorCode = {
      'background-color': localStorage.getItem('colorCode'),
    }
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewDidLoad() {
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  userMute(){
    this.mute=!this.mute;
  }

  
  endCall(){
    this.navCtrl.setRoot(HomePage);
  }

}
