import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { AttendanceDetailsPage } from '../attendance-details/attendance-details';
import { LoginPage } from '../login/login';
import { TimeSheetListPage } from '../timesheets/timesheetslist';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AttendanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attendance-list',
  templateUrl: 'attendance-list.html',
})
export class AttendanceListPage {

  @ViewChild(Content) content: Content;
  public contacts;
  public groupedContacts = [];
  public list;
  public loading;
  public url;
  public token;
  public resp;
  public page;
  public pageNumber;
  public noData;
  public primaryColor: any;
  type: any;
  page1: any;

  constructor(public navCtrl: NavController,public dataService:DataService, public navParams: NavParams, public http: HTTP, public referenceService: ReferenceService, public apiService: ApiService) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.type = this.navParams.get('timesheet')
  }

  ionViewWillEnter() {
    this.list = this.dataService.users;
    this.list = this.sortByKey(this.list, 'fullname');
    this.groupContacts(this.list);
  };


  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  openDetails(contact) {
    
    if (this.type) {
      this.navCtrl.push(TimeSheetListPage, {
        user: contact
      })
    }
    else {
      this.navCtrl.push(AttendanceDetailsPage, {
        user: contact
      })
    }
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
}
