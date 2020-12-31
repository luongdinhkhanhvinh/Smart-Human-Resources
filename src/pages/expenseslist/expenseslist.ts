import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content, ViewController } from 'ionic-angular';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { AddSalaryPage } from '../add-salary/add-salary';
import { PayslipPage } from '../payslip/payslip';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvoicePage } from '../invoice/invoice';
import { CreateInvoicePage } from '../create-invoice/createinvoice';
import { CreateExpensesPage } from '../create-expenses/createexpenses';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the EmployeesalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-expenseslist',
  templateUrl: 'expenseslist.html',
})
export class ExpensesListPage {
  @ViewChild(Content) content: Content;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  public invoiceList: any;
  public loading: any;
  public url: any;
  public token: any;
  public expenseList: any;
  public resp: any;
  pageNumber = 1;
  time = 0;
  page = false;
  noData = false;
  cssClass: string;
  constructor(public navCtrl: NavController,public dataService:DataService, public referenceservice: ReferenceService, public modalCtrl: ModalController, public apiService: ApiService, public http: HTTP, public navParams: NavParams) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewDidLoad() {
    this.applyClassBySelection('bounceInRight');
  }
  ionViewWillEnter() {
    this.expenseList = this.dataService.expense_list;
    this.expenseList.forEach(element => {
      this.time = this.time + 0.2;
      element.time = this.time;
    });
   
  };


  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  editExpense(expense) {
    this.cssClass = '';
    this.time = 0;
    this.navCtrl.push(ExpensesEditPage, {
      expense: expense
    });

  }
  openexpense(expense) {
    this.cssClass = '';
    this.time = 0;
    this.navCtrl.push(ExpenseDetailsPage, {
      expense: expense
    });
  };

  addExpenses() {
    this.cssClass = '';
    this.time = 0;
    this.navCtrl.push(CreateExpensesPage);
  }


  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
  delete(expense) {
    this.cssClass = '';
    this.time = 0;
    let alert = this.referenceservice.confirmAlert("Confirm Delete", "Do you want to continue to delete this Expense");
    alert.present();
    alert.onDidDismiss((data) => {
      if (data) {
        this.referenceservice.basicAlert("Success", 'Expense Removed successfully');
      }
    });
  }
};



@Component({
  selector: 'page-expenseslist',
  templateUrl: 'expenseslistEdit.html',
})
export class ExpensesEditPage {

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
  expensesForm: FormGroup;
  category: any;
  projects: any;
  currentTime: any;
  year: any;
  day: any;
  month: any;
  public primaryColor: any;
  public client = false;
  bill = false;
  invo = false;
  expense: any = {};
  constructor(public navCtrl: NavController,public dataService:DataService, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.expensesForm = fb.group({
      'amount': ['', [Validators.required]],
      'project': ['', [Validators.required]],
      'client': ['', [Validators.required]],
      'expense_date': ['', [Validators.required]],
      'category': ['', [Validators.required]],
      'billable': ['', [Validators.required]],
      'extra_fee': ['', [Validators.required]],
      'show_client': ['', [Validators.required]],
      'invoiced': ['', [Validators.required]],
      'notes': ['', [Validators.required]],
      'receipt': ['', [Validators.required]],
    });
    this.expense = this.navParams.get('expense');

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
    if (this.expense.billable == 1) {
      this.expense.billable = true;
    }
    else {
      this.expense.billable = false;
    }
    if (this.expense.invoiced == 1) {
      this.expense.invoiced = true;
    }
    else {
      this.expense.invoiced = false;
    }
    if (this.expense.show_client == "Yes") {
      this.expense.show_client = true;
    }
    else {
      this.expense.show_client = false;
    }
    this.projectDetails.expense_categories = this.dataService.expense_categories;
    this.projectDetails.projects = this.dataService.select_project;
  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  moveFocus(nextElement) {
    nextElement.setFocus();
  };


  addEmployee() {
    this.referenceService.basicAlert("Success", 'Expense edited successfully');
    this.navCtrl.pop();
  };
}


// ************************************************** Details *************************************



@Component({
  selector: 'page-expenseslist',
  templateUrl: 'expenseDetail.html',
})
export class ExpenseDetailsPage {
  public filterData: any = {};
  public loading;
  public url;
  public token;
  public resp;
  blackLogo: any;
  public expense: any;
  public primaryColor: any;
  constructor(public viewCtrl: ViewController, public apiService: ApiService, public modalCtrl: ModalController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.primaryColor = localStorage.getItem('primary_color');
    this.expense = this.navParams.get('expense');
    this.blackLogo = localStorage.getItem('black_logo');
  }
  ionViewDidEnter() {

  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

}