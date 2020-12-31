import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ApiService } from '../../providers/apiServices';
import { ReferenceService } from '../../providers/referenceService';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})

export class AttendancePage {

  public date;
  public localdate;
  public localtime;
  public day;
  public token;
  public url;
  public loading;
  public resp;
  public lat;
  public lng;
  public punchin = false;
  public punchout = false;
  public punchinData: any;
  public punchOutData: any;
  public primaryColor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP, private geolocation: Geolocation, public referenceService: ReferenceService, public apiService: ApiService) {
    this.date = new Date();
    var month = new Date().getMonth() + 1
    this.localdate = new Date().getDate() + '/' + month + '/' + new Date().getFullYear();
    this.localtime = new Date().toLocaleTimeString();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
    });
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  punchIn() {
    this.localtime = new Date().toLocaleTimeString();
    this.punchinData = this.localtime;
    this.punchin = true;
    this.referenceService.basicAlert("Success", "Punched in Successfully")

  };

 
  punchOut() {
    this.localtime = new Date().toLocaleTimeString();
    this.punchOutData = this.localtime;
    this.punchout = true;
    this.referenceService.basicAlert("Success", "Punched out Successfully")
  };

  
}
