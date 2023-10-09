import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempSwitchComponent } from './ng-temp-switch.component';

describe('NgTempSwitchComponent', () => {
  let component: NgTempSwitchComponent;
  let fixture: ComponentFixture<NgTempSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTempSwitchComponent]
    });
    fixture = TestBed.createComponent(NgTempSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
