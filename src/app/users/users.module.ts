import { UserService } from './user-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { usersRoutes } from "./users.router";
import { UserListComponent } from './user-list/user-list.component';
import { UtilityModule } from "../utility/utility.module";

@NgModule({
  imports: [
    RouterModule.forRoot(usersRoutes),
    CommonModule,
    HttpModule,
    UtilityModule
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
