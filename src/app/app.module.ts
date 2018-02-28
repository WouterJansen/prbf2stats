import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MaplistComponent } from './maplist/maplist.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule} from '@angular/router';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
import { DashboardComponent } from './alerts/dashboard/dashboard.component';
import {MapService} from './map.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    MaplistComponent,
    MapdetailComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule, BrowserModule, HttpClientModule, NgbModule.forRoot(), AppRoutingModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
