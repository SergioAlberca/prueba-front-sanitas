import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a string', () => {
    console.log(typeof service.generateRandomText() === 'string');
    expect(typeof service.generateRandomText() === 'string').toBeTrue();
  });

  it('should contain the chain text Random', () => {
    expect(service.generateRandomText().includes('Texto Random')).toBeTrue();
  });
});
