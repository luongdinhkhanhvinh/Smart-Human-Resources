import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { empty } from 'rxjs/Observer';
import { HTTP } from '@ionic-native/http';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  editorMsg = '';
  session: any;
  publisher: any;
  apiKey: any;
  sessionId: string;
  token: string;
  public mute = false;
  chatDetails: any;
  public primaryColor: any;
  tousername: any;
  message: any;
  text: string;
  noification: any = {};
  from_id: any;
  to_id: any;
  my_id: any;
  url: any;
  loading: any;
  resp: any;
  group_id: any;
  messages: any;
  chat_type: any;
  nodata = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService, public http: HTTP, public referenceService: ReferenceService, public apiService: ApiService) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.my_id = localStorage.getItem('user_id');
    this.chatDetails = this.navParams.get('chatdata');
  }

  ionViewDidLoad() {
    var msgs = this.dataservice.chatmsg.chat_messages;
            if (msgs.length == 0) {
              this.nodata = true;
            }
            else {
              this.nodata = false;
            }
            this.messages = msgs;
            this.content.scrollToBottom();
  }

  sendTxt() {
  
  };

  sendMsg() {
  
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
}


