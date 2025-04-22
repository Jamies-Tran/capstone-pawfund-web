import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { trimRequired } from '../../../../share/form-validator/trim-required.validator';
import { emailRegex } from 'src/share/form-validator/email-regex.const';
import { LoginApiService } from '../api/login.service';
import { LoginApi } from '../model/login-api.model';

export interface LoginState {
  loadingCount: number;
}

const initialState: LoginState = {
  loadingCount: 0,
};

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {
  constructor(
    private _lApiSvc: LoginApiService,
    private _nzMessageService: NzMessageService,
    private _activatedRoute: ActivatedRoute,
    private _fb: NonNullableFormBuilder,
    private _router: Router
  ) {
    super(initialState);
  }

  form = new FormGroup<
    LoginApi.RequestFormGroup
  >(
    {
      email: this._fb.control('', [
        trimRequired,
        Validators.pattern(emailRegex),
        Validators.email,
        Validators.maxLength(50),
      ]),
      password: this._fb.control('', trimRequired),
    });

    readonly login = this.effect<{ model: LoginApi.Request }>(($params) =>
      $params.pipe(
        tap(() => this.updateLoading(true)),
        switchMap(({ model }) =>
          this._lApiSvc.login(model).pipe(
            tap({
              next: (resp) => {
                this._nzMessageService.success('Đăng nhập thành công');
                localStorage.setItem('accessToken', resp['data']['accessToken'])
                localStorage.setItem('accountId', resp['data']['account']['accountId'])
                this._router.navigate(["/homepage"])
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
