import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredField } from './required-field';

describe('RequiredField', () => {
  let component: RequiredField;
  let fixture: ComponentFixture<RequiredField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequiredField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
