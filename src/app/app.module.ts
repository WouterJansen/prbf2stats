import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaplistComponent } from './maplist/maplist.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MapService} from './map.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatTabsModule, MatToolbarModule, MatGridListModule,
  MatFormFieldModule, MatTableModule, MatSortModule , MatInputModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ToolbarService} from './toolbar.service';

@NgModule({
  declarations: [
    AppComponent,
    MaplistComponent,
    MapdetailComponent,
    DashboardComponent,
    ToolbarComponent,
  ],
  imports: [
    RouterModule, BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatCardModule, MatTabsModule, HttpClientModule, MatInputModule, MatGridListModule,
    MatFormFieldModule, MatTableModule, MatSortModule, AppRoutingModule
  ],
  providers: [MapService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
