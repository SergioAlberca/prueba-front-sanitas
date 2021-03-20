import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of 4000 elements', () => {
    expect(service.generateData()).toHaveSize(4000);
  });

  it('the observable should return an array of 4000 elements', () => {
    service.loadData().subscribe((result) => {
      expect(result).toHaveSize(4000);
    });
  });
});
