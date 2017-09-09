import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAddUserForm } from '../users.models';

// tslint:disable-next-line:max-line-length
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {
  addUserForm: FormGroup;
  userForm: IAddUserForm = {
    email: '',
    password: ''
  };
  constructor(public bsModalRef: BsModalRef, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Set up the form values (you can add more later)
    this.addUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * @author Ahsan Ayaz
   * The function gets triggered on submission of the form when the user
   * clicks the save button.
   * The onFormSubmit function has to be bound by the parent using this modal
   * @param formValue
   */
  submitForm(formValue) {
    this.bsModalRef.content.onFormSubmit(formValue);
    this.bsModalRef.hide();
  }

}
