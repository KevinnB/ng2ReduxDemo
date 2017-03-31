import { UserService } from './user-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    UserListComponent
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
