import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { Camera, CameraOptions } from '../../../node_modules/@ionic-native/camera';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { FileUploadOptions, FileTransfer, FileTransferObject } from '../../../node_modules/@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild(Content) content: Content;
  profile = "overview";
  public loading;
  public url;
  public token;
  public resp;
  public profileData: any = {};
  public role: any;
  public roleId: any;
  public educationDetails: any;
  public exprienceInfo: any;
  public imagePath;
  public profileImage;
  noEducation = false;
  noExperience = false;
  user_id: any;
  primaryColor: any;
  secondryColor: any;
  public colorCode: any;
  constructor(public navCtrl: NavController, public dataService: DataService, public navParams: NavParams, private transfer: FileTransfer, private file: File, private actionSheet: ActionSheet, private camera: Camera, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    this.role = localStorage.getItem('role');
    this.roleId = localStorage.getItem('role_id');
    var id = this.navParams.get("user");
    this.colorCode = {
      'background-color': localStorage.getItem('colorCode'),
    }
    this.primaryColor = localStorage.getItem("primary_color");
    this.secondryColor = localStorage.getItem("secondry_color");
    if (id) {
      this.user_id = id
    }
    else {
      this.user_id = "";
    }
  }

  getstyle() {
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  }
  getProgresstyle() {
    return {
      background:
        "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
    };
  }
  getHeaderStyle() {
    return { background: this.primaryColor };
  }

  ionViewDidLoad() {
    this.profileData = this.dataService.employeeProfile;
    if (this.profileData.address == '-') {
      this.profileData.address = '';
    }
    if (this.profileData.city == '-') {
      this.profileData.city = '';
    }
    if (this.profileData.country == '-') {
      this.profileData.country = '';
    }
    this.profileImage = this.profileData.avatar;
    this.educationDetails = JSON.parse(this.profileData.education_details);
    if (this.educationDetails.length == 0) {
      this.noEducation = true;
    }
    this.exprienceInfo = JSON.parse(this.profileData.experience_information);
    if (this.exprienceInfo.length == 0) {
      this.noExperience = true;
    }
  }
  editProfile() {
    this.navCtrl.push(EditprofilePage);
  }

  

  setDefaultPic() {
    this.profileImage = "assets/imgs/user.jpg";
  }
}
