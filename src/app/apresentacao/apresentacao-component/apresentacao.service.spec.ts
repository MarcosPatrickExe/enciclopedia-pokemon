import { TestBed } from '@angular/core/testing';

import { ApresentacaoService } from './apresentacao.service';

describe('ApresentacaoService', () => {
  let service: ApresentacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApresentacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
