import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { DataService } from '../../providers/JsonService';
import { ReferenceService } from '../../providers/referenceService';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the LeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-salarysettings',
  templateUrl: 'salarysettings.html',
})
export class SalarySettingsPage {

  cssClass: string;
  public primaryColor: any;
  time = 0;
  salaryFrom: FormGroup;
  security=['NONE','SSL','TLS'];
  sec="NONE";
  constructor(public navCtrl: NavController, public dataService: DataService, public fb: FormBuilder, public referenceservice: ReferenceService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.salaryFrom = fb.group({
      'da': ['', [Validators.required]],
      'hra': ['', [Validators.required]],
      'employee_share_pf': ['', [Validators.required]],
      'organization_share_pf': ['', [Validators.required]],
      'employee_share_esi': ['', [Validators.required]],
      'organization_share_esi': ['', [Validators.required]],

    });
  }



  ionViewWillEnter() {

  }


  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  update() {
    this.referenceservice.basicAlert("success", "Salary Settings Updated successfully");
  }
}
