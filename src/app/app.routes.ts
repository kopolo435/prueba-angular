import type { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { NonAuthLayout } from './layouts/non-auth-layout/non-auth-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { SignUp } from './features/sign-up/sign-up';

export const routes: Routes = [
  {
    path: '',
    component: NonAuthLayout,
    children: [
      { path: '', component: Login, title: 'Iniciar sesión' },
      { path: 'sign-up', component: SignUp, title: 'Registro' },
    ],
  },
  {
    path: 'dashboard',
    component: MainLayout,
    children: [{ path: '', component: Dashboard, title: 'Dashboard' }],
  },
];
