import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitDataService {
  private apiUrl  = 'https://api.github.com/';

  constructor(
    public http: HttpClient
    ) {}

  searchRepos(q: string) {
    return this.http.get(this.apiUrl + 'search/repositories?q=' + q);
  }
}
