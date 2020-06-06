import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { timeout, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  
  private timeNewRequest = 30000;
  private retryResquest = 3;

  constructor(public http: HttpClient) {}

  get newHeaders() {
    return new HttpHeaders({ 'Content-type': 'application/json' });
  }
  
  get = (url: string, endpoint: string) =>
    this.http
      .get(url + endpoint, { headers: this.newHeaders })
      .pipe(timeout(this.timeNewRequest), retry(this.retryResquest));

  post = (url: string, endpoint: string, data: any) =>
    this.http
      .post(url + endpoint, data,{ headers: this.newHeaders })
      .pipe(timeout(this.timeNewRequest), retry(this.retryResquest));

  put = (url: string, endpoint: string, data: any) =>
    this.http
      .put(url + endpoint, data,{ headers: this.newHeaders })
      .pipe(timeout(this.timeNewRequest), retry(this.retryResquest));

  delete = (url: string, endpoint: string) =>
    this.http
      .delete(url + endpoint,{ headers: this.newHeaders })
      .pipe(timeout(this.timeNewRequest), retry(this.retryResquest));

}
