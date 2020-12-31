import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AddHolidayPage } from "../add-holiday/add-holiday";
import { ReferenceService } from "../../providers/referenceService";
import { ApiService } from "../../providers/apiServices";
import { HTTP } from "../../../node_modules/@ionic-native/http";
import {
  FormGroup,
  FormBuilder,
  Validators
} from "../../../node_modules/@angular/forms";
import { LoginPage } from "../login/login";
import { DataService } from "../../providers/JsonService";

/**
 * Generated class for the HolidaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-holidays",
  templateUrl: "holidays.html"
})
export class HolidaysPage {
  public loading;
  public url;
  public token;
  public resp;
  public holidayList: any;
  public role: any;
  public roleId: any;
  public noData: any;
  public primaryColor: any;
  currentTime: any;
  year: any;
  month: any;
  day: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HTTP,
    public dataService : DataService,
    private referenceservice: ReferenceService,
    private apiService: ApiService
  ) {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    this.primaryColor = localStorage.getItem("primary_color");
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate() + 1;
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
  }

  ionViewWillEnter() {
    this.holidayList = this.dataService.holidays;
          this.holidayList.sort(
            (a, b) =>
              new Date(a.holiday_date).getTime() -
              new Date(b.holiday_date).getTime()
          );
          this.holidayList.forEach(element => {
            
            if (this.currentTime <= element.holiday_date) {
            }
          });
  }
 
  addHoliday() {
    this.navCtrl.push(AddHolidayPage);
  }

  edit(day) {
    this.navCtrl.push(EditHolidayPage, {
      holiday: day
    });
  }

  remove(day) {
    this.referenceservice.basicAlert("Success", "Holiday removed");
   
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }
}

// ********************************************EDIT HOLIDAY PAGE******************************

@Component({
  selector: "page-holidays",
  templateUrl: "edit-holiday.html"
})
export class EditHolidayPage {
  public holidayForm: FormGroup;
  public loading;
  public url;
  public token;
  public resp;
  public date;
  public desc;
  public title;
  public navData;
  public primaryColor: any;
  currentTime: any;
  year: any;
  month: any;
  day: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public referenceService: ReferenceService,
    public apiService: ApiService,
    private http: HTTP
  ) {
    this.holidayForm = fb.group({
      id: [null, Validators.compose([Validators.required])],
      title: [null, Validators.compose([Validators.required])],
      holiday_date: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])]
    });
    this.navData = this.navParams.get("holiday");
    this.title = this.navData.title;
    this.date = this.navData.holiday_date;
    this.desc = this.navData.description;
    this.primaryColor = localStorage.getItem("primary_color");
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate() + 1;
    if (this.month < 10) {
      this.month = "0" + this.month;
    }
    if (this.day < 10) {
      this.day = "0" + this.day;
    }
    this.currentTime = this.year + "-" + this.month + "-" + this.day;
  }

  ionViewWillEnter() {
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  editHoliday() {
    this.referenceService.basicAlert(
     "Success",
      "Holiday Edited successfully"
    );
    this.navCtrl.pop();
  }
}
