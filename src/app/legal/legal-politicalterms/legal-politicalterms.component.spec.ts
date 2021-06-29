import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPoliticaltermsComponent } from './legal-politicalterms.component';

describe('LegalPoliticaltermsComponent', () => {
  let component: LegalPoliticaltermsComponent;
  let fixture: ComponentFixture<LegalPoliticaltermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalPoliticaltermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPoliticaltermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
