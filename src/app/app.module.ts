import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AddteamComponent } from './addteam/addteam.component';
import { ViewfixtureComponent } from './viewfixture/viewfixture.component';
import { AdminviewfixtureComponent } from './adminviewfixture/adminviewfixture.component';
import { AdminupdatepointComponent } from './adminupdatepoint/adminupdatepoint.component';
import { AdminlistteamsComponent } from './adminlistteams/adminlistteams.component';
import { AdminteamdetailsComponent } from './adminteamdetails/adminteamdetails.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AddteamComponent,
    ViewfixtureComponent,
    AdminviewfixtureComponent,
    AdminupdatepointComponent,
    AdminlistteamsComponent,
    AdminteamdetailsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
