import {  TestBed } from '@angular/core/testing';

import { ActorsComponent } from './actors.component';

describe('SearchComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsComponent ]
    })
    .compileComponents();
  });

   // propertys needed for testings
   function setup() {
    const fixture = TestBed.createComponent(ActorsComponent);
    const component = fixture.debugElement.componentInstance;

    return { fixture, component };
  }

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
