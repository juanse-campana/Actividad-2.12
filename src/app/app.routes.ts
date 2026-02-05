import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: 'usuarios', loadComponent: () => import('./features/users/user-list/user-list.component').then(m => m.UserListComponent) },
      { path: 'registro', loadComponent: () => import('./features/users/user-form/user-form.component').then(m => m.UserFormComponent) }
    ]
  }
];
