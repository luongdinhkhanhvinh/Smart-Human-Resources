import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { ReferenceService } from '../../providers/referenceService';
import { Content } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



/**
 * Generated class for the EmployeelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-task-details',
  templateUrl: 'task-details.html',
})
export class TaskDetailsPage {
  @ViewChild(Content) content: Content;

  token: any;
  url: any;
  loading: any;
  resp: any;
  color: any;
  public role: any;
  public roleId: any;
  public noData = false;
  public primaryColor: any;
  public task: any;
  public project: any;
  files = false;
  secondryColor: any;
  constructor(public navCtrl: NavController, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.color = localStorage.getItem('colorCode');
    this.primaryColor = localStorage.getItem('primary_color');
    this.task = this.navParams.get('task');
    this.project = this.navParams.get('project');
    this.secondryColor = localStorage.getItem('secondry_color')

  }

  ionViewWillEnter() {
    this.task = this.navParams.get('task');
    this.project = this.navParams.get('project');
    if (this.task.task_files.length == 0) {
      this.files = false;
    }
    else {
      this.files = true;
    }
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  setDefaultUserPic(img) {
    img.avatar = "assets/imgs/user.jpg";
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
  delete() {
    let alert = this.referenceservice.confirmAlert("Confirm Delete", "Do you want to continue to delete this task");
    alert.present();
    alert.onDidDismiss((data) => {
      if (data) {
        this.referenceservice.basicAlert("Scuccess", 'task Removed successfully');
        this.navCtrl.pop();
      }
    });
  };

  edit() {
    this.navCtrl.push(TaskEditPage, {
      project: this.project,
      task: this.task
    })
  };

  complete() {
    let alert = this.referenceservice.confirmAlert("Confirm to complete", "Do you want to continue to add this task to complete list?");
    alert.present();
    alert.onDidDismiss((data) => {
      if (data) {
        this.referenceservice.basicAlert("Scuccess", 'Task has been added to complete list successfully');
        this.navCtrl.pop();
      }
    });
  }


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(TaskPopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      if (data == "edit") {
        this.edit();
      }
      else if (data == "delete") {
        this.delete();
      }
    })
  };
}

// ********************************************** Edit Task *********************************



@Component({
  selector: 'page-task-details',
  templateUrl: 'taskEdit.html',
})
export class TaskEditPage {

  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public task: any = {};
  public projectData: any = {};
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public phone1 = false;
  projectForm: FormGroup;
  public primaryColor: any;
  public fixed = false;
  taskMember = [];
  project: any;

  constructor(public navCtrl: NavController, public fb: FormBuilder, public popoverCtrl: PopoverController, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.projectForm = fb.group({
      'project': ['', [Validators.required]],
      'task_name': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'assigned_to': [, Validators.compose([Validators.required])],
      'start_date': ['', [Validators.required]],
      'due_date': ['', [Validators.required]],
      'estimate': ['', [Validators.required]],
      'task_id': ['', [Validators.required]],
    });
    this.primaryColor = localStorage.getItem('primary_color');
    this.task = this.navParams.get('task');
    this.project = this.navParams.get('project');

    this.task.assigned_to.forEach(element => {
      this.taskMember.push(element.user_id);
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
    this.referenceService.basicAlert("Success", 'task edited successfully');
    this.navCtrl.pop();
  };
}


@Component({
  template: `
  <ion-list class="popover-list">
  <button ion-item  (click)="edit()">Edit</button>
  <button ion-item  (click)="delete()">Delete</button>
  </ion-list>
`
})
export class TaskPopoverPage {
  public employee;
  public roleId: any;
  public role: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');

  }

  edit() {
    var action = "edit";
    this.viewCtrl.dismiss(action);
  }

  delete() {
    var action = "delete";
    this.viewCtrl.dismiss(action);
  }
}
