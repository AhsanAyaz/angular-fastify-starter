import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private vcr: ViewContainerRef, private toastr: ToastsManager) {
    // Setting toastr's root container
    this.toastr.setRootViewContainerRef(vcr);
  }
}
