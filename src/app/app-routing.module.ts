import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaplistComponent} from './maplist/maplist.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapdetailComponent} from './mapdetail/mapdetail.component';

const routes: Routes = [
  { path: 'maps', component: MaplistComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'maps/detail/:mapName', component: MapdetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
