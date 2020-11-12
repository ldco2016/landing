import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  // private url = 'https://newsapi.org/v2/top-headlines';
  private url = 'https://jsonplaceholder.typicode.com/posts';
  // private pageSize = 10;
  // private apiKey = 'e0d90440583c4a6daf42eda2e0a668dd';
  // private country = 'us';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any>  {
    return this.http.get(this.url);
  }
}
