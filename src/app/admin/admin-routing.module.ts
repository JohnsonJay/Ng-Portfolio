import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

const redirectToAuth = redirectUnauthorizedTo(['auth']);

const routes: Routes = [
    { path: 'admin', component: AdminPageComponent, ...canActivate(redirectToAuth) },
    { path: 'messages', component: MessagesPageComponent, ...canActivate(redirectToAuth) },
    { path: 'auth', component: AuthPageComponent },
    { path: '**', component: AuthPageComponent }
  ];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
    ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
