import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarService {
  mTitle: string;
  mSubTitle: string;
  arrow: boolean;
  constructor() { }

  public getTitle() {
    return this.mTitle;
  }

  public setTitle(value: string) {
    this.mTitle = value;
  }

  public getSubtitle() {
    return this.mSubTitle;
  }

  public setSubtitle(value: string) {
    this.mSubTitle = value;
  }
  public showArrow() {
    this.arrow = true;
  }

  public hideArrow() {
    this.arrow = false;
  }

  public getArrow() {
    return this.arrow;
  }

}
