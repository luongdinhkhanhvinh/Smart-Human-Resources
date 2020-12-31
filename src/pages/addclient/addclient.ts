import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { Validators, FormGroup, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AddemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addclient',
  templateUrl: 'addclient.html',
})
export class AddclientPage {

  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public departments;
  public designation;
  public designate = false;
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public phone1 = false;
  public client: any = {};
  employeeForm: FormGroup;
  public primaryColor: any;
  basicInformation = true;
  contactInformation = false;
  webInformation = false;
  bankInformation = false;
  hostInformation = false;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {

    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {

  };
  contact() {
   
      this.basicInformation = false;
      this.contactInformation = true;
  }
  basic() {
    this.basicInformation = true;
    this.contactInformation = false;
  }
  web() {
    this.webInformation = true;
    this.contactInformation = false;
  }
  contactback() {
    this.webInformation = false;
    this.contactInformation = true;
  }
  bank() {
    this.webInformation = false;
    this.bankInformation = true;
  }
  webback() {
    this.webInformation = true;
    this.bankInformation = false;
  }

  host() {
    this.hostInformation = true;
    this.bankInformation = false;
  }
  bankback() {
    this.hostInformation = false;
    this.bankInformation = true;
  }

  moveFocus(nextElement) {
    nextElement.setFocus();
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  submit() {
    
    this.referenceService.basicAlert("Success", 'Client Added successfully');
    this.navCtrl.pop();
  }
}

