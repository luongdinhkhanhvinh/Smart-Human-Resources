import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { Validators, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the AddemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-createinvoice',
  templateUrl: 'createinvoice.html',
})
export class CreateInvoicePage {

  public selected = [];
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public projectDetails: any = {};
  public designation;
  public designate = false;
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public totalCost = 0;
  public phone1 = false;
  tax1 = 0;
  tax2 = 0;
  discount = 0;
  invoiceFrom: FormGroup;
  item: any = {
    item_name: '',
    item_desc: '',
    unit_cost: '',
    item_order: '',
    tax_rate: '',
    item_tax_total: '',
    quantity: '',
    total_cost: ''
  }
  taxTotal: any;
  subtotal = 0;
  discountTotal: any;
  currentTime: any;
  year: any;
  day: any;
  month: any;
  public primaryColor: any;
  public fixed = false;
  constructor(public navCtrl: NavController,public dataService:DataService, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.invoiceFrom = fb.group({
      'reference_no': ['', [Validators.required]],
      'client': ['', [Validators.required]],
      'tax': [0, [Validators.required]],
      'tax2': [0, [Validators.required]],
      'due_date': ['', [Validators.required]],
      'discount': [0, [Validators.required]],
      'extra_fee': ['', [Validators.required]],
      'currency': ['', [Validators.required]],
      'allow_stripe': ['', [Validators.required]],
      'notes': ['', [Validators.required]],
      'item_details': fb.array([this.itemForm()]),
    });
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate();
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
    this.projectDetails.client = this.dataService.client_list;
    this.projectDetails.saved_item = this.dataService.saved_item;
      };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  itemForm() {
    return this.fb.group({
      'item_name': new FormControl('', Validators.required),
      'item_desc': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'unit_cost': new FormControl('', Validators.required),
      'item_order': new FormControl('', Validators.required),
      'tax_rate': new FormControl('', Validators.required),
      'item_tax_total': new FormControl('', Validators.required),
      'total_cost': new FormControl('', Validators.required),
    })
  }

  change(i) {
    this.projectDetails.saved_item.forEach(element => {
      if (element.item_name == this.selected[i]) {
        this.item.item_name = element.item_name;
        this.item.item_desc = element.item_desc;
        this.item.quantity = element.quantity;
        this.item.total_cost = element.total_cost;
        this.item.tax_rate = element.item_tax_rate;
        this.item.unit_cost = element.unit_cost;
        this.item.item_order = i;
        this.item.item_tax_total = element.item_tax_total;
        var arrayControl = <FormArray>this.invoiceFrom.controls.item_details;
        var arr = arrayControl.controls[i];
        arr.patchValue(this.item);
      }
    });
    this.totalCostCalc();
  }
  addItem(): void {
    const control = <FormArray>this.invoiceFrom.controls.item_details;
    control.push(this.itemForm());
  };

  moveFocus(nextElement) {
    nextElement.setFocus();
  };
  qtyChange(i) {
    this.subtotal = 0;
    this.invoiceFrom.value.item_details.forEach((element, key) => {
      if (key == i) {
        this.item = element;
        this.item.total_cost = this.item.quantity * this.item.unit_cost;
        this.item.item_tax_total = Math.ceil(this.item.total_cost * (parseInt(this.item.tax_rate) * 0.01));
        this.item.total_cost = this.item.total_cost + this.item.item_tax_total;
        var arrayControl = <FormArray>this.invoiceFrom.controls.item_details;
        var arr = arrayControl.controls[i];
        arr.patchValue(this.item);
      }
    });
    this.totalCostCalc();
  };

  totalCostCalc() {
    this.subtotal = 0;
    this.invoiceFrom.value.item_details.forEach(element => {
      this.subtotal = this.subtotal + parseInt(element.total_cost);
      this.tax1 = Math.ceil(this.subtotal * (parseInt(this.invoiceFrom.value.tax) * 0.01));
      this.tax2 = Math.ceil(this.subtotal * (parseInt(this.invoiceFrom.value.tax2) * 0.01));
      this.discount = Math.ceil(this.subtotal * (parseInt(this.invoiceFrom.value.discount) * 0.01));
      this.totalCost = this.subtotal + this.tax1 + this.tax2;
      this.totalCost = this.totalCost - this.discount;
    });
    // this.taxCalc();
  }

  addEmployee() {
    this.referenceService.basicAlert("Success", 'Invoice created successfully');
    this.navCtrl.pop();

    }

    //   else if (!this.projectForm.get('fullname').valid) {
    //     if (this.projectForm.get('fullname').value == '') {
    //       this.referenceService.basicAlert('Smart HRMS', "Full name must be filled");
    //     }
    //     else {
    //       this.referenceService.basicAlert('Smart HRMS', "User name should not contain any special characters and numbers.");
    //     }
    //   }
    //   else if (!this.projectForm.get('username').valid) {
    //     if (this.projectForm.get('username').value == '') {
    //       this.referenceService.basicAlert('Smart HRMS', "User name must be filled");
    //     }
    //     else {
    //       this.referenceService.basicAlert('Smart HRMS', "User name should not contain any special characters and numbers.");
    //     }
    //   }
    //   else if (!this.projectForm.get('phone').valid) {
    //     if (this.projectForm.get('phone').value == '') {
    //       this.referenceService.basicAlert('Smart HRMS', "Phone must be filled.");
    //     }
    //     else {
    //       this.referenceService.basicAlert('Smart HRMS', "Phone number must be in 10-15 characters long.");
    //     }
    //   }
    //   else if (!this.projectForm.get('email').valid) {
    //     if (this.projectForm.get('email').value == '') {
    //       this.referenceService.basicAlert('Smart HRMS', "Email must be filled.");
    //     }
    //     else {
    //       this.referenceService.basicAlert('Smart HRMS', "Email should be in email format.");
    //     }
    //   }
    //   else if (!this.projectForm.get('password').valid) {
    //     if (this.projectForm.get('password').value == '') {
    //       this.referenceService.basicAlert('Smart HRMS', "Password must be filled.");
    //     }
    //     else {
    //       this.referenceService.basicAlert('Smart HRMS', "Password must be atleast 8 characters long. To make it stronger,use upper and lower case letters,numbers and symbols");
    //     }
    //   }
    // }
  

  isValid(field: string) {
    let formField = this.invoiceFrom.get(field);
    return formField.valid || formField.pristine;
  };

  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return { invalidName: true };
    }
    else {
      this.username1 = false;
    }
  };

  passwordValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')) {
      return { invalidPassword: true };
    }
    else {
      this.password1 = false;
    }
  };

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.toLowerCase().match('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'))) {
      return { invalidEmail: true };
    }
    else {
      this.email1 = false;
    }
  };

  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.match('[0-9]+'))) {
      return { invalidPhone: true };
    }
    else {
      this.phone1 = false;
    }
  };
}


