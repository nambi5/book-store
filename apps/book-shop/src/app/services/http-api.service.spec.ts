import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpApiService } from './http-api.service';

describe('HttpApiService', () => {
  let service: HttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
