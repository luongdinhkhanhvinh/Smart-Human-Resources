import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { ApiService } from '../../providers/apiServices';
import { ReferenceService } from '../../providers/referenceService';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AddDesignationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-designations',
  templateUrl: 'add-designations.html',
})
export class AddDesignationsPage {

  public loading;
  public url;
  private designationForm: FormGroup;
  public token;
  public departments;
  public resp;
  public selectedLeave;
  primaryColor: any;
  constructor(public navCtrl: NavController,public dataService:DataService, public navParams: NavParams, private fb: FormBuilder, private alertCtrl: AlertController, private apiService: ApiService, private referenceService: ReferenceService, private http: HTTP) {
    this.designationForm = fb.group({
      'designation': [null, Validators.compose([Validators.required])],
      'department_id': [null, Validators.compose([Validators.required])],
    });
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
    this.departments = this.dataService.departments;
  }



  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  addDesignation() {
    this.referenceService.basicAlert("Success", 'Designation added successfully');
    this.navCtrl.pop();
   
  }
}






