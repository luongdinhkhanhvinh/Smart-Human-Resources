import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChatListPage } from '../chat-list/chat-list';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videocall',
  templateUrl: 'videocall.html',
})
export class VideoCallPage {

  public mute= false;
  public primaryColor: any;
  public colorCode:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colorCode = {
      'background-color': localStorage.getItem('colorCode'),
    }
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewDidLoad() {
  }
  userMute(){
    this.mute=!this.mute;
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  openChat(){
    this.navCtrl.push(ChatListPage);
  }
  endCall(){
    this.navCtrl.setRoot(HomePage);
  }
}
