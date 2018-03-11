import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProjectsComponent } from './dash-projects.component';

describe('DashProjectsComponent', () => {
  let component: DashProjectsComponent;
  let fixture: ComponentFixture<DashProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
