import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFromReactiveComponent } from './signup-from-reactive.component';

describe('SignupFromReactiveComponent', () => {
  let component: SignupFromReactiveComponent;
  let fixture: ComponentFixture<SignupFromReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFromReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFromReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
