import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => 
      import('./features/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'breeds',
    loadComponent: () => 
      import('./features/breeds-explorer/breeds-explorer.component').then(c => c.BreedsExplorerComponent),
    canActivate: [authGuard]
  },
  {
    path: '**', 
    redirectTo: 'login'
  }
];