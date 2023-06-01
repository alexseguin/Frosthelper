import { TestBed } from '@angular/core/testing';

import { ModifierDeckService } from './modifier-deck.service';

describe('ModifierDeckService', () => {
  let service: ModifierDeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierDeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
