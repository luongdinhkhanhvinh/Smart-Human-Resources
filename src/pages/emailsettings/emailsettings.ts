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
  selector: 'page-emailsettings',
  templateUrl: 'emailsettings.html',
})
export class EmailSettingsPage {

  cssClass: string;
  public primaryColor: any;
  time = 0;
  emailForm: FormGroup;
  security=['NONE','SSL','TLS'];
  sec="NONE";
  constructor(public navCtrl: NavController, public dataService: DataService, public fb: FormBuilder, public referenceservice: ReferenceService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.emailForm = fb.group({
      'php_mail': ['', [Validators.required]],
      'smtp_mail': ['', [Validators.required]],
      'email_address_php': ['', [Validators.required]],
      'email_name_php': ['', [Validators.required]],
      'smtp_host': ['', [Validators.required]],
      'smtp_user': ['', [Validators.required]],
      'smtp_password': ['', [Validators.required]],
      'smtp_port': ['', [Validators.required]],
      'smtp_security': ['', [Validators.required]],
      'smtp_authentication': ['', [Validators.required]],
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
    this.referenceservice.basicAlert("success", "Email Settings Updated successfully");
  }
}
