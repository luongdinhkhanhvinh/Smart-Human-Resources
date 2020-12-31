import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarViewPage {

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  daySelected:any;
  public primaryColor: any;
  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController,
    private calendar: Calendar) {}

  ionViewWillEnter() {
    this.primaryColor = localStorage.getItem('primary_color');
    this.date = new Date();
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
};


  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }



  loadEventThisMonth() {
    this.eventList = [{"calendar_id":"3","id":"50","event_id":"50","title":"New Year's Day","dtstart":1546799400000,"dtend":1547231400000,"eventLocation":"","allDay":1},{"calendar_id":"3","id":"51","event_id":"51","title":"Guru Govind Singh Jayanti","dtstart":1547404200000,"dtend":1547577000000,"eventLocation":"","allDay":1},{"calendar_id":"3","id":"95","event_id":"96","title":"Lohri","dtstart":1547663400000,"dtend":1547836200000,"eventLocation":"","allDay":1},{"calendar_id":"3","id":"96","event_id":"97","title":"New event","dtstart":1546281000000,"dtend":1546885800000,"eventLocation":"","allDay":1},{"calendar_id":"3","id":"52","event_id":"52","title":"Pongal","dtstart":1547749800000,"dtend":1548354600000,"eventLocation":"","allDay":1},{"calendar_id":"1","id":"136","event_id":"157","title":"Test","dtstart":1548613800000,"dtend":1548873000000,"eventLocation":"Tret","allDay":0}];
  }

  checkEvent(day) {
    var hasEvent = false;
    var thisDate1 = this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+day;
    var thisDate2 = this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+day;
    var time1 = new Date(thisDate1).getTime();
    var time2 = new Date(thisDate2).getTime();
    this.eventList.forEach(event => {
      if(((event.dtstart >= time1) && (event.dtstart <= time2)) || ((event.dtend >= time1) && (event.dtend <= time2))) {
        hasEvent = true;
      }
    });
    return hasEvent;
  }

  selectDate(day) {
    this.daySelected = day;
    this.isSelected = false;
    this.selectedEvent = new Array();
    var thisDate1 = this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+day;
    var thisDate2 = this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+day;
    var time1 = new Date(thisDate1).getTime();
    var time2 = new Date(thisDate2).getTime();
    this.eventList.forEach(event => {
      if(((event.dtstart >= time1) && (event.dtstart <= time2)) || ((event.dtend >= time1) && (event.dtend <= time2))) {
        this.isSelected = true;
        this.selectedEvent.push(event);
      }
    });
  }

  deleteEvent(evt) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure want to delete this event?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(
              (msg) => {
                this.loadEventThisMonth();
                this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
              },
              (err) => {
              }
            )
          }
        }
      ]
    });
    alert.present();
  }

}
