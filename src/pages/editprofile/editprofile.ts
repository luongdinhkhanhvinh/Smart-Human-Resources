import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, TabHighlight } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '../../../node_modules/@angular/forms';
import { ReferenceService } from '../../providers/referenceService';
import { ApiService } from '../../providers/apiServices';
import { HTTP } from '../../../node_modules/@ionic-native/http';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/JsonService';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  userForm: FormGroup;
  public loading;
  public token;
  public url;
  public basicInformation = true;
  public experienceInformation = false;
  public educationInformation = false;
  public user: any = {};
  public education_details: any = {};
  public temp: any = {};
  public experience_information: any = {};
  public editprofilePage = this;
  public currentTime;
  public day;
  public year;
  public month;
  public educationfrom:any =[];
  public experiencefrom:any =[];

  public primaryColor:any;
  public gender = [
  {
    name : "Male",
    value: "Male"
  },
  {
    name : "Female",
    value: "Female"
  }]

  constructor(public navCtrl: NavController,public dataService : DataService, public navParams: NavParams, public fb: FormBuilder, public referenceService: ReferenceService, public apiService: ApiService, public http: HTTP) {
    
    this.userForm = fb.group({
      'education': fb.array([this.educationForm()]),
      'experience': fb.array([this.experienceForm()])
    });
    this.primaryColor = localStorage.getItem('primary_color');

  };
  ionViewDidLoad(){
    this.user = this.dataService.employeeProfile;
    this.user.education_details = JSON.parse(this.user.education_details);
    this.user.experience_information = JSON.parse(this.user.experience_information);
    if (this.user.education_details != []) {
      const control = <FormArray>this.userForm.controls.education;
      control.removeAt(0)
      this.user.education_details.forEach((value, key) => {
        const control = <FormArray>this.userForm.controls.education;
        // control.value[key].patchValue(value)
        control.push(this.educationForm());
      });
      this.userForm.patchValue({
        education: this.user.education_details
      })
    }
    if (this.user.experience_information != []) {
      const control = <FormArray>this.userForm.controls.experience;
      control.removeAt(0)
      this.user.experience_information.forEach((value, key) => {
        const control = <FormArray>this.userForm.controls.experience;
        // control.value[key].patchValue(value)
        control.push(this.experienceForm());
      });
      this.userForm.patchValue({
        experience: this.user.experience_information
      })
    }
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month =this.currentTime.getMonth()+1 ;
    this.day =this.currentTime.getDate()-1;
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year+'-'+this.month+'-'+this.day;
  }

  getHeaderStyle(){
    return { 'background':   this.primaryColor}
  };
  
  educationForm(): FormGroup {
    return this.fb.group({
      'institution': new FormControl('',Validators.required),
      'subject': new FormControl('',Validators.required),
      'start_year': new FormControl('',Validators.required),
      'complete_year': new FormControl('',Validators.required),
      'degree': new FormControl('',Validators.required),
      'grade': new FormControl('',Validators.required),
    })
  };

  experienceForm(): FormGroup {
    return this.fb.group({
      'company': new FormControl('',Validators.required),
      'location': new FormControl('',Validators.required),
      'jop_position': new FormControl('',Validators.required),
      'period_from': new FormControl('',Validators.required),
      'period_to': new FormControl('',Validators.required),
    })
  }

  ionViewWillEnter() {
  }

  BasicInformation() {
    this.basicInformation = true;
    this.experienceInformation = false;
    this.educationInformation = false;
  }

  EducationInformation() {
    this.basicInformation = false;
    this.educationInformation = true;
    this.experienceInformation = false;
  }
  ExperienceInformation() {
    var keepGoing = true;
    var a =0;
    this.userForm.value.education.forEach((value) => {
      if(keepGoing)
      if(value.institution!='' && value.subject!='' && value.start_year!=''&&value.complete_year!=''&& value.degree!=''&&value.grade!=''){
       a++;
      }
      else{
        this.referenceService.basicAlert('Smart HRMS',"Please fill all the empty fields");
        keepGoing = false;
      }
      if(this.userForm.value.education.length==a){
        this.basicInformation = false;
        this.educationInformation = false;
        this.experienceInformation = true;
      }
   });
   if(this.userForm.value.education.length==0){
    this.basicInformation = false;
    this.educationInformation = false;
    this.experienceInformation = true;
  }
  };

  selectFrom() {
    this.userForm.value.education.forEach((value,key) => {
      this.educationfrom[key] = value.start_year;
   });
  };

  selectFrom1() {
    this.userForm.value.experience.forEach((value,key) => {
      this.experiencefrom[key] = value.period_from;
   });
  };

  addEducation(): void {
    const control = <FormArray>this.userForm.controls.education;
    control.push(this.educationForm());
  };

  removeEducation(value): void {
    const control = <FormArray>this.userForm.controls.education;
    control.removeAt(value);
  };
  removeExperience(value): void {
    const control = <FormArray>this.userForm.controls.experience;
    control.removeAt(value);
  };

  addExperience() {
    const control = <FormArray>this.userForm.controls.experience;
    control.push(this.experienceForm());
  };
  moveFocus(nextElement) {
    nextElement.setFocus();
  };
  
  submit() {
    var keepGoing = true;
    var a =0;
    this.userForm.value.experience.forEach((value) => {
      if(keepGoing)
      if(value.company!='' && value.location!='' && value.period_from!=''&&value.period_to!=''&& value.jop_position!=''){
       a++;
      }
      else{
        this.referenceService.basicAlert('Smart HRMS',"Please fill all the empty fields");
        keepGoing = false;
      }
     if(this.userForm.value.experience.length==a){
      this.editemployee();
    }
   });
   if(this.userForm.value.experience.length==0){
    this.editemployee();
  }
  };

  editemployee(){
    this.referenceService.basicAlert("Success", 'Profile updated successfully');
    this.navCtrl.pop();
  }
}




