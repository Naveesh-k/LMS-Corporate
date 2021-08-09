import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueStionComponent } from './que-stion.component';

describe('QueStionComponent', () => {
  let component: QueStionComponent;
  let fixture: ComponentFixture<QueStionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueStionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueStionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
