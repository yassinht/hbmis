import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StimFlowDetailsComponent } from './stim-flow-details.component';

describe('StimFlowDetailsComponent', () => {
  let component: StimFlowDetailsComponent;
  let fixture: ComponentFixture<StimFlowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StimFlowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StimFlowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
