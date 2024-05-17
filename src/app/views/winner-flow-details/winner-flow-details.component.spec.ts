import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerFlowDetailsComponent } from './winner-flow-details.component';

describe('WinnerFlowDetailsComponent', () => {
  let component: WinnerFlowDetailsComponent;
  let fixture: ComponentFixture<WinnerFlowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerFlowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerFlowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
