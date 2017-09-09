import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * Toggles the menu in lower screen widths
   */
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
