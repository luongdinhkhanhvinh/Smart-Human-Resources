import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content, ViewController } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddTimesheetsPage } from '../add-timesheet/add-timesheet';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the EmployeesalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-timesheetslist',
  templateUrl: 'timesheetslist.html',
})
export class TimeSheetListPage {
  @ViewChild(Content) content: Content;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  public estimatesList: any;
  public loading: any;
  public url: any;
  public token: any;
  public resp: any;
  pageNumber = 1;
  page = false;
  noData = false;
  newGame: any;
  timesheets: any;
  day: any;
  currentTime: any;
  today: any;
  user: any;
  constructor(public navCtrl: NavController, public dataService:DataService, public referenceservice: ReferenceService, public modalCtrl: ModalController, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
    this.currentTime = new Date();
    this.today = this.currentTime.getFullYear() + '-' + (this.currentTime.getMonth() + 1) + '-' + this.currentTime.getDate();
    this.user = this.navParams.get('user');
  }

  ionViewWillEnter() {
    this.newGame = this.navParams.get('timesheets') || null;
    if (this.navParams.get('timesheet_type') == "edit") {
      if (this.navParams.get('timesheets')) {
        var data = this.navParams.get('timesheets');
        var id = data.time_id;
        var index = this.timesheets.map(x => {
          return x.time_id;
        }).indexOf(id);
        this.timesheets[index] = data;
        if (this.timesheets[index].timeline_date == this.today) {
          this.timesheets[index].edit = true;
        }
      }
    }
    else if (this.navParams.get('timesheet_type') == "add") {
      if (this.navParams.get('timesheets')) {
        var data = this.navParams.get('timesheets');
        data.edit = true;
        this.timesheets.splice(0, 0, data)
      }
    }
  };

  ionViewDidLoad() {
    this.timesheets = this.dataService.timesheet_list;
    var hours = this.dataService.timesheet_hours;
    this.timesheets.forEach(element => {
      if (element.timeline_date == this.today) {
        element.edit = true;
      }
      else {
        element.edit = false;
      }
    });
  
    hours.forEach(element => {
      if (element.date == this.today) {
        localStorage.setItem('timesheetHours', element.minutes.toString());
      }
    });

  }

  addTimesheet() {
    this.navCtrl.push(AddTimesheetsPage);
  }

  editTimeSheet(timesheet) {
    this.navCtrl.push(TimeSheetEditPage, { timesheet: timesheet })
  };
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  openModal(timesheet) {
    this.navCtrl.push(TimeSheetModalPage, { timesheet: timesheet })
  };
  openFilter() {
    let modal = this.modalCtrl.create(TimeSheetFilterPage);
    modal.onDidDismiss((data) => {
      if (data != undefined) {
        if (data == "close") {
          this.content.scrollToTop();
        }
      }
    });
    modal.present();
  }

  delete(timesheet) {
    let alert = this.referenceservice.confirmAlert("Confirm Delete", "Do you want to continue to delete this timesheet");
    alert.present();
    alert.onDidDismiss((data1) => {
      if (data1) {
        this.referenceservice.basicAlert("Success", 'Timesheet has been deleted successfully');
      }
    })
  };
}



// **********************************TIMESHEETS DETAILS PAGE****************************************

@Component({
  selector: 'page-timesheetslist',
  templateUrl: 'timesheetsmodal.html',
})
export class TimeSheetModalPage {
  @ViewChild(Content) content: Content;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  public timesheet: any;
  public loading: any;
  public url: any;
  public token: any;
  public resp: any;
  pageNumber = 1;
  page = false;
  noData = false;
  constructor(public navCtrl: NavController, public referenceservice: ReferenceService, public modalCtrl: ModalController, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color')
    this.timesheet = this.navParams.get('timesheet');
  }

