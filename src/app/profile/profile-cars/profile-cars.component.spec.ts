import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCarsComponent } from './profile-cars.component';

describe('ProfileCarsComponent', () => {
  let component: ProfileCarsComponent;
  let fixture: ComponentFixture<ProfileCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
