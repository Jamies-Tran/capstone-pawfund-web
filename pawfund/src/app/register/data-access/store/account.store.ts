import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AccountAddApi, AccountUpdateApi, AccountVerifyApi } from '../model/account-api.model';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { trimRequired } from '../../../../share/form-validator/trim-required.validator';
import { AccountApiService } from '../api/account.service';
import { emailRegex } from 'src/share/form-validator/email-regex.const';
import { matchPassword } from 'src/share/form-validator/match-password.validator';

export interface AccountState {
  // acountPaging: Paging<AccountPagingApi.Response>;
  loadingCount: number;
  // // branchNameData: BranchNameApi.Response;
  // addressData: string[];
  // accountData: AccountUpdateApi.Response;
  // scheduleData: ScheduleGetApi.Response;
}

const initialState: AccountState = {
  // acountPaging: {
  //   content: [],
  //   currentPage: 1,
  //   pageSize: 10,
  //   totalElement: 0,
  //   totalPage: 0,
  // },
  loadingCount: 0,
  // branchNameData: { values: [] },
  // addressData: [],
  // accountData: { value: null },
  // scheduleData: { values: [] },
};

@Injectable()
export class AccountStore extends ComponentStore<AccountState> {
  constructor(
    private _aApiService: AccountApiService,
    private _nzMessageService: NzMessageService,
    private _activatedRoute: ActivatedRoute,
    private _fb: NonNullableFormBuilder,
    private _router: Router
  ) {
    super(initialState);
  }

  form = new FormGroup<
    AccountAddApi.RequestFormGroup
  >(
    {
      firstName: this._fb.control('', trimRequired),
      lastName: this._fb.control('', trimRequired),
      address: this._fb.control('', Validators.required),
      dateOfBirth: this._fb.control('', Validators.required),
      email: this._fb.control('', [
        trimRequired,
        Validators.pattern(emailRegex),
        Validators.email,
        Validators.maxLength(50),
      ]),
      genderCode: this._fb.control('', Validators.required),
      genderName: this._fb.control(''),
      identification: this._fb.control('', [
        trimRequired,
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      password: this._fb.control('', trimRequired),
      rePassword: this._fb.control('', trimRequired),
      phone: this._fb.control('', [
        trimRequired,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      medias: this._fb.control(null),
    });

    emailForm = new FormGroup<AccountVerifyApi.RequestFormGroup>({
      email: this._fb.control({value: localStorage.getItem('email'), disabled: true}),
      verificationCode: this._fb.control('',trimRequired)
    })

    readonly createAccount = this.effect<{ model: AccountAddApi.Request }>(($params) =>
      $params.pipe(
        tap(() => this.updateLoading(true)),
        switchMap(({ model }) =>
          this._aApiService.createAccount(model).pipe(
            tap({
              next: (resp) => {
                this._nzMessageService.success('Đăng ký tài khoản thành công');
                localStorage.setItem('email',this.form.controls.email.value)
                this._router.navigate(["/verify"])
              },
              error: (error) =>
                this._nzMessageService.error(error),
              finalize: () => this.updateLoading(false),
            }),
            catchError(() => EMPTY)
          )
        )
      )
    );

    readonly sendCode = this.effect(($params) =>
      $params.pipe(
        tap(() => this.updateLoading(true)),
        switchMap(() =>
          this._aApiService.sendCode(localStorage.getItem('email')).pipe(
            tap({
              next: (resp) => {
              },
              error: (error) =>
                this._nzMessageService.error(error),
              finalize: () => this.updateLoading(false),
            }),
            catchError(() => EMPTY)
          )
        )
      )
    );

    readonly verifyAccount = this.effect<{ model: AccountVerifyApi.Request }>(($params) =>
      $params.pipe(
        tap(() => this.updateLoading(true)),
        switchMap(({ model }) =>
          this._aApiService.verifyAccount(model).pipe(
            tap({
              next: (resp) => {
                this._nzMessageService.success('Kích hoạt tài khoản thành công');
                this._router.navigate(["/login"])
              },
              error: (error) =>
                this._nzMessageService.error(error),
              finalize: () => this.updateLoading(false),
            }),
            catchError(() => EMPTY)
          )
        )
      )
    );

  readonly updateLoading = this.updater((s, isAdd: boolean) => ({
    ...s,
    loadingCount: s.loadingCount + (isAdd ? 1 : -1),
  }));
}
