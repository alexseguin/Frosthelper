import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSettingsDialogComponent } from './modifier-settings-dialog.component';

describe('ModifierSettingsDialogComponent', () => {
  let component: ModifierSettingsDialogComponent;
  let fixture: ComponentFixture<ModifierSettingsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierSettingsDialogComponent]
    });
    fixture = TestBed.createComponent(ModifierSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
