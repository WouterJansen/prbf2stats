import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  pageTitle = 'Project Reality : Statistics';
  pageSubtitle = '';
  pageArrow = false;
  pageLink = '';

  constructor() { }

}
