import { Routes } from '@angular/router';
import { UsersList } from './views/pages/users/users-list';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersList,
  },
];
