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
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  public primaryColor: any;
  invoice: any;
  loading: any;
  url: any;
  token: any;
  resp: any;
  role: any;
  roleId: any;
  payslipData: any = {};
  totalEarnings: any;
  totalDeductions: any;
  progressStatus = false;
  perc: any;
  items = [];
  subtotal = 0;
  tax1 = 0;
  tax2 = 0;
  total = 0;
  discount = 0;
  dueamnt = 0;
  progress: any;
  netSalary: any;
  pdfUrl: any;
  blackLogo: any;
  constructor(public navCtrl: NavController, public plt: Platform, public navParams: NavParams, private localNotifications: LocalNotifications, public file: File, public transfer: FileTransfer, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
    this.invoice = this.navParams.get('invoice');
    this.blackLogo = localStorage.getItem('black_logo');
    this.items = this.invoice.items;
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  ionViewWillEnter() {  
    this.tax1 = Math.ceil(this.subtotal * (parseInt(this.invoice.tax1) * 0.01));
    this.tax2 = Math.ceil(this.subtotal * (parseInt(this.invoice.tax2) * 0.01));
    this.discount = Math.ceil(this.subtotal * (parseInt(this.invoice.discount) * 0.01));
    this.dueamnt = this.invoice.total_cost - this.invoice.payment_made;
    this.total = this.subtotal + (parseInt(this.invoice.tax1) * 0.01) + (parseInt(this.invoice.tax1) * 0.01);
    if (this.dueamnt < 0) {
      this.dueamnt = 0;
    }
  }
}
