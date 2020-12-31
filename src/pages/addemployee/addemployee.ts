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
  selector: 'page-addemployee',
  templateUrl: 'addemployee.html',
})
export class AddemployeePage {

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
  employeeForm: FormGroup;
  public primaryColor: any;
  leads: any;
  public fixed = false;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.employeeForm = fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'fullname': ['', Validators.compose([Validators.required])],
      'designation_id': ['', Validators.compose([Validators.required])],
      'department_id': ['', Validators.compose([Validators.required])],
      'phone': ['', [Validators.required,]],
      'is_teamlead': ['', Validators.compose([Validators.required])],
      'teamlead_id': ['', Validators.compose([Validators.required])],
    });
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
   
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  

  moveFocus(nextElement) {
    nextElement.setFocus();
  };
  team() {
  }
  addEmployee() {
    this.referenceService.basicAlert("Success", 'Employee Added successfully');
    this.navCtrl.pop();
  };
}

