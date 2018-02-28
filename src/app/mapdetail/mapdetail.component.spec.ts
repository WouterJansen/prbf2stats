import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdetailComponent } from './mapdetail.component';

describe('MapdetailComponent', () => {
  let component: MapdetailComponent;
  let fixture: ComponentFixture<MapdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
