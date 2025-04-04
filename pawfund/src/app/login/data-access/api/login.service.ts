import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { LoginApi } from '../model/login-api.model';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  constructor(private _http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private REST_API_SERVER = 'https://pawfund-service-dev-37c4eb7d14d4.herokuapp.com';

  public login(model: LoginApi.Request) {
    const url = `${this.REST_API_SERVER}/v1/public/session/login`;
    return this._http
      .post<any>(url, model, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error['errorMsg']);
  }
}
