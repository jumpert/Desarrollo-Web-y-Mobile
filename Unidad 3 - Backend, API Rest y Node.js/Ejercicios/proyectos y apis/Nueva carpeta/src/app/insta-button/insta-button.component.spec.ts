import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaButtonComponent } from './insta-button.component';

describe('InstaButtonComponent', () => {
  let component: InstaButtonComponent;
  let fixture: ComponentFixture<InstaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
