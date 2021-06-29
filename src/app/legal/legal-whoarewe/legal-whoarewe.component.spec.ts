import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalWhoareweComponent } from './legal-whoarewe.component';

describe('LegalWhoareweComponent', () => {
  let component: LegalWhoareweComponent;
  let fixture: ComponentFixture<LegalWhoareweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalWhoareweComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalWhoareweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
