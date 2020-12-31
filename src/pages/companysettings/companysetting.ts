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
  selector: 'page-companysetting',
  templateUrl: 'companysetting.html',
})
export class CompanySettingsPage {

  cssClass: string;
  public primaryColor: any;
  time = 0;
  companyFrom: FormGroup;
  constructor(public navCtrl: NavController, public dataService: DataService, public fb: FormBuilder, public referenceservice: ReferenceService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.companyFrom = fb.group({
      'company_name': ['', [Validators.required]],
      'contact_person': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'postal_code': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'mobile': ['', [Validators.required]],
      'fax': ['', [Validators.required]],
      'website_url': ['', [Validators.required]],
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
    this.referenceservice.basicAlert("success", "Company Settings Updated successfully");
  }
}
