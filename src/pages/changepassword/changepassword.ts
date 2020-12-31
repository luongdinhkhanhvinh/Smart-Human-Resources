import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';
import { ApiService } from '../../providers/apiServices';
import { ReferenceService } from '../../providers/referenceService';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-changepassword',
    templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
    public loading;
    public url;
    private passwordForm: FormGroup;
    public token;
    public current_password1 = false;
    public confirm_password1 = false;
    public new_password1 = false;
    public primaryColor: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private alertCtrl: AlertController, private apiService: ApiService, private referenceService: ReferenceService, private http: HTTP) {
        this.passwordForm = fb.group({
            'current_password': ['', [Validators.required, ]],
            'new_password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), ]],
            'confirm_password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), ]],
        });
        this.primaryColor = localStorage.getItem('primary_color');
    }

    ionViewDidLoad() {
    };

    getHeaderStyle() {
        return { 'background': this.primaryColor }
    };

    changePassword() {
        this.referenceService.basicAlert("Success", 'Password updated successfully');
        this.navCtrl.setRoot(HomePage);
    };

  
}
