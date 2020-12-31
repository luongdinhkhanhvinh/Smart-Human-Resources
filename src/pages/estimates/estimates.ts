import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the PayslipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-estimates',
  templateUrl: 'estimates.html',
})
export class EstimatesPage {
  public primaryColor: any;
  estimate: any;
  loading: any;
  url: any;
  token: any;
  resp: any;
  role: any;
  roleId: any;
  items = [];
  subtotal =0;
  tax1=0;
  tax2=0;
  total=0;
  blackLogo:any;
  // payslipData: any = {};
  // totalEarnings: any;
  // totalDeductions: any;
  // progressStatus = false;
  // perc: any;
  // progress: any;
  // netSalary: any;
  // pdfUrl: any;
  constructor(public navCtrl: NavController,public plt:Platform, public navParams: NavParams, private localNotifications: LocalNotifications, public file: File, public transfer: FileTransfer, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
    this.blackLogo = localStorage.getItem('black_logo');
    this.estimate = this.navParams.get('estimate');
    this.items =  this.estimate.items;
  }

  ionViewWillEnter() {
    this.tax1 =  Math.ceil(this.subtotal* (parseInt(this.estimate.tax1) * 0.01));
    this.tax2 =  Math.ceil(this.subtotal* (parseInt(this.estimate.tax2) * 0.01));
    this.total=this.subtotal+this.tax1+this.tax2;
  };

  getHeaderStyle(){
    return { 'background': this.primaryColor}
  };
}


