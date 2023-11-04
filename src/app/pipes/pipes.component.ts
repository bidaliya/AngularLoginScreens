import { Component } from '@angular/core';
import {Moment} from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {

  nameEntered:string = '';
  selectedDate:Date = new Date();
  selectedMomentDate: moment.Moment = moment();


  // onDateChange(event:Event){
  //   var target = event.target as HTMLInputElement;
  //   var value = target.value;
  //   console.log('hii')
  //   console.log(typeof value);

  // }
  onDateChange(event: MatDatepickerInputEvent<Moment>){
    // var target = event.target as HTMLInputElement;
    // var value = target.value;
    if(event.value){
      const date : Moment = event.value; // This is the correct way to type and assign
      
      // this.selectedDate = date.format('DD MMM YYYY'); // because the selectedDate is of string type.
      this.selectedDate = date.toDate(); 
      console.log(event.value.format('DD MMM YYYY'));
      console.log(this.selectedMomentDate.format('DD MMM YYYY'));
      // this.selectedMomentDate = moment(date);
    }
    else{
      console.log('No date is selected')
    }
    
  }

}