  ionViewWillEnter() {

  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
}





// **********************************TIMESHEETS Edit PAGE****************************************

@Component({
  selector: 'page-timesheetslist',
  templateUrl: 'timesheetslistEdit.html',
})
export class TimeSheetEditPage {
  @ViewChild(Content) content: Content;
  public timeSheetForm: FormGroup;
  public loading;
  public url;
  public token;
  public resp: any;
  public selectedProject;
  public year: any;
  public month: any;
  public day: any;
  public leave_to;
  currentTime: any;
  public leave = true;
  public primaryColor: any;
  timesheet: any;
  time = true;
  total: any;
  public timeInminutes;
  today: any;
  projects: any;
  timeInminutes1: any;
  timesheettime: any;
  changed = false;
  changed1 = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public referenceService: ReferenceService, public apiService: ApiService, private http: HTTP) {
    this.currentTime = new Date();
    this.timesheet = this.navParams.get('timesheet');
    this.timesheettime = this.timesheet.hours;
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = new Date().toISOString();
    this.today = this.currentTime.getFullYear() + '-' + (this.currentTime.getMonth() + 1) + '-' + this.currentTime.getDate();
    this.timeSheetForm = fb.group({
      'project_id': [null, Validators.compose([Validators.required])],
      'timeline_date': [null, Validators.compose([Validators.required])],
      'hours': [null, Validators.compose([Validators.required])],
      'timeline_desc': [null, Validators.compose([Validators.required])],
      'time_id': [null, Validators.compose([Validators.required])],
    });
    this.primaryColor = localStorage.getItem('primary_color');
    this.timeSheetForm.controls['time_id'].setValue(this.timesheet.time_id)
  }

  ionViewWillEnter() {
   
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  change() {
    if (!this.changed) {
      var time1 = this.timesheettime;
      var minutes1 = time1.split(':');
      this.timeInminutes1 = (parseInt(minutes1[0]) * 60) + parseInt(minutes1[1]);
      this.total = localStorage.getItem('timesheetHours');
      var t = this.total - this.timeInminutes1;
      localStorage.setItem('timesheetHours', t.toString());
      this.changed = true;
    }
    var time = this.timeSheetForm.get('hours').value;
    var minutes = time.split(':');
    this.timeInminutes = (parseInt(minutes[0]) * 60) + parseInt(minutes[1]);
    this.total = localStorage.getItem('timesheetHours');
    var remaining = 480 - parseInt(this.total);
    if (this.timeInminutes > remaining) {
      this.referenceService.basicAlert('Smart HRMS', 'Time is invalid, cannot choose more than 8 hours per day');
      this.time = false;
    }
    else {
      this.time = true;
    }
  };

  editTimeSheets() {
    this.referenceService.basicAlert("Success", 'TimeSheet Edited successfully');
    this.navCtrl.pop();
  };

  ionViewWillLeave() {
    if (!this.changed1) {
      var time1 = this.timesheettime;
      var minutes1 = time1.split(':');
      this.timeInminutes1 = (parseInt(minutes1[0]) * 60) + parseInt(minutes1[1]);
      this.total = localStorage.getItem('timesheetHours');
      var t = parseInt(this.total) + this.timeInminutes1;
      localStorage.setItem('timesheetHours', t);
    }
  }

}







// **********************************TIMESHEETS Filter PAGE****************************************


@Component({
  selector: 'page-timesheetslist',
  templateUrl: 'timesheetslistfilter.html',
})
export class TimeSheetFilterPage {
  @ViewChild(Content) content: Content;
  public filterData: any = {};
  public resp: any;
  public year: any;
  public month: any;
  public day: any;
  public leave_to;
  currentTime: any;
  public leave = true;
  public primaryColor: any;
  timesheet: any;
  today: any;
  projects: any;
  min: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public fb: FormBuilder, public referenceService: ReferenceService, public apiService: ApiService, private http: HTTP) {
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate();
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
    this.timesheet = this.navParams.get('timesheet');
    this.min = this.year - 5;

    this.primaryColor = localStorage.getItem('primary_color');

  }

  ionViewWillEnter() {
   
  };

  selectFrom() {
    this.min = this.filterData.from_date;
  };

  filter() {
    this.viewCtrl.dismiss(this.filterData);
  }
  closeFilter() {
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

}



