import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLinksBlankComponent } from './profile-links-blank.component';

describe('ProfileLinksBlankComponent', () => {
  let component: ProfileLinksBlankComponent;
  let fixture: ComponentFixture<ProfileLinksBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLinksBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLinksBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
