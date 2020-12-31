import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Thumbnail } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { daysInMonth } from '../../../node_modules/ionic-angular/umd/util/datetime-util';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AddLeaveRequestPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-leave-request',
  templateUrl: 'add-leave-request.html',
})
export class AddLeaveRequestPage {

  public leaveRequestForm: FormGroup;
  public loading;
  public url;
  public token;
  public resp;
  public date;
  public leave_types;
  public selectedLeave;
  public year: any;
  public month: any;
  public day: any;
  public leave_to;
  currentTime: any;
  public leave = true;
  public primaryColor: any;

  constructor(public navCtrl: NavController,public dataService:DataService, public navParams: NavParams, public fb: FormBuilder, public referenceService: ReferenceService, public apiService: ApiService, private http: HTTP) {
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate();
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
    this.leaveRequestForm = fb.group({
      'leave_from': [null, Validators.compose([Validators.required])],
      'leave_to': [null, Validators.compose([Validators.required])],
      'leave_type': [null, Validators.compose([Validators.required])],
      'leave_reason': [null, Validators.compose([Validators.required])],
    });
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
    this.leave_types = this.dataService.leave_types;
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  selectFrom() {
    this.leave_to = this.leaveRequestForm.value.leave_from;
    this.leave = false; };

  addLeaverequest() {
    this.referenceService.basicAlert("Success", 'Leave requested successfully');
    this.navCtrl.pop();
  };
}
