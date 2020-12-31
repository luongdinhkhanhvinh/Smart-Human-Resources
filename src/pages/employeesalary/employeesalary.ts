import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content, ViewController } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { AddSalaryPage } from '../add-salary/add-salary';
import { PayslipPage } from '../payslip/payslip';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the EmployeesalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employeesalary',
  templateUrl: 'employeesalary.html',
})
export class EmployeesalaryPage {
  @ViewChild(Content) content: Content;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  public payslipLists: any;
  public loading: any;
  public url: any;
  public token: any;
  public resp: any;
  pageNumber = 1;
  page = false;
  noData = false;
  constructor(public navCtrl: NavController,public dataService: DataService, public referenceservice: ReferenceService, public modalCtrl: ModalController, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
    this.payslipLists = this.dataService.payslip_list;
  };
  
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  editSalary(payslip) {
    this.navCtrl.push(EditSalaryPage, {
      payslip: payslip
    })
  };


  addSalary() {
    this.navCtrl.push(AddSalaryPage)
  };


  generatePayslip(payslip) {
    this.navCtrl.push(PayslipPage, {
      payslip: payslip
    })
  };

  openModal() {
    let modal = this.modalCtrl.create(SalaryFilterPage);
    modal.onDidDismiss((data) => {
      if (data != undefined) {
          this.ionViewWillEnter();
          this.content.scrollToTop();
      }
    });
    modal.present();
  };


  
}



@Component({
  selector: 'page-add-salary',
  templateUrl: 'empsalaryEdit.html',
})
export class EditSalaryPage {

  public role: any;
  public roleId: any;
  public primaryColor: any;
  public salaryForm: FormGroup;
  public employeenames: any;
  public url: any;
  public loading: any;
  public resp: any;
  public token: any;
  public empList: any;
  public selected;
  public basicPay: any;
  public da: any;
  public hra: any;
  public payslip: any = {};
  public dateyear: any;
  public month: any;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public referenceservice: ReferenceService, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
    var data = this.navParams.get('payslip');
    this.payslip.user_id = data.user_id;
    this.payslip.year = data.year;
    this.payslip.month = data.month;
    this.payslip.net_salary = data.salary,
      this.payslip.basic_pay = data.payslip_details.payslip_basic;
    this.payslip.da = data.payslip_details.payslip_da;
    this.payslip.hra = data.payslip_details.payslip_hra;
    this.payslip.conveyance = data.payslip_details.payslip_conveyance;
    this.payslip.allowance = data.payslip_details.payslip_allowance;
    this.payslip.medical_allowance = data.payslip_details.payslip_medical_allowance;
    this.payslip.earning_others = data.payslip_details.payslip_others;
    this.payslip.tds = data.payslip_details.payslip_ded_tds;
    this.payslip.esi = data.payslip_details.payslip_ded_esi;
    this.payslip.pf = data.payslip_details.payslip_ded_pf;
    this.payslip.leaves = data.payslip_details.payslip_ded_leave;
    this.payslip.prof_tax = data.payslip_details.payslip_ded_prof;
    this.payslip.labour_welfare = data.payslip_details.payslip_ded_welfare;
    this.payslip.fund = data.payslip_details.payslip_ded_fund;
    this.payslip.ded_others = data.payslip_details.payslip_ded_others;
  }
  ionViewWillEnter() {
   
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  addSalary() {
    this.referenceservice.basicAlert("Smart HRMS", 'Payslip Edited Successfully');
    this.navCtrl.pop();
  }
  caculate() {
    this.payslip.basic_pay = Math.ceil(parseInt(this.payslip.net_salary) * .50);
    this.payslip.da = Math.ceil(parseInt(this.payslip.net_salary) * .40);
    this.payslip.hra = Math.ceil(parseInt(this.payslip.net_salary) * .10);
  }
}




@Component({
  selector: 'page-add-salary',
  templateUrl: 'employeesalaryfilter.html',
})
export class SalaryFilterPage {

  public role: any;
  public roleId: any;
  public primaryColor: any;
  public employeenames: any;
  public url: any;
  public loading: any;
  public resp: any;
  public token: any;
  public empList: any;
  public selected;
  public dateyear: any;
  public month: any;
  public filterData: any = {};
  constructor(public navCtrl: NavController,public dataService:DataService, public viewCtrl: ViewController, public fb: FormBuilder, public referenceservice: ReferenceService, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
  }
  ionViewWillEnter() {
    this.empList = this.dataService.users;
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  filter() {
    this.viewCtrl.dismiss("close");
  };

  closeFilter() {
    this.viewCtrl.dismiss("close");
  };
}
