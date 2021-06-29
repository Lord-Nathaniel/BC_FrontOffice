import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGaragesComponent } from './profile-garages.component';

describe('ProfileGaragesComponent', () => {
  let component: ProfileGaragesComponent;
  let fixture: ComponentFixture<ProfileGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGaragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
