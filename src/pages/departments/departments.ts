import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController
} from "ionic-angular";
import { HTTP } from "../../../node_modules/@ionic-native/http";
import { ApiService } from "../../providers/apiServices";
import { ReferenceService } from "../../providers/referenceService";
import { PopoverPage } from "../employeelist/employeelist";
import { AddDepartmentPage } from "../add-department/add-department";
import { LoginPage } from "../login/login";
import { DataService } from "../../providers/JsonService";

/**
 * Generated class for the DepartmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-departments",
  templateUrl: "departments.html"
})
export class DepartmentsPage {
  url: any;
  token: any;
  resp: any;
  departments: any;
  loading: any;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HTTP,
    public dataService : DataService,
    private popoverCtrl: PopoverController,
    public apiServices: ApiService,
    public refService: ReferenceService
  ) {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    this.primaryColor = localStorage.getItem("primary_color");
  }

  ionViewWillEnter() {
    this.departments = this.dataService.departments;
    
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  addDepartment() {
    this.navCtrl.push(AddDepartmentPage);
  }
}
