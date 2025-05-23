import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'users', loadComponent: () => import('./pages/users/user.component').then(c => c.UserComponent) },
  { path: 'products', loadComponent: () => import('./pages/products/product.component').then(c => c.ProductComponent) },
];

export default routes;
