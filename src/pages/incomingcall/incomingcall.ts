import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VoiceCallPage } from '../voicecall/voicecall';
import { VideoCallPage } from '../videocall/videocall';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-incomingcall',
  templateUrl: 'incomingcall.html',
})
export class IncomingCallPage {

  public colorCode:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colorCode = {
      'background-color': localStorage.getItem('colorCode'),
    }
  }

  ionViewDidLoad() {
  }
  answerCall(){
    this.navCtrl.push(VideoCallPage);
  }
  endCall(){
    this.navCtrl.pop();
  }
}
