import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content, ViewController } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { AddSalaryPage } from '../add-salary/add-salary';
import { PayslipPage } from '../payslip/payslip';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvoicePage } from '../invoice/invoice';
import { CreateInvoicePage } from '../create-invoice/createinvoice';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the EmployeesalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paymentlist',
  templateUrl: 'paymentlist.html',
})
export class PaymentListPage {
  @ViewChild(Content) content: Content;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  public invoiceList: any;
  public loading: any;
  public url: any;
  public token: any;
  public paymentList: any;
  public resp: any;
  pageNumber = 1;
  page = false;
  noData = false;
  constructor(public navCtrl: NavController,public dataService : DataService, public referenceservice: ReferenceService, public modalCtrl: ModalController, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
    this.paymentList = this.dataService.payment;
  };

  openPayment(payment) {
    this.navCtrl.push(PaymentDetailsPage, {
      payment: payment
    });
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


};




// ************************************************** Details *************************************



@Component({
  selector: 'page-paymentlist',
  templateUrl: 'paymentDetail.html',
})
export class PaymentDetailsPage {
  public filterData: any = {};
  public loading;
  public url;
  public token;
  public resp;
  blackLogo: any;
  public payment: any;
  public primaryColor: any;
  constructor(public viewCtrl: ViewController, public apiService: ApiService, public modalCtrl: ModalController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.payment = this.navParams.get('payment');
    this.blackLogo = localStorage.getItem('black_logo');
  }
  ionViewDidEnter() {

  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

}