import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { Validators, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { LoginPage } from '../login/login';
import { ActionSheetOptions, ActionSheet } from '@ionic-native/action-sheet';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { FileTransferObject, FileUploadOptions, FileTransfer } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Base64 } from '@ionic-native/base64';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AddemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-createexpenses',
  templateUrl: 'createexpenses.html',
})
export class CreateExpensesPage {

  public selected = [];
  uploadImage = false;
  public selected1;
  public loading;
  safeUrl: SafeResourceUrl;
  public url;
  public token;
  public resp;
  public projectDetails: any = {};
  public designation;
  public designate = false;
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public totalCost = 0;
  public phone1 = false;
  expensesForm: FormGroup;
  category: any;
  projects: any;
  currentTime: any;
  year: any;
  image: any;
  imagePath: any = {};
  day: any;
  month: any;
  public primaryColor: any;
  public client = false;
  bill = false;
  invo = false;
  img: any;
  constructor(public navCtrl: NavController,public dataService:DataService, private sanitizer: DomSanitizer, private filePath: FilePath, public base64: Base64, public actionSheet: ActionSheet, private transfer: FileTransfer, public camera: Camera, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.expensesForm = fb.group({
      'amount': ['', [Validators.required]],
      'project': ['', [Validators.required]],
      'client': ['', [Validators.required]],
      'expense_date': ['', [Validators.required]],
      'category': ['', [Validators.required]],
      'billable': ['', [Validators.required]],
      'extra_fee': ['', [Validators.required]],
      'show_client': ['', [Validators.required]],
      'invoiced': ['', [Validators.required]],
      'notes': ['', [Validators.required]],
      'receipt': ['', [Validators.required]]
    });
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate();
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
    this.primaryColor = localStorage.getItem('primary_color');
  }


  ionViewWillEnter() {
    this.projectDetails.expense_categories = this.dataService.expense_categories;
    this.projectDetails.projects = this.dataService.select_project;
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  moveFocus(nextElement) {
    nextElement.setFocus();
  };

  totalCostCalc() {
    this.totalCost = 0;
    this.expensesForm.value.item_details.forEach(element => {
      this.totalCost = this.totalCost + parseInt(element.total_cost);
    });
  }
  addEmployee() {
    this.referenceService.basicAlert('Success', 'Expense has been added');
    this.navCtrl.pop();
    
  };
  imageFilePath_change($event) {
  }
}





















