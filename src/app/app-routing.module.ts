import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PagesRoutingModule } from './pages/pages.routing.module';
import { AuthRoutingModule } from './auth/auth-rounting.module';

import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  // path: 'dashboard' PagesRoutingModule
  // path: 'auth' AuthRoutingModule
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
