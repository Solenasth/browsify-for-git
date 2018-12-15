import { TestBed, getTestBed } from '@angular/core/testing';
import { GitDataService } from './git-data.service';
// import { Repo } from '../models';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('Service: GitDataService', () => {
  const testQuery = 'test';
  // let service: GitDataService;
  // let mockHttp: HttpTestingController;
  // let injector: TestBed;

  beforeEach(() => {

    // test bed init
    TestBed.configureTestingModule({
      imports: [
         HttpClientTestingModule,
         getTestBed,
      ],
      declarations: [
      ],
    });
    // varible declaration
    // injector = getTestBed();
    // service = injector.get(GitDataService);
    // mockHttp = injector.get(HttpTestingController);
  });

  // check for outstanding requests.
  // afterEach(() => {
  //   mockHttp.verify();
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('search function should return an observable', () => {
  //   expect(service.searchRepos(testQuery)).toBe(observable);
  // });

  // it('should return an observable', () => {
    // const dummyRepo: Repo = {
    //   id: 12345,
    //   name: 'mock-repo.js',
    //   comments_url: 'https://comentarios.com.mx.jp.org'
    // };

    // service.searchRepos(testQuery).subscribe(repos => {
    //   expect(repos).toEqual(dummyRepo);
    // });

    // const mockRequest = mockHttp.expectOne(`${service.apiUrl}/search/repositories?q=${testQuery}`);
    // expect(mockRequest.request.method).toBe('GET');
    // mockRequest.flush(dummyRepo);
   // });


});
