import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  Content,
  ViewController,
  PopoverController
} from "ionic-angular";
import { ReferenceService } from "../../providers/referenceService";
import { ApiService } from "../../providers/apiServices";
import { HTTP } from "@ionic-native/http";
import { LoginPage } from "../login/login";
import { AddSalaryPage } from "../add-salary/add-salary";
import { PayslipPage } from "../payslip/payslip";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";
import { InvoicePage } from "../invoice/invoice";
import { CreateInvoicePage } from "../create-invoice/createinvoice";
import { DataService } from "../../providers/JsonService";

/**
 * Generated class for the EmployeesalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-invoicelist",
  templateUrl: "invoicelist.html"
})
export class InvoiceListPage {
  @ViewChild(Content) content: Content;
  public role: any;
  public roleId: any;
  public primaryColor: any;
  public invoiceList: any;
  public loading: any;
  public url: any;
  public token: any;
  public invoicesList: any;
  public resp: any;
  pageNumber = 1;
  time = 0;
  page = false;
  noData = false;
  cssClass: string;
  constructor(
    public navCtrl: NavController,
    public referenceservice: ReferenceService,
    public modalCtrl: ModalController,
    public apiService: ApiService,
    public dataService: DataService,
    public http: HTTP,
    public navParams: NavParams
  ) {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    this.primaryColor = localStorage.getItem("primary_color");
  }

  ionViewDidLoad() {
    this.applyClassBySelection("bounceInRight");
  }
  ionViewWillEnter() {
   
    this.invoicesList = this.dataService.invoiceList;

    this.invoicesList.sort((a, b) => a.invoice_id - b.invoice_id);
    this.invoicesList.forEach(element => {
      this.time = this.time + 0.2;
      element.time = this.time;
      element.converted_total_cost = '$' + element.total_cost;
      element.converted_payment_made = '$' + element.payment_made;

    });
   
  };

  
  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
 

  openInvoice(invoice) {
    this.cssClass = "";
    this.navCtrl.push(InvoicePage, {
      invoice: invoice
    });
  }

  editInvoice(invoice) {
    this.cssClass = "";
    this.navCtrl.push(EditInvoicePage, {
      invoice: invoice
    });
  }

  addInvoice() {
    this.cssClass = "";
    this.navCtrl.push(CreateInvoicePage);
  }
  generatePayslip(payslip) {
    this.cssClass = "";
    this.navCtrl.push(PayslipPage, {
      payslip: payslip
    });
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }
  deleteInvoice(invoice) {
    this.cssClass = "";
    let alert = this.referenceservice.confirmAlert(
      "Confirm Delete",
      "Do you want to continue to delete this invoice"
    );
    alert.present();
    alert.onDidDismiss(data => {
      if (data) {
        this.referenceservice.basicAlert(
          "success",
          "Invoice Removed successfully"
        );
      }
    });
  }

  openModal() {
    this.cssClass = "";
    let modal = this.modalCtrl.create(InvoiceFilterPage);
    modal.onDidDismiss(data => {
      if (data != undefined) {
        if (data == "close") {
          this.ionViewWillEnter();
          this.content.scrollToTop();
        } 
      }
    });
    modal.present();
  }


}

// **************************************************Edit *************************************

@Component({
  selector: "page-invoicelist",
  templateUrl: "invoicelistEdit.html"
})
export class EditInvoicePage {
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
  invoiceFrom: FormGroup;
  item: any = {
    item_name: "",
    item_desc: "",
    unit_cost: "",
    item_order: "",
    tax_rate: "",
    item_tax_total: "",
    quantity: "",
    total_cost: "",
    invoice_id: "",
    date_saved: "",
    item_id: ""
  };
  invoice: any = {};
  currentTime: any;
  year: any;
  day: any;
  month: any;
  tax1 = 0;
  tax2 = 0;
  discount = 0;
  taxTotal: any;
  subtotal = 0;
  public primaryColor: any;
  public fixed = false;
  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public navParams: NavParams,
    public referenceService: ReferenceService,
    public apiService: ApiService,
    public http: HTTP
  ) {
    
    this.invoice = this.navParams.get("invoice");
    
    this.primaryColor = localStorage.getItem("primary_color");

  }

  ionViewWillEnter() {
    
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  addEmployee() {
    this.referenceService.basicAlert(
      "Scucces",
      "Invoice Edited successfully"
    );
    this.navCtrl.pop();
  }
}

// ************************************************** FILTER *************************************

@Component({
  selector: "page-invoicelist",
  templateUrl: "invoicelistfilter.html"
})
export class InvoiceFilterPage {
  public filterData: any = {};
  public loading;
  public url;
  public token;
  public clients;
  public designation;
  public department_id;
  public designation_id;
  public resp;
  public primaryColor: any;
  status: any = [
    {
      status: "Paid"
    },
    {
      status: "Unpaid"
    },
    {
      status: "Partial"
    }
  ];
  constructor(
    public viewCtrl: ViewController,
    public apiService: ApiService,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    private referenceservice: ReferenceService,
    public navParams: NavParams,
    private http: HTTP
  ) {
    this.primaryColor = localStorage.getItem("primary_color");
  }
  ionViewDidEnter() { }

  moveFocus(nextElement) {
    nextElement.setFocus();
  }

  filter() {
    this.viewCtrl.dismiss("close");
  }
  closeFilter() {
    this.viewCtrl.dismiss("close");
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }
}
