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
  selector: 'page-localization',
  templateUrl: 'localization.html',
})
export class LocalizationPage {

  cssClass: string;
  public primaryColor: any;
  values = {'default_country':'USA','date_format':'15/05/2016','timezone':'(UTC +5:30) Antarctica/Palmer','default_language':'English','currency_code':'USD'}
  time = 0;
  localizationFrom: FormGroup;
  date = ['15/05/2016', '15.05.2016', '15-05-2016', '05/15/2016', '2016/05/15' ,'2016-05-15',' May 15 2016' ,'15 May 2016']
  country = ['USA','United Kingdom'];
  timezone = ['(UTC +5:30) Antarctica/Palmer'];
  language = ['English','French'];
  currency = ['USD','POUND','EURO','Ringgit']
  constructor(public navCtrl: NavController, public dataService: DataService, public fb: FormBuilder, public referenceservice: ReferenceService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.localizationFrom = fb.group({
      'default_country': ['', [Validators.required]],
      'date_format': ['', [Validators.required]],
      'timezone': ['', [Validators.required]],
      'default_language': ['', [Validators.required]],
      'currency_code': ['', [Validators.required]],
      'curency_symbol': ['', [Validators.required]],
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
    this.referenceservice.basicAlert("success", "Localization Updated successfully");
  }
}
