import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapListComponent } from './maplist/maplist.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MapService} from './map.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatTabsModule, MatToolbarModule, MatGridListModule,
  MatFormFieldModule, MatTableModule, MatSortModule , MatInputModule, MatSelectModule, MatListModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapListComponent,
    MapdetailComponent,
    DashboardComponent,
    ToolbarComponent,
  ],
  imports: [
    RouterModule, BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatCardModule, MatTabsModule, HttpClientModule, MatSelectModule, MatListModule,
    MatInputModule, MatGridListModule,
    MatFormFieldModule, MatTableModule, MatSortModule, AppRoutingModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
