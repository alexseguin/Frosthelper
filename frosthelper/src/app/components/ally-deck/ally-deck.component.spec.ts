import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllyDeckComponent } from './ally-deck.component';

describe('AllyDeckComponent', () => {
  let component: AllyDeckComponent;
  let fixture: ComponentFixture<AllyDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllyDeckComponent]
    });
    fixture = TestBed.createComponent(AllyDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
