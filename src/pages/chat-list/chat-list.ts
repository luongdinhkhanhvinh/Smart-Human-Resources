import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ChatPage } from "../chat/chat";
import { ContactPage } from "../contact/contact";
import { HTTP } from "@ionic-native/http";
import { ReferenceService } from "../../providers/referenceService";
import { ApiService } from "../../providers/apiServices";
import { LoginPage } from "../login/login";
import { DataService } from "../../providers/JsonService";

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-chat-list",
  templateUrl: "chat-list.html"
})
export class ChatListPage {
  editorMsg = "";
  url: any;
  token: any;
  resp: any;
  loading: any;
  public mute = false;
  public primaryColor: any;
  last_message: any;
  user: any = {};
  data1 :any={};
  group = false;
  groupnames: any;
  grouptoken: any;
  groupsession: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HTTP,
    public dataService:DataService,  
    public referenceService: ReferenceService,
    public apiService: ApiService
  ) {
    this.primaryColor = localStorage.getItem("primary_color");
    this.user.users = [];
  }

  ionViewWillEnter() {
    this.data1.all_users = this.dataService.chatMsgList;
    this.data1.all_chats = this.dataService.chatLastMsg;
    this.data1.all_users.forEach((element, key) => {
      if (element.user_id ==  this.data1.all_chats[key].user_id) {
        element.message =  this.data1.all_chats[key].last_message;
        element.msg_time =  this.data1.all_chats[key].msg_time;
      }
    });
    this.last_message =  this.data1.all_users;
  }
  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
  openChat(user) {
    this.navCtrl.push(ChatPage)
  }

  openContactList() {
    this.navCtrl.push(ContactPage, {
      type: "chat"
    });
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  setDefaultPic(message) {
    message.profile_image = "assets/imgs/user.jpg";
  }
}
