import { Component, ViewChild, Injectable } from "@angular/core";
import { Nav, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";

import { LoginPage } from "../pages/login/login";
import {
  EmployeelistPage,
  EditEmployeePage
} from "../pages/employeelist/employeelist";
import { DepartmentsPage } from "../pages/departments/departments";
import { HolidaysPage } from "../pages/holidays/holidays";
import { LeaveRequestPage } from "../pages/leave-request/leave-request";
import { DesignationsPage } from "../pages/designations/designations";
import { ProfilePage } from "../pages/profile/profile";
import { PayslipPage } from "../pages/payslip/payslip";
import { ChangepasswordPage } from "../pages/changepassword/changepassword";
import { AttendancePage } from "../pages/attendance/attendance";
import { AddemployeePage } from "../pages/addemployee/addemployee";
import { AttendanceListPage } from "../pages/attendance-list/attendance-list";
import { AttendanceDetailsPage } from "../pages/attendance-details/attendance-details";
import { HTTP } from "@ionic-native/http";
import { ReferenceService } from "../providers/referenceService";
import { ApiService } from "../providers/apiServices";
import { Network } from "../../node_modules/@ionic-native/network";
import { EmployeesalaryPage } from "../pages/employeesalary/employeesalary";
import { AddSalaryPage } from "../pages/add-salary/add-salary";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { VoiceCallPage } from "../pages/voicecall/voicecall";
import { IncomingCallPage } from "../pages/incomingcall/incomingcall";
import { VideoCallPage } from "../pages/videocall/videocall";
import { ChatPage } from "../pages/chat/chat";
import { ChatListPage } from "../pages/chat-list/chat-list";
import { ProjectlistPage } from "../pages/projectlist/projectlist";
import { ProjectviewPage } from "../pages/projectview/projectview";
import { ContactPage } from "../pages/contact/contact";
import { TaskDetailsPage } from "../pages/task-details/task-details";
import { TasksPage } from "../pages/tasks/tasks";
import { InvoicePage } from "../pages/invoice/invoice";
import { EstimatesListPage } from "../pages/estimateslist/estimateslist";
import { EstimatesPage } from "../pages/estimates/estimates";
import { InvoiceListPage } from "../pages/invoicelist/invoicelist";
import { OneSignal } from "@ionic-native/onesignal";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { TimeSheetListPage } from "../pages/timesheets/timesheetslist";
import { PaymentListPage } from "../pages/paymentlist/paymentlist";
import { ExpensesListPage } from "../pages/expenseslist/expenseslist";
import { Events } from 'ionic-angular';
import { ClientsPage } from "../pages/clients/clients";
import { SettingsPage } from "../pages/settings/settings";
import { ForgotpasswordPage } from "../pages/forgotpassword/forgotpassword";
import { CalendarViewPage } from "../pages/Calendar/calendar";
import { EmailPage } from "../pages/email/email";
import { CalendarPickerPage } from "../pages/CalendarPicker/CalendarPicker";
import { RegistrationPage } from "../pages/registration/registration";
@Injectable()
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  empMenu = false;
  pageMenu = false;
  rootPage: any;
  selectedPage: any;
  public role;
  public roleId;
  public url;
  public loading;
  public colorCode: any;
  public token: any;
  public resp: any;
  primaryColor: any;
  secondryColor: any;
  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public apiservice: ApiService,
    public statusBar: StatusBar,
    private androidPermissions: AndroidPermissions,
    private oneSignal: OneSignal,
    public localNotifications: LocalNotifications,
    private network: Network,
    public splashScreen: SplashScreen,
    private apiService: ApiService,
    private referenceService: ReferenceService,
    private http: HTTP,
    public events: Events
  ) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "employeeList", component: EmployeelistPage },
      { title: "department", component: DepartmentsPage },
      { title: "holidays", component: HolidaysPage },
      { title: "leave", component: LeaveRequestPage },
      { title: "designations", component: DesignationsPage },
      { title: "profile", component: ProfilePage },
      { title: "login", component: LoginPage },
      { title: "payslip", component: PayslipPage },
      { title: "attendance", component: AttendancePage },
      { title: "attendancelist", component: AttendanceListPage },
      { title: "attendancedetail", component: AttendanceDetailsPage },
      { title: "empSalary", component: EmployeesalaryPage },
      { title: "contactlist", component: ContactPage },
      { title: "chatlist", component: ChatListPage },
      { title: "estimateslist", component: EstimatesListPage },
      { title: "invoicelist", component: InvoiceListPage },
      { title: "timesheet", component: TimeSheetListPage },
      { title: "paymentlist", component: PaymentListPage },
      { title: "expenseslist", component: ExpensesListPage },
      { title: "project", component: ProjectlistPage },
      { title: "client", component: ClientsPage },
      { title: "voicecall", component: VoiceCallPage },
      { title: "videocall", component: VideoCallPage },
      { title: "incomingcall", component: IncomingCallPage },
      { title: "task", component: TasksPage },
      { title: "setting", component: SettingsPage },
      { title: "email", component: EmailPage },
      { title: "forgot", component: ForgotpasswordPage },
      { title: "calendar", component: CalendarPickerPage },
      { title: "event", component: CalendarViewPage },
      { title: "register", component: RegistrationPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need
      if (this.splashScreen) {
        this.splashScreen.hide();
      }
      this.rootPage = HomePage; // user can user this.nav.setRoot(LoginPage);
    });
  }

  getstyle() {
    this.primaryColor = localStorage.getItem("primary_color");
    this.secondryColor = localStorage.getItem("secondry_color");
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  };

  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  };

  getHeaderStyle() {
    return { background: this.primaryColor };
  };
  
  openPage(page) {
    this.selectedPage = "";
    this.pages.forEach(element => {
      if (element.title == page) {
        if (page != "Home") {
          this.nav.push(element.component);
        } else {
          this.nav.setRoot(element.component);
        }
      }
    });
  };

  openSub(page) {
    if (this.selectedPage == page) {
      this.selectedPage = "";
    } else {
      this.selectedPage = page;
    }
  }
}
