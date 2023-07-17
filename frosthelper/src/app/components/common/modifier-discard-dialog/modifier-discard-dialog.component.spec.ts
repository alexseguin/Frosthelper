import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDiscardDialogComponent } from './modifier-discard-dialog.component';

describe('ModifierDiscardDialogComponent', () => {
  let component: ModifierDiscardDialogComponent;
  let fixture: ComponentFixture<ModifierDiscardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierDiscardDialogComponent]
    });
    fixture = TestBed.createComponent(ModifierDiscardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
