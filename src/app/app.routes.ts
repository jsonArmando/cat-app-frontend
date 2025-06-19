import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'breeds',
    pathMatch: 'full'
  },
  {
    path: 'breeds',
    loadComponent: () => import('./features/breeds-explorer/breeds-explorer.component').then(c => c.BreedsExplorerComponent)
  }
];