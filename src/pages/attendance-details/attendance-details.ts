import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AttendanceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attendance-details',
  templateUrl: 'attendance-details.html',
})
export class AttendanceDetailsPage {

  public user;
  public loading;
  public url;
  public token;
  public resp;
  public attendanceList;
  public data;
  public primaryColor: any;

  constructor(public navCtrl: NavController, public dataService: DataService, public modalCtrl: ModalController, public navParams: NavParams, public http: HTTP, public referenceService: ReferenceService, public apiService: ApiService) {
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewDidLoad() {
    this.attendanceList = this.dataService.attendanceDetails;
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  openFilter() {
    let modal = this.modalCtrl.create(AttendanceDetailsFilterPage);
    modal.onDidDismiss((data) => {
     
      this.attendanceList = this.dataService.attendanceDetails;
    });
    modal.present();
  };

}


// ******************************************************Filter****************************


@Component({
  selector: 'page-attendance-details',
  templateUrl: 'attendance-filtermodal.html',
})
export class AttendanceDetailsFilterPage {

  public user;
  public loading;
  public url;
  public token;
  public resp;
  public attendanceList;
  public data;
  public primaryColor: any;
  public filterData: any = {};
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public http: HTTP, public referenceService: ReferenceService, public apiService: ApiService) {
    this.primaryColor = localStorage.getItem('primary_color');
  }

  dismiss() {
    var date = this.data.split("-");
    this.filterData.month = date[1];
    this.filterData.year = date[0];
    this.viewCtrl.dismiss(this.filterData);
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
}
