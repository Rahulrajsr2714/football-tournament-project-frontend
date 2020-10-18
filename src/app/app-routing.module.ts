import { AuthGuard } from './guards/auth.guard';
import { AdminlistteamsComponent } from './adminlistteams/adminlistteams.component';
import { ViewfixtureComponent } from './viewfixture/viewfixture.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddteamComponent } from './addteam/addteam.component';
import { AdminviewfixtureComponent } from './adminviewfixture/adminviewfixture.component';
import { AdminteamdetailsComponent } from './adminteamdetails/adminteamdetails.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'add-team', component: AddteamComponent },
  { path: 'admin/view-fixture', component: AdminviewfixtureComponent,canActivate:[AuthGuard] },
  { path: 'admin/list-teams', component: AdminlistteamsComponent,canActivate:[AuthGuard] },
  { path: 'admin/team/:id/details', component: AdminteamdetailsComponent,canActivate:[AuthGuard] },
  { path: '', component: ViewfixtureComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
