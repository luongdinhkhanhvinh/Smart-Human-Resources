import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { AddLeaveRequestPage } from '../add-leave-request/add-leave-request';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the LeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html',
})
export class LeaveRequestPage {
  public loading;
  public url;
  public token;
  public leaveList;
  public resp;
  pageNumber = 1;
  page = false;
  public role: any;
  public roleId: any;
  noData = false;
  time = 0;
  filterData: any = {};
  cssClass: string;
  public primaryColor: any;
  constructor(public navCtrl: NavController,public dataService:DataService, public http: HTTP, public navParams: NavParams, private referenceservice: ReferenceService, private apiService: ApiService, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.filterData.leave_status = '';
    this.filterData.leave_type = '';
  }

  ionViewDidLoad() {

    this.applyClassBySelection('bounceInLeft');
  }

 
  ionViewWillEnter() {
    this.leaveList = this.dataService.leaves;
    this.leaveList.forEach(element => {
      this.time = this.time + 0.2;
      element.time = this.time;
    });
  }
  openModal(leave) {
    this.cssClass = '';
    this.navCtrl.push(LeaveRequestMoadlPage, {
      leave: leave
    })
  };

  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  addLeave() {
    this.cssClass = '';
    this.navCtrl.push(AddLeaveRequestPage);
  };

  openFilter() {
    this.cssClass = '';
    let modal = this.modalCtrl.create(LeaveFilterPage);
    modal.onDidDismiss((data) => {
    });
    modal.present();
  };


  cancel(leave) {
    this.referenceservice.basicAlert("Success", 'Leave request Cancelled');
  };

  acceptReject(leave, status) {
    this.referenceservice.basicAlert("Success", 'Your Action accepted');
  };

}


@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request-modal.html',
})
export class LeaveRequestMoadlPage {
  public leave;
  public primaryColor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.leave = this.navParams.get('leave');
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {

  };

  back() {
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

}


@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request-filter.html',
})
export class LeaveFilterPage {
  public filterData: any = {};
  public loading;
  public url;
  public token;
  public leave_types;
  public resp;
  public primaryColor: any;
  public leaveStatus = [
    { "id": 0, "status": "Pending" },
    { "id": 1, "status": "Accepted" },
    { "id": 2, "status": "Rejected" },
    { "id": 3, "status": "Cancelled" },
  ];

  constructor(public viewCtrl: ViewController,public dataService: DataService, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.primaryColor = localStorage.getItem('primary_color');
  }
  ionViewDidEnter() {
    this.leave_types = this.dataService.leave_types;
  }

  dismiss() {
   
    this.viewCtrl.dismiss(this.filterData);
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

}



