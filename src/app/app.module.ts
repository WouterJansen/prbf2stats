import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaplistComponent } from './maplist/maplist.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule} from '@angular/router';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MapService} from './map.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatGridListModule,
  MatFormFieldModule, MatTableModule, MatSortModule , MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MaplistComponent,
    MapdetailComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule, BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, HttpClientModule, MatInputModule, MatGridListModule,
    MatFormFieldModule, MatTableModule, MatSortModule, AppRoutingModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
