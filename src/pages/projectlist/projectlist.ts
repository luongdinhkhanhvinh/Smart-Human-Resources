import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { ReferenceService } from '../../providers/referenceService';
import { Content } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProjectviewPage } from '../projectview/projectview';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { CreateProjectPage } from '../create-project/createproject';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as $ from 'jquery';
import { trigger } from '@angular/animations';
import 'jqueryui';
import { DataService } from '../../providers/JsonService';



/**
 * Generated class for the projectList Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-projectlist',
  templateUrl: 'projectlist.html',
})
export class ProjectlistPage {
  @ViewChild(Content) content: Content;
  bgColor = '3A57C4';
  token: any;
  url: any;
  loading: any;
  projectList: any;
  pageNumber = 1;
  resp: any;
  color: any;
  public opentasks;
  public completedtasks;
  page = false;
  public role: any;
  time = 0;
  public roleId: any;
  public noData = false;
  cssClass: string;
  public primaryColor: any;
  secondryColor: any;
  constructor(public navCtrl: NavController, public dataService: DataService, public nativePageTransitions: NativePageTransitions, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.color = localStorage.getItem('colorCode');
    this.primaryColor = localStorage.getItem('primary_color')
    this.secondryColor = localStorage.getItem('secondry_color')
  }

  ionViewDidLoad() {
    this.applyClassBySelection('bounceInLeft');
  }
  

  ionViewWillEnter() {
    this.page = false;
    this.projectList = this.dataService.project_list;
    this.projectList.forEach((value, key) => {
      value.time = this.time;
      this.time = this.time + 0.2;
      this.projectList[key].opentasks = value.tasks_open.length;
      this.projectList[key].completedtasks = value.tasks_completed.length;
    });
  };

  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }
  getFontstyle() {
    return { color: this.secondryColor };
  }

  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  openModal() {
    this.cssClass = '';
    let modal = this.modalCtrl.create(ProjectFilterPage);
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

  getHeaderStyle() {
    return { 'background': this.primaryColor }
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

    this.nativePageTransitions.flip(options)
  }

  openProject(project) {
    this.cssClass = '';
    this.navCtrl.push(ProjectviewPage, {
      project: project,
    });
  };

  createProject() {
    this.cssClass = '';
    this.navCtrl.push(CreateProjectPage);
  }

  edit(project) {
    this.cssClass = '';
    this.navCtrl.push(ProjectEditPage, {
      project: project
    })
  }

 

  delete(project) {
    this.cssClass = '';
    let alert = this.referenceservice.confirmAlert("Confirm Delete", "Do you want to continue to delete this project");
    alert.present();
    alert.onDidDismiss((data) => {
      if (data) {
        this.referenceservice.basicAlert(this.resp.message, 'Project Removed successfully');
      }
    });
  }
}




// ******************************************** EDIT PROJECT **********************************************




@Component({
  selector: 'page-projectlist',
  templateUrl: 'projectEdit.html',
})
export class ProjectEditPage {

  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public projectDetails: any = {};
  public projectData: any = {};
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public phone1 = false;
  projectForm: FormGroup;
  public primaryColor: any;
  public fixed = false;
  projectMember = [];

  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.projectForm = fb.group({
      'project_id': ['', [Validators.required]],
      'project_code': ['', [Validators.required]],
      'project_title': ['', [Validators.required]],
      'client': ['', [Validators.required]],
      'assign_lead': ['', Validators.compose([Validators.required])],
      'assign_to': ['', Validators.compose([Validators.required])],
      'fixed_rate': ['', [Validators.required]],
      'start_date': ['', [Validators.required]],
      'due_date': ['', [Validators.required]],
      'hourly_rate': ['', [Validators.required]],
      'fixed_price': ['', [Validators.required]],
      'estimate_hours': ['', [Validators.required]],
      'description': ['', [Validators.required]],
    });
    this.primaryColor = localStorage.getItem('primary_color');
    this.projectDetails = this.navParams.get('project');
    if (this.projectDetails.overviews.fixed_rate == 'No') {
      this.fixed = false;
    }
    else if (this.projectDetails.overviews.fixed_rate == 'Yes') {
      this.fixed = true;
    }
    this.projectDetails.overviews.project_team_members.forEach(element => {
      this.projectMember.push(element.user_id);
    });

  }

  ionViewWillEnter() {
    

  };

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  moveFocus(nextElement) {
    nextElement.setFocus();
  };

  addEmployee() {
    this.referenceService.basicAlert("Success", 'Project created successfully');
    this.navCtrl.pop();
    
  };
}





// ************************************************** FILTER *************************************



@Component({
  selector: 'page-projectlist',
  templateUrl: 'project_filter.html',
})
export class ProjectFilterPage {
  public filterData: any = {};
  public loading;
  public url;
  public token;
  public clients: any = {};
  public designation;
  public department_id;
  public designation_id;
  public resp;
  public primaryColor: any;
  constructor(public viewCtrl: ViewController, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
    
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

