import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() user;
  @Output() onUserDelete = new EventEmitter<{userId: 'string'}>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * The function gets triggered when the user clicks the X button on a
   * user item under user lists. This emits an event upwards to parent component
   * with the user's id
   */
  deleteUser() {
    this.onUserDelete.emit({
      userId: this.user._id
    });
  }

}
