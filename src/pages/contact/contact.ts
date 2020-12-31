import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { AttendanceDetailsPage } from '../attendance-details/attendance-details';
import { LoginPage } from '../login/login';
import { VoiceCallPage } from '../voicecall/voicecall';
import { VideoCallPage } from '../videocall/videocall';
import { IncomingCallPage } from '../incomingcall/incomingcall';
import { ChatPage } from '../chat/chat';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AttendanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  @ViewChild(Content) content: Content;
  public contacts;
  public groupedContacts = [];
  public list;
  public loading;
  public url;
  public token;
  public resp;
  public page;
  public searchText;
  group = false;
  public pageNumber;
  public noData;
  public calldetails;
  public selected = {};
  public searching = false;
  userIds = [];
  type: any;
  chat = false;
  public primaryColor: any;
  group_id: any;
  groupnames: any;
  groupName: any;
  my_id: any;
  constructor(public navCtrl: NavController,public dataService:DataService, public modalCtrl: ModalController, public navParams: NavParams, public http: HTTP, public referenceService: ReferenceService, public apiService: ApiService) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.my_id = localStorage.getItem('user_id');
    this.type = this.navParams.get('type')
    // this.userIds.push(this.my_id);
    if (this.type == 'chat') {
      this.chat = true;
    }
    else {
      this.chat = false;
    }
  }

  ionViewDidLoad() {
    this.list = this.dataService.users;
    this.list = this.sortByKey(this.list, 'fullname');
    this.list.forEach(element => {
      element.checked = false;
    });
   
  };
  
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  openChat(user) {
    this.navCtrl.push(ChatPage)
    
  }
  makecall() {
    this.list.forEach(element => {
      if (element.checked) {
        this.userIds.push(element.user_id)
      }
    })
    this.navCtrl.push(IncomingCallPage, {
      group: this.userIds
    })
  };

  makeGroupChat() {
    this.groupChat();

    
  };

  groupChat() {
    this.navCtrl.push(ChatPage)
  };

  makegroupcall() {

  };
  cancelGroupCall() {
    this.group = false;
  };
  search() {
    this.searching = true;
  };
  clearSearch() {
    this.searching = false;
  };

  openDetails(contact) {
    this.navCtrl.push(AttendanceDetailsPage, {
      user: contact
    })
  };

  voiceCall(contact) {
    this.navCtrl.push(IncomingCallPage, {
      contact: contact,
      type: 'voice'
    })
  };
  videoCall(contact) {
    this.navCtrl.push(IncomingCallPage, {
      contact: contact,
      type: 'video'
    })
  };
 
  sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  };

  groupContacts(contacts) {
    let sortedContacts = contacts;
    let currentLetter = false;
    let currentContacts = [];
    sortedContacts.forEach((value, index) => {
      if (value.fullname.charAt(0) != currentLetter) {
        currentLetter = value.fullname.charAt(0);
        let newGroup = {
          letter: currentLetter,
          list: []
        };
        currentContacts = newGroup.list;
        this.groupedContacts.push(newGroup);
      }
      currentContacts.push(value);
    });
  };

  openModal() {
    let modal = this.modalCtrl.create(GroupModalPage);
    modal.onDidDismiss((data) => {
      this.groupName = data;
      if (this.groupName == "close") {
        this.group = false;
      }
      else {
        this.group = true;
      }
    });
    modal.present();
  }
}


@Component({
  selector: 'page-contact',
  templateUrl: 'creategroup.html',
})
export class GroupModalPage {
  public filterData: any = {};
  public loading;
  public url;
  public token;
  public departments;
  public designation;
  public department_id;
  public designation_id;
  public resp;
  groupname: any;
  public primaryColor: any;
  constructor(public viewCtrl: ViewController, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.primaryColor = localStorage.getItem('primary_color');
  }
  ionViewDidEnter() {

  };

  moveFocus(nextElement) {
  };

  dismiss() {
    if (this.groupname) {
      this.viewCtrl.dismiss(this.groupname);
    }
    else {
      this.referenceservice.basicAlert('Smart HRMS', 'Please add groupname');
    }
  }
  closeFilter() {
    this.viewCtrl.dismiss("close");
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

}
