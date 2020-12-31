import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { ApiService } from '../../providers/apiServices';
import { ReferenceService } from '../../providers/referenceService';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AddDepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-department',
  templateUrl: 'add-department.html',
})
export class AddDepartmentPage {

  public loading;
  public url;
  private deptForm: FormGroup;
  public token;
  primaryColor: any;
  secondryColor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private alertCtrl: AlertController, private apiService: ApiService, private referenceService: ReferenceService, private http: HTTP) {
    this.deptForm = fb.group({
      'department': [null, Validators.compose([Validators.required])],
    });
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {

  };

  addDept() {
    this.referenceService.basicAlert("Success", 'Department added successfully');
          this.navCtrl.pop();
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
}
