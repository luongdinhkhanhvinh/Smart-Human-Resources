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
  selector: 'page-leave-types',
  templateUrl: 'leave-types.html',
})
export class LeaveTypesPage {

  public leaveList;
  cssClass: string;
  public primaryColor: any;
  time = 0;
  constructor(public navCtrl: NavController, public dataService: DataService, public referenceservice: ReferenceService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewDidLoad() {

    this.applyClassBySelection('bounceInLeft');
  }


  ionViewWillEnter() {
    this.leaveList = this.dataService.leave_types;
    this.leaveList.forEach(element => {
      this.time = this.time + 0.2;
      element.time = this.time;
    });
  }


  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  addLeave() {
    this.cssClass = "";
    this.navCtrl.push(AddLeaveTypePage);
  }
  editLeave(){
    this.cssClass = "";
    this.navCtrl.push(EditLeaveType);
  }

  deleteLeave() {
    this.cssClass = "";
    let alert = this.referenceservice.confirmAlert(
      "Confirm Delete",
      "Do you want to continue to delete this Leave"
    );
    alert.present();
    alert.onDidDismiss(data => {
      if (data) {
        this.referenceservice.basicAlert(
          "success",
          "Leave Removed successfully"
        );
      }
    });
  }
}

// **************************************************Add Leave*********************************


@Component({
  selector: 'page-leave-types',
  templateUrl: 'addleavetype.html',
})
export class AddLeaveTypePage {

  cssClass: string;
  public primaryColor: any;
  time = 0;
  leaveFrom: FormGroup;
  status = ['Active', 'Inactive'];
  constructor(public navCtrl: NavController, public dataService: DataService, public fb: FormBuilder, public referenceservice: ReferenceService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.leaveFrom = fb.group({
      'leave_type': ['', [Validators.required]],
      'days': ['', [Validators.required]],
      'status': ['', [Validators.required]],
    });
  }


  ionViewWillEnter() {

  }

  addLeavetype() {
    this.referenceservice.basicAlert("Success", 'Leave type added successfully');
    this.navCtrl.pop();
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


}


@Component({
  selector: 'page-leave-types',
  templateUrl: 'editleavetype.html',
})
export class EditLeaveType {

  cssClass: string;
  public primaryColor: any;
  time = 0;
  leaveFrom: FormGroup;
  status = ['Active', 'Inactive'];
  leave:any ={leave_type:'Casual Leave',days:'12',status:'Active'};
  constructor(public navCtrl: NavController, public dataService: DataService, public fb: FormBuilder, public referenceservice: ReferenceService, public navParams: NavParams, public modalCtrl: ModalController) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.leaveFrom = fb.group({
      'leave_type': ['', [Validators.required]],
      'days': ['', [Validators.required]],
      'status': ['', [Validators.required]],
    });
  }

  ionViewDidLoad() {

    this.applyClassBySelection('bounceInLeft');
  }


  ionViewWillEnter() {

  }


  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  addLeavetype() {
    this.referenceservice.basicAlert("Success", 'Leave type Edited successfully');
    this.navCtrl.pop();
  }

}


