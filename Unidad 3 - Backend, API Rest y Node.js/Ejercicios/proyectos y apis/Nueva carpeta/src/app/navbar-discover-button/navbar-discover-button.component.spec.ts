import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDiscoverButtonComponent } from './navbar-discover-button.component';

describe('NavbarDiscoverButtonComponent', () => {
  let component: NavbarDiscoverButtonComponent;
  let fixture: ComponentFixture<NavbarDiscoverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDiscoverButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDiscoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
