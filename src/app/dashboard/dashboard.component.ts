import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../toolbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.setTitle('Project Reality: Statistics');
    this.toolbarService.setSubtitle('');
    this.toolbarService.hideArrow();
  }

}
