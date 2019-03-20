import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterPlaysComponent } from './theater-plays.component';

describe('TheaterPlaysComponent', () => {
  let component: TheaterPlaysComponent;
  let fixture: ComponentFixture<TheaterPlaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterPlaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterPlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
