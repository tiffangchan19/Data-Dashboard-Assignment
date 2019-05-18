import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPerTagComponent } from './images-per-tag.component';

describe('ImagesPerTagComponent', () => {
  let component: ImagesPerTagComponent;
  let fixture: ComponentFixture<ImagesPerTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesPerTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
