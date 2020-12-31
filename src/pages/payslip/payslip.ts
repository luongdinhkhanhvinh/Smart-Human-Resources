import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DataService } from '../../providers/JsonService';
/**
 * Generated class for the PayslipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payslip',
  templateUrl: 'payslip.html',
})
export class PayslipPage {
  public primaryColor: any;
  payslip: any;
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
  progress: any;
  blackLogo:any;
  netSalary: any;
  pdfUrl: any;
  constructor(public navCtrl: NavController,public dataService : DataService,public plt:Platform, public navParams: NavParams, private localNotifications: LocalNotifications, public file: File, public transfer: FileTransfer, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor =  localStorage.getItem('primary_color')
    this.payslip = this.navParams.get('payslip');
    this.blackLogo = localStorage.getItem('black_logo');
  }

  ionViewWillEnter() {
    
    this.payslipData = this.dataService.payslip;
              this.totalEarnings = parseInt(this.payslipData.payslip_basic) + parseInt(this.payslipData.payslip_da) + parseInt(this.payslipData.payslip_hra) + parseInt(this.payslipData.payslip_conveyance) + parseInt(this.payslipData.payslip_allowance) + parseInt(this.payslipData.payslip_medical_allowance) + parseInt(this.payslipData.payslip_others);
          this.totalDeductions = parseInt(this.payslipData.payslip_ded_tds) + parseInt(this.payslipData.payslip_ded_esi) + parseInt(this.payslipData.payslip_ded_pf) + parseInt(this.payslipData.payslip_ded_leave) + parseInt(this.payslipData.payslip_ded_prof) + parseInt(this.payslipData.payslip_ded_welfare) + parseInt(this.payslipData.payslip_ded_fund) + parseInt(this.payslipData.payslip_ded_others);
          this.netSalary = this.totalEarnings - this.totalDeductions;
  }

  getHeaderStyle(){
    return { 'background':  this.primaryColor}
  };
}
