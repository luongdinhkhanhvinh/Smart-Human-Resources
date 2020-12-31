import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { ReferenceService } from '../../providers/referenceService';
import { AddemployeePage } from '../addemployee/addemployee';
import { FormGroup, Validators, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';
import { ProfilePage } from '../profile/profile';
import { Content } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the EmployeelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employeelist',
  templateUrl: 'employeelist.html',
})
export class EmployeelistPage {
  @ViewChild('myElement') myElem;
  @ViewChild(Content) content: Content;
  bgColor = '3A57C4';
  token: any;
  url: any;
  loading: any;
  employeeList: any;
  pageNumber = 1;
  resp: any;
  page = false;
  public role: any;
  public roleId: any;
  public noData = false;
  public filterData: any = {};
  cssClass: string;
  public primaryColor: any;
  constructor(public navCtrl: NavController, public dataService: DataService, private nativePageTransitions: NativePageTransitions, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewDidLoad() {

    this.applyClassBySelection('rotateIn');
  }

  ionViewWillEnter() {
    this.employeeList = this.dataService.employee_list;
  };

  openModal() {
    this.cssClass = '';
    let modal = this.modalCtrl.create(FilterModalPage);
    modal.onDidDismiss((data) => {
      if (data != undefined) {
        if (data == "close") {
          this.ionViewWillEnter();
          this.content.scrollToTop();
        }
        else {
        }
      }
    });
    modal.present();
  };

  ionViewWillLeave() {

    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
      slowdownfactor: 3,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
    };

    this.nativePageTransitions.flip(options);

  }
  openProfile(myEvent, emp) {
    this.cssClass = '';
    if (myEvent.target.className == "fa fa-ellipsis-v employee-more") {
      this.presentPopover(myEvent, emp);
    }
    else {
      this.navCtrl.push(ProfilePage, {
        user: emp.user_id
      });
    }
  };
  presentPopover(myEvent, employee) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      this.cssClass = '';
      if (data == "delete") {
        let alert = this.referenceservice.confirmAlert("Confirm Delete", "Do you want to continue to delete this employee");
        alert.present();
        alert.onDidDismiss((data) => {
          if (data) {
            this.referenceservice.basicAlert("Success", 'Employee Removed successfully');
          }
        });
      }
      if (data == "edit") {
        this.navCtrl.push(EditEmployeePage, {
          employee: employee,
        });
      }
    })
  };
  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }
 

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  addEmployee() {
    this.cssClass = '';
    this.navCtrl.push(AddemployeePage);
  }
}



/********************************************************** Popover *****************************/
@Component({
  template: `
    <ion-list class="popover-list">
      <button ion-item (click)="close('edit')">Edit</button>
      <button ion-item (click)="close('delete')">Delete</button>
    </ion-list>
  `
})
export class PopoverPage {
  public employee;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {
  }

  close(action) {
    this.viewCtrl.dismiss(action);
  }
}

/********************************************************** Filter *****************************/

@Component({
  selector: 'page-employeelist',
  templateUrl: 'employee_filter.html',
})
export class FilterModalPage {
  public filterData: any = {};
  public loading;
  public url;
  public token;
  public departments;
  public designation;
  public designate = false;
  public department_id;
  public designation_id;
  public resp;
  public primaryColor: any;
  constructor(public viewCtrl: ViewController, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.primaryColor = localStorage.getItem('primary_color');
  }
  ionViewDidEnter() {
  
  };

  moveFocus(nextElement) {
    nextElement.setFocus();
  };

 

  dismiss() {
    this.viewCtrl.dismiss("close");
  }
  closeFilter() {
    this.viewCtrl.dismiss("close");
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

}


/********************************************************** Edit *****************************/

@Component({
  selector: 'page-employeelist',
  templateUrl: 'employee_edit.html',
})
export class EditEmployeePage {
  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public departments;
  public designation;
  public username1 = false;
  public email1 = false;
  public phone1 = false;
  public designate = false;
  employeeForm: FormGroup;
  public employee;
  public primaryColor: any;
  public dept: any;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.employeeForm = fb.group({
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required]],
        'email': ['', [Validators.required]],
        'fullname': ['', Validators.compose([Validators.required])],
        'designation_id': ['', Validators.compose([Validators.required])],
        'department_id': ['', Validators.compose([Validators.required])],
        'phone': ['', [Validators.required,]],
        'is_teamlead': ['', Validators.compose([Validators.required])],
        'teamlead_id': ['', Validators.compose([Validators.required])],
    });
    this.employee = this.navParams.get('employee');
    this.dept = this.employee.department_id;
    // this.department();

    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
  
  };


 

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  addEmployee() {
    this.referenceService.basicAlert("Success", 'Employee Edited successfully');

    }


  isValid(field: string) {
    let formField = this.employeeForm.get(field);
    return formField.valid || formField.pristine;
  }

  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != "") {
      if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
        return { invalidName: true };
      }
    }
    else {
      this.username1 = false;
    }
  }
  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != "") {
      if (!(control.value.toLowerCase().match('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'))) {
        return { invalidEmail: true };
      }
      else {
        this.email1 = false;
      }
    }
  }
  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.match('[0-9]+'))) {
      return { invalidPhone: true };
    }
    else {
      this.phone1 = false;
    }
  }
}
