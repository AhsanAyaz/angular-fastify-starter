import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { routes } from './users.routes';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { UsersService } from './users.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ UsersService ],
  entryComponents: [ AddUserModalComponent ],
  declarations: [ UsersComponent, UsersListComponent, UserListItemComponent, AddUserModalComponent ]
})
export class UsersModule { }
