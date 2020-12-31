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
  FormControl,
  FormArray
} from "@angular/forms";
import { EstimatesPage } from "../estimates/estimates";
import { CreateEstimatePage } from "../create-estimate/createestimate";
import { DataService } from "../../providers/JsonService";

/**
 * Generated class for the EmployeesalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-estimateslist",
  templateUrl: "estimateslist.html"
})
export class EstimatesListPage {
  @ViewChild(Content) content: Content;
  public role: any;
  cssClass: any;
  public roleId: any;
  public primaryColor: any;
  public estimatesList: any;
  public loading: any;
  public url: any;
  public token: any;
  public resp: any;
  pageNumber = 1;
  page = false;
  noData = false;
  time = 0;

  constructor(
    public navCtrl: NavController,
    public referenceservice: ReferenceService,
    public modalCtrl: ModalController,
    public apiService: ApiService,
    public dataService : DataService,
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
    this.estimatesList = this.dataService.estimateList;
    this.estimatesList.sort((a, b) => a.estimate_id - b.estimate_id)
    this.estimatesList.forEach(element => {
      this.time = this.time + 0.2;
      element.time = this.time;
      element.converted_amount = '$'+element.amount;
    });
  }
  

  openEstimate(estimate) {
    this.cssClass = "";
    this.navCtrl.push(EstimatesPage, {
      estimate: estimate
    });
  }
  // editSalary(payslip) {
  //   this.navCtrl.push(EditSalaryPage, {
  //     payslip: payslip
  //   })
  // };

  addEstimate() {
    this.cssClass = "";
    this.navCtrl.push(CreateEstimatePage);
  }

  generatePayslip(payslip) {
    this.navCtrl.push(PayslipPage, {
      payslip: payslip
    });
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  openModal() {
    this.cssClass = "";
    let modal = this.modalCtrl.create(EstimatesFilterPage);
    modal.onDidDismiss(data => {
      if (data != undefined) {
        if (data == "close") {
          this.ionViewWillEnter();
          this.content.scrollToTop();
        } else {
        }
      }
    });
    modal.present();
  }

  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
  editEstimate(estimate) {
    this.cssClass = "";
    this.navCtrl.push(EstimatesEditPage, {
      estimate: estimate
    });
  }

  deleteEstimate(estimate) {
    this.cssClass = "";
    let alert = this.referenceservice.confirmAlert(
      "Confirm Delete",
      "Do you want to continue to delete this estimate"
    );
    alert.present();
    alert.onDidDismiss(data => {
      if (data) {
        this.referenceservice.basicAlert(
          "Success",
          "Estimate Removed successfully"
        );
      }
    });
  }
}

// ************************************************** FILTER *************************************

@Component({
  selector: "page-estimateslist",
  templateUrl: "estimateslistfilter.html"
})
export class EstimatesFilterPage {
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
      status: "Pending"
    },
    {
      status: "Accepted"
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

// ************************************************** Edit *************************************

@Component({
  selector: "page-estimateslist",
  templateUrl: "estimateslistEdit.html"
})
export class EstimatesEditPage {
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
  estimateForm: FormGroup;
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
  estimate: any = {};
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
  
    this.primaryColor = localStorage.getItem("primary_color");
    
  }

  ionViewWillEnter() {
   
  }

  getHeaderStyle() {
    return { background: this.primaryColor };
  }

 

  moveFocus(nextElement) {
    nextElement.setFocus();
  }
 
  addEmployee() {
    this.referenceService.basicAlert(
     "Success",
      "Estimate Edited successfully"
    );
    this.navCtrl.pop();
   
  }
}
