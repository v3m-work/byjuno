import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {
  }

  private setHttpOptions(params?: HttpParams) {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: params
    };
  }

  get(path: string, data?: any): Observable<any> {
    return this._call('get', path, data);
  }

  private _call(method: RequestMethod, path: string, data?: any): Observable<any> {
    let request;

    switch (method) {
      case 'get':
        request = this.http[method](`${this.apiUrl}${path}`, this.setHttpOptions(data));
        break;
      case 'delete':
        request = this.http[method](`${this.apiUrl}${path}`, this.setHttpOptions());
        break;
      default:
        request = this.http[method](`${this.apiUrl}${path}`, JSON.stringify(data), this.setHttpOptions());
        break;
    }
    return request.pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
