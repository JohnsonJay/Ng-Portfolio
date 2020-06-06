import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioPageComponent } from '../app/pages/portfolio-page/portfolio-page.component';


const routes: Routes = [
  { path: '', component: PortfolioPageComponent },
  { path: 'home', component: PortfolioPageComponent },
  { path: 'auth',  loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', component: PortfolioPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
