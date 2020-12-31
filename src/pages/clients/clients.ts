import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, ViewController } from 'ionic-angular';
import { ApiService } from '../../providers/apiServices';
import { ReferenceService } from '../../providers/referenceService';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../login/login';
import { AddclientPage } from '../addclient/addclient';
import { ClientProfilePage } from '../clientprofile/clientprofile';
import { Content } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { DataService } from '../../providers/JsonService';
// import { Content } from 'ionic-angular/umd/navigation/nav-interfaces';

/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {
  @ViewChild(Content) content: Content;
  token: any;
  url: any;
  loading: any;
  clientList: any;
  pageNumber = 1;
  resp: any;
  page = false;
  public role: any;
  public roleId: any;
  public noData = false;
  cssClass: string;
  public primaryColor: any;
  constructor(public navCtrl: NavController, public nativePageTransitions: NativePageTransitions, public dataService: DataService, public apiService: ApiService, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private referenceservice: ReferenceService, public navParams: NavParams, private http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    this.primaryColor = localStorage.getItem('primary_color');
  }
  ionViewDidLoad() {

    this.applyClassBySelection('rotateIn');
  }

  ionViewWillEnter() {
  
    this.clientList = this.dataService.clientList;
   
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

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  applyClassBySelection(effect: string): void {
    this.cssClass = "animated " + effect;
  }

  

  openModal() {
    this.cssClass = '';
    let modal = this.modalCtrl.create(ClientFilterPage);
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

  // openProfile(emp) {
  //   this.navCtrl.push(ProfilePage, {
  //     user: emp.user_id
  //   });
  // };

  presentPopover(myEvent, employee) {
    this.cssClass = '';
    let popover = this.popoverCtrl.create(ClientPopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      if (data == "delete") {
        let alert = this.referenceservice.confirmAlert("Confirm Delete", "Do you want to continue to delete this Client");
        alert.present();
        alert.onDidDismiss((data) => {
          if (data) {
            this.referenceservice.basicAlert("Success", 'Client Removed successfully');
          }
        });
      }
      if (data == "edit") {
        this.navCtrl.push(EditClientPage, {
          client: employee,
        });
      }
    })
  };

  openClientProfile(myEvent, client) {
    this.cssClass = '';
    if (myEvent.target.className == "fa fa-ellipsis-v employee-more") {
      this.presentPopover(myEvent, client);
    }
    else {
      this.navCtrl.push(ClientProfilePage, {
        clientId: client.co_id,
      })
    }

  }
  addClient() {
    this.cssClass = '';
    this.navCtrl.push(AddclientPage);
  }
}


@Component({
  template: `
    <ion-list class="popover-list">
      <button ion-item (click)="close('edit')">Edit</button>
      <button ion-item (click)="close('delete')">Delete</button>
    </ion-list>
  `
})
export class ClientPopoverPage {
  public employee;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {
  }

  close(action) {
    this.viewCtrl.dismiss(action);
  }
}





/********************************************************** Edit *****************************/

@Component({
  selector: 'page-clients',
  templateUrl: 'clientEdit.html',
})
export class EditClientPage {
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
  public clientid;
  public client: any = {};
  public primaryColor: any;
  public dept: any;
  public clientdata: any = {};
  basicInformation = true;
  contactInformation = false;
  webInformation = false;
  bankInformation = false;
  hostInformation = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {

    var id = this.navParams.get('client');
    this.clientid = id.co_id;
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ionViewWillEnter() {
 
  };



  contact() {
    this.basicInformation = false;
    this.contactInformation = true;
  }
  basic() {
    this.basicInformation = true;
    this.contactInformation = false;
  }
  web() {
    this.webInformation = true;
    this.contactInformation = false;
  }
  contactback() {
    this.webInformation = false;
    this.contactInformation = true;
  }
  bank() {
    this.webInformation = false;
    this.bankInformation = true;
  }
  webback() {
    this.webInformation = true;
    this.bankInformation = false;
  }

  host() {
    this.hostInformation = true;
    this.bankInformation = false;
  }
  bankback() {
    this.hostInformation = false;
    this.bankInformation = true;
  }


  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  submit() {
    this.referenceService.basicAlert("Success", 'Client Edited successfully');
  };

}


// ************************************************** FILTER *************************************



@Component({
  selector: 'page-clients',
  templateUrl: 'client_filter.html',
})
export class ClientFilterPage {
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
