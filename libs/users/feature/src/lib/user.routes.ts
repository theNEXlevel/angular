import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
    { path: '', pathMatch: 'full', loadComponent: () => import('./users').then((m) => m.UsersComponent) },
    { path: 'users/:id', loadComponent: () => import('./user').then((m) => m.UserComponent) }
];
