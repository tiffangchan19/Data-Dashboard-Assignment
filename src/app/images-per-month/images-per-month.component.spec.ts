import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPerMonthComponent } from './images-per-month.component';

describe('ImagesPerMonthComponent', () => {
  let component: ImagesPerMonthComponent;
  let fixture: ComponentFixture<ImagesPerMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesPerMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
