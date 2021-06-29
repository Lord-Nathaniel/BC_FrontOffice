import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalGCUComponent } from './legal-gcu.component';

describe('LegalGCUComponent', () => {
  let component: LegalGCUComponent;
  let fixture: ComponentFixture<LegalGCUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalGCUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalGCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
