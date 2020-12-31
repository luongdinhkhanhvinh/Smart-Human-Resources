import { Component, ViewChild, Inject, Injector } from "@angular/core";
import {
  NavController,
  AlertController,
  ViewController,
  NavParams,
  PopoverController,
  Nav,
  Events
} from "ionic-angular";
import { EmployeelistPage } from "../employeelist/employeelist";
import { ProfilePage } from "../profile/profile";
import { LoginPage } from "../login/login";
import { ReferenceService } from "../../providers/referenceService";
import { SettingsPage } from "../settings/settings";
import { NotificationPage } from "../notification/notification";
import { ApiService } from "../../providers/apiServices";
import { HTTP } from "@ionic-native/http";
import { StatusBar } from "@ionic-native/status-bar";
import { ProjectlistPage } from "../projectlist/projectlist";
import { OneSignal } from "@ionic-native/onesignal";
import { ClientsPage } from "../clients/clients";
import { TasksPage } from "../tasks/tasks";
import { EmployeesalaryPage } from "../employeesalary/employeesalary";
import { AttendancePage } from "../attendance/attendance";
import { SelectProjectPage } from "../selectproject/selectproject";
import { IncomingCallPage } from "../incomingcall/incomingcall";
import { VideoCallPage } from "../videocall/videocall";
import { InvoiceListPage } from "../invoicelist/invoicelist";
import { EstimatesListPage } from "../estimateslist/estimateslist";
import { VoiceCallPage } from "../voicecall/voicecall";
import {
  NativePageTransitions,
  NativeTransitionOptions
} from "@ionic-native/native-page-transitions";
import { ClientProfilePage } from "../clientprofile/clientprofile";
import * as $ from "jquery";
import "jqueryui";
import { trigger } from "@angular/animations";
import { MyApp } from "../../app/app.component";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("myElement") myElem;
  public roleId: any;
  public role: any;
  public color: any;
  public url;
  public token;
  public resp;
  count: any = {};
  one = 30;
  public loading;
  public call = false;
  cssClass: string;
  primaryColor='#44bbec';
  secondryColor = '#0163fc';
  fullWhiteLogo = "assets/imgs/smart-hrms-white.png";
  myApp: any;
  
  // sinchClient: any;
  public currentEvents: any;
  public colorCode: any;
  constructor(public navCtrl: NavController, public events: Events, injector: Injector, private nativePageTransitions: NativePageTransitions, private alertCtrl: AlertController, private oneSignal: OneSignal, public http: HTTP, public statusBar: StatusBar, public apiservice: ApiService, public referenceservice: ReferenceService, public popoverCtrl: PopoverController, ) {
    localStorage.setItem("primary_color",this.primaryColor);
    localStorage.setItem("secondry_color",this.secondryColor);
    localStorage.setItem("black_logo", "assets/imgs/logo.png");
    localStorage.setItem('user_id',"1");
    this.fullWhiteLogo =this.fullWhiteLogo;
    this.primaryColor = localStorage.getItem("primary_color");
    this.secondryColor = localStorage.getItem("secondry_color");

    this.color = localStorage.getItem("colorCode");
  }

  ionViewDidLoad() {
    this.applyClassBySelection("zoomIn");
  }
  ionViewWillEnter() {

  }

  getstyle() {
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  }
  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }
  getFontstyle() {
    return { color: this.secondryColor };
  }

  openInvoices() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0
      // fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(InvoiceListPage);
  }
  openEstimates() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0
      // fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(EstimatesListPage);
  }

  openClient() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0
      // fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(ClientsPage);
  }
  openEmployee() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      // slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0
      // fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(EmployeelistPage);
  }

  openTask() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(SelectProjectPage);
  }
  openProject() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(ProjectlistPage);
  }

 
  openPayroll() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0
      // fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(EmployeesalaryPage);
  }
  openAttedance() {
    let options: NativeTransitionOptions = {
      direction: "right",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0
      // fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(AttendancePage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(HomePopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      if (data == "profile") {
          this.navCtrl.push(ProfilePage);
      } else if (data == "setting") {
        this.navCtrl.push(SettingsPage);
      } else if (data == "logout") {
        let alert = this.referenceservice.confirmAlert(
          "Confirm",
          "Are you sure want to logout?"
        );
        alert.present();
        alert.onDidDismiss(data => {
          if (data) {
            localStorage.clear();
            localStorage.setItem("colorCode", this.color);
            this.navCtrl.setRoot(LoginPage);
          }
        });
      }
    });
  }

  logout() {
    let alert = this.referenceservice.confirmAlert(
      "Confirm",
      "Are you sure want to logout?"
    );
    alert.present();
    alert.onDidDismiss(data => {
      if (data) {
        localStorage.clear();
        localStorage.setItem("colorCode", this.color);
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }
  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  openNotification() {
    this.navCtrl.push(NotificationPage);
  }
}

@Component({
  template: `
    <ion-list class="popover-list">
      <button ion-item (click)="openMyprofile()">My Profile</button>
      <button ion-item (click)="openSettings()">Settings</button>
      <button ion-item (click)="logout()">Logout</button>
    </ion-list>
  `
})
export class HomePopoverPage {
  public employee;
  public roleId: any;
  public role: any;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public navCtrl: NavController
  ) {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
  }

  openMyprofile() {
    var action = "profile";
    this.viewCtrl.dismiss(action);
  }

  openSettings() {
    var action = "setting";
    this.viewCtrl.dismiss(action);
  }

  logout() {
    var action = "logout";
    this.viewCtrl.dismiss(action);
  }
}
