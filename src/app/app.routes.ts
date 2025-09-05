import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./bienvenido/bienvenido.page').then( m => m.BienvenidoPage)
  },
  {
    path: 'slpash',
    loadComponent: () => import('./slpash/slpash.page').then( m => m.SlpashPage)
  },




];
