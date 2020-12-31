import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { LeaveTypesPage } from '../leave-types/leave-types';
import { CompanySettingsPage } from '../companysettings/companysetting';
import { LocalizationPage } from '../localization/localization';
import { EmailSettingsPage } from '../emailsettings/emailsettings';
import { SalarySettingsPage } from '../salarysettings/salarysettings';
import { NotificationSettingsPage } from '../notificationsettings/notificationsettings';
import { InvoiceSettingsPage } from '../invoicesetings/invoicesetings';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public primaryColor:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.primaryColor =  localStorage.getItem('primary_color')
  }

  ionViewDidLoad() {
  }
  changePassword(){
    this.navCtrl.push(ChangepasswordPage);
  };
  
  openCompanySetting(){
    this.navCtrl.push(CompanySettingsPage)
  }
  getHeaderStyle(){
    return { 'background':this.primaryColor}
  };

  openNotification(){
    this.navCtrl.push(NotificationSettingsPage);
  }
  openLeaveTypes(){
    this.navCtrl.push(LeaveTypesPage);
  }
  openLocalization(){
    this.navCtrl.push(LocalizationPage);
  }
  openEmailSetting(){
    this.navCtrl.push(EmailSettingsPage);
  }
  openSalary(){
    this.navCtrl.push(SalarySettingsPage);
  }
  openInvoice(){
    this.navCtrl.push(InvoiceSettingsPage);
  }
}
  