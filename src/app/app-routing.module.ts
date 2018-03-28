import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapListComponent} from './maplist/maplist.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapdetailComponent} from './mapdetail/mapdetail.component';

const routes: Routes = [
  { path: 'statistics/maps', component: MapListComponent },
  { path: 'statistics', component: DashboardComponent },
  { path: '', redirectTo: '/statistics', pathMatch: 'full' },
  { path: 'statistics/maps/:mapName', component: MapdetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
