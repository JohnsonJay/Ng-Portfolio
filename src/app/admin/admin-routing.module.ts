import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
    { path: 'messages', component: MessagesPageComponent, canActivate: [AuthGuard] },
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
