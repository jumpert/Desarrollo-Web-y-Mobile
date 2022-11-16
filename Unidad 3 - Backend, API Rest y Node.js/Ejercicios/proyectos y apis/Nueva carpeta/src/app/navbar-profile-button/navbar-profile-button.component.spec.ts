import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfileButtonComponent } from './navbar-profile-button.component';

describe('NavbarProfileButtonComponent', () => {
  let component: NavbarProfileButtonComponent;
  let fixture: ComponentFixture<NavbarProfileButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarProfileButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
