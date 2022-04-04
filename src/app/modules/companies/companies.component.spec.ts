import {  TestBed } from '@angular/core/testing';

import { CompaniesComponent } from './companies.component';

describe('CompaniesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesComponent ]
    })
    .compileComponents();
  });

 // propertys needed for testings
 function setup() {
  const fixture = TestBed.createComponent(CompaniesComponent);
  const component = fixture.debugElement.componentInstance;

  return { fixture, component };
}

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
