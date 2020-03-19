import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDisplayComponent } from './mat-display.component';

describe('MatDisplayComponent', () => {
  let component: MatDisplayComponent;
  let fixture: ComponentFixture<MatDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
