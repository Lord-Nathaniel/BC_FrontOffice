import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfosBlankComponent } from './profile-infos-blank.component';

describe('ProfileInfosBlankComponent', () => {
  let component: ProfileInfosBlankComponent;
  let fixture: ComponentFixture<ProfileInfosBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfosBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfosBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
