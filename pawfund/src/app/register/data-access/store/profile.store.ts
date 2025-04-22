import { Injectable } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { trimRequired } from '../../../../share/form-validator/trim-required.validator';
import { emailRegex } from 'src/share/form-validator/email-regex.const';
import { ProfileApiService } from '../api/profile.service';
import { ProfileUpdateApi } from '../model/profile-api.model';

export interface ProfileState {
  loadingCount: number;
}

const initialState: ProfileState = {
  loadingCount: 0,
};

@Injectable()
export class ProfileStore extends ComponentStore<ProfileState> implements OnStoreInit{
  constructor(
    private _pApiSvc: ProfileApiService,
    private _nzMessageService: NzMessageService,
    private _activatedRoute: ActivatedRoute,
    private _fb: NonNullableFormBuilder,
    private _router: Router
  ) {
    super(initialState);
  }

  form = new FormGroup<
    ProfileUpdateApi.RequestFormGroup
  >(
    {
      firstName: this._fb.control('', trimRequired),
      lastName: this._fb.control('', trimRequired),
      address: this._fb.control('', Validators.required),
      dateOfBirth: this._fb.control('', Validators.required),
      email: this._fb.control({value: '', disabled: true}, [
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
      phone: this._fb.control('', [
        trimRequired,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      medias: this._fb.control(null),
      accountId: this._fb.control(''),
    });

    ngrxOnStoreInit(){
      this.getProfile()
    }

    readonly getProfile = this.effect(($params) =>
      $params.pipe(
        tap(() => this.updateLoading(true)),
        switchMap(() =>
          this._pApiSvc.getProfile().pipe(
            tap({
              next: (resp) => {
                this.form.patchValue(resp.data)
                console.log(this.form.value);

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

    readonly updateProfile = this.effect<{model : ProfileUpdateApi.Request}>(($params) =>
      $params.pipe(
        tap(() => this.updateLoading(true)),
        switchMap(({model}) =>
          this._pApiSvc.updateProfile(model).pipe(
            tap({
              next: (resp) => {
                this._nzMessageService.success('Cập nhật tài khoản thành công');
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
