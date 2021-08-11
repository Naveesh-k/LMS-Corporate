import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretcherComponent } from './stretcher.component';

describe('StretcherComponent', () => {
  let component: StretcherComponent;
  let fixture: ComponentFixture<StretcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
