import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalFaqComponent } from './legal-faq.component';

describe('LegalFaqComponent', () => {
  let component: LegalFaqComponent;
  let fixture: ComponentFixture<LegalFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
