import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AddemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-createtask',
  templateUrl: 'createtask.html',
})
export class CreateTaskPage {

  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public projectDetails:any = {};
  public designation;
  public designate = false;
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public phone1 = false;
  projectForm: FormGroup;
  public primaryColor: any;
  public fixed = false;
  proDateFrom:any;
  currentTime:any;
  year:any;
  day:any;
  start= false;
  month:any;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.projectForm = fb.group({
      'project': ['', [Validators.required]],
      'task_name': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'assigned_to': [, Validators.compose([Validators.required])],
      'start_date': ['', [Validators.required]],
      'due_date': ['', [Validators.required]],
      'visible': ['', [Validators.required]],
      'estimate': ['', [Validators.required]],
       });
    this.primaryColor = localStorage.getItem('primary_color');
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate();
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
  }

  ionViewWillEnter(){
  
  };
  selectFrom() {
    this.proDateFrom = this.projectForm.value.start_date;
    this.start = true;
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

 
  moveFocus(nextElement) {
    nextElement.setFocus();
  };
  
  createtask() {
    this.referenceService.basicAlert("Success", 'Task created successfully');
    this.navCtrl.pop();
    
  };

  isValid(field: string) {
    let formField = this.projectForm.get(field);
    return formField.valid || formField.pristine;
  };

  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return { invalidName: true };
    }
    else {
      this.username1 = false;
    }
  };

  passwordValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')) {
      return { invalidPassword: true };
    }
    else {
      this.password1 = false;
    }
  };

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.toLowerCase().match('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'))) {
      return { invalidEmail: true };
    }
    else {
      this.email1 = false;
    }
  };

  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.match('[0-9]+'))) {
      return { invalidPhone: true };
    }
    else {
      this.phone1 = false;
    }
  };
}

