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
    this.toastService.success("hiii");
  }
  
  ngOnDestroy(): void {
		this.toastService.clear();
	}
}


// // "@angular/material/prebuilt-themes/deeppurple-amber.css",