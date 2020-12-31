import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  MenuController,
  Events
} from "ionic-angular";
import { HomePage } from "../home/home";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { ForgotpasswordPage } from "../forgotpassword/forgotpassword";
import { HTTP } from "@ionic-native/http";
import { ApiService } from "../../providers/apiServices";
import { ReferenceService } from "../../providers/referenceService";
import { StatusBar } from "@ionic-native/status-bar";
import { OneSignal } from "@ionic-native/onesignal";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  url: any;
  host: any;
  loading: any;
  public username1 = false;
  public password1 = false;
  private loginForm: FormGroup;
  public primaryColor: any;
  public secondryColor: any;
  blackLogo: any;
  device_id: any;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private oneSignal: OneSignal,
    public events: Events,
    private fb: FormBuilder,
    public statusBar: StatusBar,
    private referenceservice: ReferenceService,
    private apiservice: ApiService,
    public navParams: NavParams,
    private http: HTTP,
    private loadingCtrl: LoadingController
  ) {
    this.loginForm = fb.group({
      username: ["", [Validators.required,]],
      password: ["", [Validators.required,]],
      device_id: ["", []]
    });
    this.primaryColor = '#44bbec';
    this.secondryColor = '#0163fc';
    this.blackLogo = "assets/imgs/new-hrms-black.png";
    localStorage.setItem("primary_color", '#44bbec');
    localStorage.setItem("secondry_color", '#0163fc');
    localStorage.setItem("black_logo", "assets/imgs/logo.png");
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString(this.primaryColor);
    this.primaryColor = localStorage.getItem("primary_color");
    this.blackLogo = "assets/imgs/smarthrlogo.png";
    this.menuCtrl.swipeEnable(false);
  }
  ionViewWillEnter() {
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  login() {
    localStorage.setItem("loginStatus", "true");
    localStorage.setItem("role", "admin");
    localStorage.setItem("role_id", "1");
    localStorage.setItem("fullname", "Admin");
    localStorage.setItem("user_id", '1');
    localStorage.setItem("currency", 'INR');
    this.navCtrl.setRoot(HomePage);
  }
  openForgotPassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }
}
