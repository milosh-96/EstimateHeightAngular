import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringToolComponent } from './measuring-tool.component';

describe('MeasuringToolComponent', () => {
  let component: MeasuringToolComponent;
  let fixture: ComponentFixture<MeasuringToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuringToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
