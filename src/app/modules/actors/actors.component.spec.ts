import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsComponent } from './actors.component';

describe('SearchComponent', () => {
  let component: ActorsComponent;
  let fixture: ComponentFixture<ActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
