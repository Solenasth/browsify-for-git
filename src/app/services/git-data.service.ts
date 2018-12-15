import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitDataService {
  private apiUrl  = 'https://api.github.com/';
  constructor(private http: HttpClient) {
  }
  search(q: string) {
    return this.http.get(this.apiUrl + 'search/' + q);
  }
}
