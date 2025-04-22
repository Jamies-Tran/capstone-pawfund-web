import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AccountAddApi, AccountVerifyApi } from '../model/account-api.model';

@Injectable({
  providedIn: 'root',
})
export class AccountApiService {
  constructor(private _http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private REST_API_SERVER = 'https://pawfund-service-dev-37c4eb7d14d4.herokuapp.com';

  public createAccount(model: AccountAddApi.Request) {
    const url = `${this.REST_API_SERVER}/v1/public/account`;
    return this._http
      .post<any>(url, model, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public sendCode(email: string|null) {
    const url = `${this.REST_API_SERVER}/v1/public/verification-code/account-verification/send?verificationCodeRequest=${email}`;
    return this._http
      .post<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public verifyAccount(model: AccountVerifyApi.Request) {
    const url = `${this.REST_API_SERVER}/v1/public/account/verify`;
    return this._http
      .patch<any>(url, model, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // public paging(model: AccountPagingApi.Request) {
  //   console.log(model.branchId);

  //   const url = `${this.REST_API_SERVER}/web/accounts?search=${model.search}&branchId=${model.branchId}&role=${model.role}&current=${model.current}&pageSize=${model.pageSize}&sorter=${model.sorter}`;
  //   return this._http
  //     .get<Paging<AccountPagingApi.Response>>(url, this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  // public pagingAccountPending(model: AccountPagingApi.Request) {
  //   console.log(model.branchId);

  //   const url = `${this.REST_API_SERVER}/web/accounts?search=${model.search}&branchId=${model.branchId}&accountStatusCodes=PENDING_BRANCH&current=${model.current}&pageSize=${model.pageSize}&sorter=${model.sorter}`;
  //   return this._http
  //     .get<Paging<AccountPagingApi.Response>>(url, this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  // public getAccount(accountId: string, role: string) {
  //   const url = `${this.REST_API_SERVER}/v1/auth/account/${accountId}/${
  //     role === 'STAFF' ? 'staff' : 'manager'
  //   }`;
  //   return this._http
  //     .get<AccountUpdateApi.Response>(url, this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  // public getSchedule(staffId: string) {
  //   const url = `${this.REST_API_SERVER}/v1/schedule/${staffId}`;
  //   return this._http
  //     .get<ScheduleGetApi.Response>(url, this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error['errorMsg']);
  }
}
