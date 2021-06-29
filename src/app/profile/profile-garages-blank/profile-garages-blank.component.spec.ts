import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGaragesBlankComponent } from './profile-garages-blank.component';

describe('ProfileGaragesBlankComponent', () => {
  let component: ProfileGaragesBlankComponent;
  let fixture: ComponentFixture<ProfileGaragesBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGaragesBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGaragesBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
