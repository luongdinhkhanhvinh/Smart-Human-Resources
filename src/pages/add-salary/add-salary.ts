import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AddSalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-salary',
  templateUrl: 'add-salary.html',
})
export class AddSalaryPage {

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
  public dateyear: any;

  constructor(public navCtrl: NavController, public dataService:DataService,public fb: FormBuilder, public referenceservice: ReferenceService, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
    this.salaryForm = fb.group({
      'user_id': ['', Validators.compose([Validators.required])],
      'year': ['', Validators.compose([Validators.required])],
      'month': ['', Validators.compose([Validators.required])],
      'net_salary': ['', Validators.compose([Validators.required])],
      'basic_pay': ['', Validators.compose([Validators.required])],
      'da': ['', Validators.compose([Validators.required])],
      'hra': ['', Validators.compose([Validators.required])],
      'conveyance': [0, Validators.compose([Validators.required])],
      'allowance': [0, Validators.compose([Validators.required])],
      'medical_allowance': [0, Validators.compose([Validators.required])],
      'earning_others': [0, Validators.compose([Validators.required])],
      'tds': [0, Validators.compose([Validators.required])],
      'esi': [0, Validators.compose([Validators.required])],
      'pf': [0, Validators.compose([Validators.required])],
      'leaves': [0, Validators.compose([Validators.required])],
      'prof_tax': [0, Validators.compose([Validators.required])],
      'labour_welfare': [0, Validators.compose([Validators.required])],
      'fund': [0, Validators.compose([Validators.required])],
      'ded_others': [0, Validators.compose([Validators.required])],
    });
  }

  ionViewWillEnter() {
    this.empList = this.dataService.users;
  };

  addSalary() {
    this.referenceservice.basicAlert('Smart HRMS', 'Salary has been added successfully');
    this.navCtrl.pop();
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  caculate() {
    this.basicPay = Math.ceil(this.salaryForm.value.net_salary * .50);
    this.da = Math.ceil(this.salaryForm.value.net_salary * .40);
    this.hra = Math.ceil(this.salaryForm.value.net_salary * .10);
  };

  moveFocus(nextElement) {
    nextElement.setFocus();
  };
}




