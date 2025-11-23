import { Routes } from '@angular/router';
import { UsersList } from './views/pages/users/users-list';
import { Dashboard } from './views/pages/dashboard/dashboard';
import { RootComponent } from './views/shared/layouts/root-component/root-component';

export const routes: Routes = [
  //Components without navbar
    {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  //Components with navbar
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'users',
        component: UsersList,
      },
      {
        path: 'locations',
        component: UsersList,
      },
    ]
  },

];
