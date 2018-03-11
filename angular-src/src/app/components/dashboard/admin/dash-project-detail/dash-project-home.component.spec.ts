import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProjectHomeComponent } from './dash-project-home.component';

describe('DashProjectHomeComponent', () => {
  let component: DashProjectHomeComponent;
  let fixture: ComponentFixture<DashProjectHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProjectHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProjectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
