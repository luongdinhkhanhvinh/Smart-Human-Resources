import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../employeelist/employeelist';
import { AddDesignationsPage } from '../add-designations/add-designations';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the DesignationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-designations',
  templateUrl: 'designations.html',
})
export class DesignationsPage {

  public role : any;
  public roleId : any;
  public primaryColor:any;
  public loading:any;
  public url:any;
  public token :any;
  public resp:any;
  public departments:any;
  public designations: any;
  public selected:any;
  constructor(public navCtrl: NavController,public dateService:DataService, public navParams: NavParams, private popoverCtrl: PopoverController,public referenceService:ReferenceService,public apiService:ApiService,public http:HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
  this.designations = this.dateService.designation;
  };

  getHeaderStyle(){
    return { 'background': this.primaryColor}
  };
  

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  };

  addDesignation(){
    this.navCtrl.push(AddDesignationsPage);
  }

}
