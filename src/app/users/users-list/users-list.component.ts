import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users;
  @Output() onUserDeleteEvent = new EventEmitter<{userId: string}>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * The function gets triggered when a delete event is fired on a list item and navigates to this component
   * @param  $event {userId: string}
   */
  onUserDeleteHandler($event: {userId: string}) {
    this.onUserDeleteEvent.emit($event);
  }

}
