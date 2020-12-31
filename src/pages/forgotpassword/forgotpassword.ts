import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
/**
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  public loading;
  public url;
  public token;
  public colorCode:any;
  blackLogo:any;
  primaryColor:any;
  
  forgotpasswordForm: FormGroup
  constructor(public navCtrl: NavController,private fb: FormBuilder ,private referenceservice: ReferenceService, private apiservice: ApiService, public navParams: NavParams, private http: HTTP, private loadingCtrl: LoadingController) {
    this.forgotpasswordForm = fb.group({
      'username': [null, Validators.compose([Validators.required])]   
    });
    this.blackLogo = "assets/imgs/smarthrlogo.png";
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
  }
  backToLogin(){
    this.navCtrl.pop();
  };
  
  getHeaderStyle(){
    return { 'background': this.primaryColor}
  };

  forgotPassword() {
    this.referenceservice.basicAlert("Success",'Email sent successfully');
    this.navCtrl.pop();
  
    // this.navCtrl.setRoot(HomePage);
  }

}
