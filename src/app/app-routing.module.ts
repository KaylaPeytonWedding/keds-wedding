import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'home',
  loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule)
  },
  {
  path: 'location',
  loadChildren: () => import('./components/location/location.module').then(m=>m.LocationModule)
  },
  {
  path: 'whattodo',
  loadChildren: () => import('./components/todo/todo.module').then(m=>m.TodoModule)
  },
  {
    path: 'wedding-party',
    loadChildren: () => import('./components/wedding-party/wedding-party.module').then(m=>m.WeddingPartyModule)
    },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
