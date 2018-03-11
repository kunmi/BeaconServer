import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFloorplanComponent } from './dash-floorplan.component';

describe('DashFloorplanComponent', () => {
  let component: DashFloorplanComponent;
  let fixture: ComponentFixture<DashFloorplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashFloorplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashFloorplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
