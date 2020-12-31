import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Thumbnail } from "ionic-angular";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ReferenceService } from "../../providers/referenceService";
import { ApiService } from "../../providers/apiServices";
import { HTTP } from "@ionic-native/http";
import { daysInMonth } from "ionic-angular/umd/util/datetime-util";
import { LoginPage } from "../login/login";
import { DataService } from "../../providers/JsonService";

/**
 * Generated class for the AddLeaveRequestPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-add-timesheets",
  templateUrl: "add-timesheet.html"
})
export class AddTimesheetsPage {
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
  time = true;
  total: any;
  public timeInminutes;
  public primaryColor: any;
  projectDetails: any = {};
  today: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public dataService:DataService,
    public referenceService: ReferenceService,
    public apiService: ApiService,
    private http: HTTP
  ) {
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = new Date().toISOString();
    this.today =
      this.currentTime.getFullYear() +
      "-" +
      (this.currentTime.getMonth() + 1) +
      "-" +
      this.currentTime.getDate();
    this.timeSheetForm = fb.group({
      project_id: [null, Validators.compose([Validators.required])],
      timeline_date: [null, Validators.compose([Validators.required])],
      hours: [null, Validators.compose([Validators.required])],
      timeline_desc: [null, Validators.compose([Validators.required])]
    });
    this.primaryColor = localStorage.getItem("primary_color");
  }

  ionViewWillEnter() {
    this.projectDetails.projects =this.dataService.select_project;
  };

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  addTimeSheet() {
    this.referenceService.basicAlert("success","TimeSheet Edited successfully");
    this.navCtrl.pop();
  }

  sum() {
    this.navCtrl.getPrevious().data.newGame = "manojj";
    this.navCtrl.pop();
  }
  change() {
    var time = this.timeSheetForm.get("hours").value;
    var minutes = time.split(":");
    this.timeInminutes = parseInt(minutes[0]) * 60 + parseInt(minutes[1]);
    this.total = localStorage.getItem("timesheetHours");
    var remaining = 480 - parseInt(this.total);
    if (this.timeInminutes > remaining) {
      this.referenceService.basicAlert(
        "Smart HRMS",
        "Time is invalid, cannot choose more than 8 hours per day"
      );
      this.time = false;
    } else {
      this.time = true;
    }
  }
}
