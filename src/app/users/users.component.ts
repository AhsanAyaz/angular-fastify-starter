import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/first';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList;
  addUserModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private usersService: UsersService,
    private toastr: ToastsManager
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .first()
      .subscribe((response) => {
        this.usersList = response.users;
      });
  }

  /**
   * @author Ahsan Ayaz
   * Shows the add user modal
   */
  showAddUserModal() {
    this.addUserModalRef = this.modalService.show(AddUserModalComponent);
    this.addUserModalRef.content.onFormSubmit = this.onFormSubmit.bind(this);
  }

  /**
   * @author Ahsan Ayaz
   * This method is bound to the BsModalRef of the add user modal.
   * This gets triggered when the user submits that modal and the values from
   * the form inside that modal are received as parameters here.
   * Therefore, we can further send the data in addUser call using the service.
   */
  onFormSubmit(createUserFormValue) {
    this.usersService.addUser(createUserFormValue)
    .first()
    .subscribe(res => {
      this.toastr.success('User added successfully');
      this.usersList.unshift(res.user);
    }, err => {
      this.toastr.error('Could not add user');
    });
  }

  /**
   * @author Ahsan Ayaz
   * The function tirggers from the the child components and happens
   * when the user clicks the delete button on a user list item
   * @param  $event
   */
  deleteUser($event) {
    console.log($event);
    this.usersService.deleteUser($event)
      .first()
      .subscribe(res => {
        this.toastr.success('User deleted successfully');
        this.usersList = this.usersList.filter(user => user._id !== $event.userId);
      }, err => {
        this.toastr.error('Could not delete user');
      });
  }

}
