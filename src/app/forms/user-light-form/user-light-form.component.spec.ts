import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLightFormComponent } from './user-light-form.component';

describe('UserLightFormComponent', () => {
  let component: UserLightFormComponent;
  let fixture: ComponentFixture<UserLightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLightFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
