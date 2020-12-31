import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { Camera, CameraOptions } from '../../../node_modules/@ionic-native/camera';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { FileUploadOptions, FileTransfer, FileTransferObject } from '../../../node_modules/@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LoginPage } from '../login/login';
import { EstimatesPage } from '../estimates/estimates';
import { InvoicePage } from '../invoice/invoice';
import { ProjectviewPage } from '../projectview/projectview';
import { DataService } from '../../providers/JsonService';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-clientprofile',
  templateUrl: 'clientprofile.html',
})
export class ClientProfilePage {
  profile = "overview";
  public loading;
  public url;
  public token;
  public resp;
  public clientProfileData: any = {};
  public role: any;
  public roleId: any;
  public imagePath;
  estimatesList: any;
  public profileImage;
  projectList: any = {};
  invoicesList: any;
  invoice= true;
  estimates=true;
  projects=true;
  co_id: any;
  client: any;
  public primaryColor: any;
  public secondryColor: any;
  constructor(public navCtrl: NavController, public dataService : DataService,public navParams: NavParams, private transfer: FileTransfer, private file: File, private actionSheet: ActionSheet, private camera: Camera, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    var id = this.navParams.get("user");
    this.primaryColor = localStorage.getItem('primary_color');
    this.secondryColor = localStorage.getItem('secondry_color');
    var id = this.navParams.get('clientId');
    if (id) {
      this.co_id = id
    }
    else {
      this.co_id = ""
    }
   
  }

  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }
  getFontstyle() {
    return { color: this.secondryColor };
  }
  ionViewWillEnter() {
      this.clientProfileData = this.dataService.clientProfile;
      this.projectList = this.clientProfileData.projects;
      this.projectList.forEach((value, key) => {
        this.projectList[key].opentasks = value.tasks_open.length;
        this.projectList[key].completedtasks = value.tasks_completed.length;
      });
      this.invoicesList = this.clientProfileData.invoices;
      this.estimatesList = this.clientProfileData.estimates;
  };

  editProfile() {
    this.navCtrl.push(EditprofilePage, {
      profile: this.clientProfileData
    });
  };

  openInvoice(invoice){
    this.navCtrl.push(InvoicePage,{
      invoice:invoice
    });
  };

  openProject(project){
    this.navCtrl.push(ProjectviewPage,{
      project:project,
    });
  }


  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  openEstimate(estimate){
    this.navCtrl.push(EstimatesPage,{
      estimate:estimate
    })
  };

  getstyle() {
    return { 'background': "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")" }
  }
  


  setDefaultPic() {
    this.profileImage = "assets/imgs/user.jpg";
  };
};
