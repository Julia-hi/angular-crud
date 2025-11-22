import { Component } from '@angular/core';
import { UsersTable } from './users-table/users-table';

@Component({
  selector: 'app-users-list',
  imports: [UsersTable],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {

}
