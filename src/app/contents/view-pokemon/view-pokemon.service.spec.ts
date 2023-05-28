import { TestBed } from '@angular/core/testing';

import { ViewPokemonService } from './view-pokemon.service';

describe('ViewPokemonService', () => {
  let service: ViewPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
