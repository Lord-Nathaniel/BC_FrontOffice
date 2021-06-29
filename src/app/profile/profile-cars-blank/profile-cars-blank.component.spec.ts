import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCarsBlankComponent } from './profile-cars-blank.component';

describe('ProfileCarsBlankComponent', () => {
  let component: ProfileCarsBlankComponent;
  let fixture: ComponentFixture<ProfileCarsBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCarsBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCarsBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
