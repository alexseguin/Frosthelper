import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDeckComponent } from './monster-deck.component';

describe('MonsterDeckComponent', () => {
  let component: MonsterDeckComponent;
  let fixture: ComponentFixture<MonsterDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonsterDeckComponent]
    });
    fixture = TestBed.createComponent(MonsterDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
