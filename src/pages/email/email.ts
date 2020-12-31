import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-email',
  templateUrl: 'email.html'
})
export class EmailPage {
  public primaryColor:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.primaryColor = localStorage.getItem('primary_color');
  }
  getHeaderStyle(){
    return { 'background':   this.primaryColor}
  };
  create(){
    this.navCtrl.push(CreateMailPage);
  }
  openmail(){
    this.navCtrl.push(MailListPage)
  }
  
}

@Component({
  selector: 'page-email',
  templateUrl: 'createmail.html'
})
export class CreateMailPage {
  public primaryColor:any;
  mailFrom: FormGroup;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.primaryColor = localStorage.getItem('primary_color');
    this.mailFrom = fb.group({
      'to': ['', [Validators.required]],
      'cc': ['', [Validators.required]],
      'bcc': ['', [Validators.required]],
      'subject': ['', [Validators.required]],
      'message': ['', [Validators.required]],
    });
  }
  getHeaderStyle(){
    return { 'background':   this.primaryColor}
  };
  
}


@Component({
  selector: 'page-email',
  templateUrl: 'mailview.html'
})
export class MailViewPage {
  public primaryColor:any;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.primaryColor = localStorage.getItem('primary_color');
  
  }
  getHeaderStyle(){
    return { 'background':   this.primaryColor}
  };
  
}


@Component({
  selector: 'page-email',
  templateUrl: 'emailList.html'
})
export class MailListPage {
  public primaryColor:any;
  mailFrom: FormGroup;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.primaryColor = localStorage.getItem('primary_color');
   
  }
  getHeaderStyle(){
    return { 'background':   this.primaryColor}
  };
  openChat(){
    this.navCtrl.push(MailViewPage);
  }
  
}

