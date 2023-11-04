import { Component } from '@angular/core';

@Component({
  selector: 'app-typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.css']
})
export class TypingTestComponent {

  displayText:string = 'Lorem ipsum dolor sit amet';
  enteredText:string = '';
  
  // checkText(event:Event){
  //   var target = event.target as HTMLInputElement;
  //   this.enteredText = target.value;
  // }
}
