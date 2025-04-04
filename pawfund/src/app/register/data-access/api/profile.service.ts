import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ProfileGetApi, ProfileUpdateApi } from '../model/profile-api.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileApiService {
  constructor(private _http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    }),
  };

  private REST_API_SERVER = 'https://pawfund-service-dev-37c4eb7d14d4.herokuapp.com';

  public getProfile() {
    const url = `${this.REST_API_SERVER}/v1/api/account/self-detail`;
    return this._http
      .get<ProfileGetApi.Response>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updateProfile(model: ProfileUpdateApi.Request) {
    const url = `${this.REST_API_SERVER}/v1/api/account`;
    return this._http
      .put<any>(url, model,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error['errorMsg']);
  }
}
