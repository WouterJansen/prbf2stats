import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  toolbarTitle;
  toolbarSubtitle;
  toolbarArrow;
  toolbarLink;

  constructor() {
  }

  @Output() titleChange = new EventEmitter();

  @Input()
  get title() {
    return this.toolbarTitle;
  }

  set title(val) {
    this.toolbarTitle = val;
    this.titleChange.emit(this.toolbarTitle);
  }

  @Output() subtitleChange = new EventEmitter();

  @Input()
  get subtitle() {
    return this.toolbarTitle;
  }

  set subtitle(val) {
    this.toolbarSubtitle = val;
    this.subtitleChange.emit(this.toolbarSubtitle);
  }

  @Output() arrowChange = new EventEmitter();

  @Input()
  get arrow() {
    return this.toolbarTitle;
  }

  set arrow(val) {
    this.toolbarArrow = val;
    this.arrowChange.emit(this.toolbarArrow);
  }

  @Output() linkChange = new EventEmitter();

  @Input()
  get link() {
    return this.toolbarLink;
  }

  set link(val) {
    this.toolbarLink = val;
    this.linkChange.emit(this.toolbarLink);
  }

}
