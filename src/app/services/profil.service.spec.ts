import { TestBed } from '@angular/core/testing';

import { ProfilService } from './profil.service';

describe('ProfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilService = TestBed.get(ProfilService);
    expect(service).toBeTruthy();
  });
});
