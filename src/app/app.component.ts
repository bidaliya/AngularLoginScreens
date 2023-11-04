import { Component, OnDestroy} from '@angular/core';
import { ToastService } from './toast/toast-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'loginProj';

  constructor(public toastService: ToastService){}

  toast(){
    this.toastService.success("hiii")
  }
  
  ngOnDestroy(): void {
		this.toastService.clear();
	}
}

/*
! ngFor
<ul>
  <li *ngFor="let item of items; 
              let i = index;         // The index of the current item in the array
              let first = first;     // True if the current item is the first item
              let last = last;       // True if the current item is the last item
              let even = even;       // True if the index is an even number
              let odd = odd">        // True if the index is an odd number
    Item {{ i }} - {{ item.name }}
    <span *ngIf="first">(First item)</span>
    <span *ngIf="last">(Last item)</span>
    <span *ngIf="even">(Even)</span>
    <span *ngIf="odd">(Odd)</span>
  </li>
</ul>
*/
// // "@angular/material/prebuilt-themes/deeppurple-amber.css",