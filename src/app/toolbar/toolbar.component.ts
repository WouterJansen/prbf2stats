import {Component} from '@angular/core';
import {ToolbarService} from '../toolbar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  title: string;
  subtitle: string;
  show = false;
  constructor(private toolbarService: ToolbarService, private _location: Location) {
    this.title = 'Project Reality: Statistics';
  }

  updateTitles(): void {
    this.title = this.toolbarService.getTitle();
    this.subtitle = this.toolbarService.getSubtitle();
    this.show = this.toolbarService.getArrow();
  }

  backClicked() {
    this._location.back();
  }

}
