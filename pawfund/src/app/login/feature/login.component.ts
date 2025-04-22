import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginStore } from '../data-access/store/login.store';
import { provideComponentStore } from '@ngrx/component-store';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginApi } from '../data-access/model/login-api.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzImageModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  providers: [provideComponentStore(LoginStore)],
  template: `
    <nz-layout
      class="tw-h-screen tw-bg-cover tw-bg-center tw-bg-[url('assets/icon/layout.png')]"
    >
      <nz-header class="tw-bg-orange-500 tw-h-[100px] " nz-row>
        <div nz-col nzSpan="6" class="logo ">
          <img
            nz-image
            nzSrc="assets/icon/logo_2.png"
            width="400px"
            height="100px"
          />
        </div>
        <div nz-col nzSpan="16">
          <ul
            nz-menu
            nzMode="horizontal"
            class=" tw-bg-orange-500 tw-text-center"
          >
            <li nz-menu-item class="tw-text-white tw-text-[40px] tw-font-bold">
              Trang Chủ
            </li>
            <li nz-menu-item class="tw-text-white tw-text-[40px] tw-font-bold">
              Thông Tin
            </li>
          </ul>
        </div>
        <div nz-col nzSpan="2" class="tw-flex">
          <!-- <button
            nz-button
            nzType="primary"
            class="tw-bg-slate-500 tw-h-[50px] tw-mt-6 tw-rounded-full"
            [routerLink]="['/login']"
            routerLinkActive="router-link-active"
          >
            Đăng Nhập
          </button> -->
          <button
            nz-button
            nzType="primary"
            class=" tw-h-[50px] tw-mt-6 tw-rounded-full tw-ml-2"
            [routerLink]="['/register']"
            routerLinkActive="router-link-active"
          >
            Đăng ký
          </button>
        </div>
      </nz-header>
      <nz-content>
        <div nz-row>
          <div nz-col nzSpan="12" nzOffset="12" class="tw-mt-[100px]">
            <form nz-form class="" [formGroup]="form">
              <nz-form-item nz-col nzSpan="12">
                <nz-form-label
                  [nzSm]="8"
                  [nzXs]="24"
                  nzRequired
                  nzFor="email"
                  class="tw-font-bold tw-text-xl"
                  >Email</nz-form-label
                >
                <nz-form-control [nzErrorTip]="emailErrorTpl">
                  <nz-input-group [nzSuffixIcon]="'mail'" class=" tw-w-[70%]">
                    <input
                      type="text"
                      [formControl]="form.controls.email"
                      nz-input
                      placeholder="example@gmail.com"
                    />
                  </nz-input-group>
                  <!-- lỗi email -->
                  <ng-template #emailErrorTpl let-control>
                    <ng-container *ngIf="control.hasError('trimRequired')"
                      >Vui lòng nhập Email</ng-container
                    >
                    <ng-container
                      *ngIf="
                        (control.hasError('pattern') ||
                          control.hasError('email')) &&
                        !control.hasError('trimRequired')
                      "
                      >Email sai định dạng Example&#64;gmail.com</ng-container
                    >
                    <ng-container *ngIf="control.hasError('maxlength')"
                      >Email tối đa 50 kí tự</ng-container
                    >
                  </ng-template>
                </nz-form-control>
              </nz-form-item>
              <nz-form-item nz-col nzSpan="12">
                <nz-form-label
                  [nzSm]="8"
                  [nzXs]="24"
                  nzRequired
                  nzFor="email"
                  class="tw-font-bold tw-text-xl"
                  >Mật khẩu</nz-form-label
                >
                <nz-form-control nzErrorTip="Please input your email!">
                  <nz-input-group [nzSuffixIcon]="'lock'" class=" tw-w-[70%]">
                    <input
                      type="password"
                      [formControl]="form.controls.password"
                      nz-input
                      placeholder="*******"
                    />
                  </nz-input-group>
                </nz-form-control>
              </nz-form-item>
            </form>

            <button
              nz-button
              class="login-form-button login-form-margin tw-rounded-full tw-ml-[50px]"
              [nzType]="'primary'"
              (click)="login()"
              (keypress.enter)="login()"
              [disabled]="form.invalid"
            >
              Đăng nhập
            </button>
            Hoặc
            <a
              [routerLink]="['/register']"
              routerLinkActive="router-link-active"
              >Đăng kí ngay!</a
            >
          </div>
        </div>
      </nz-content>
      <nz-footer class="tw-bg-orange-500 tw-h-[230px] " nz-row>
        <div nz-col nzSpan="6" class="logo ">
          <img
            nz-image
            nzSrc="assets/icon/logo_2.png"
            width="400px"
            height="100px"
          />
          <p class="tw-text-center tw-text-[20px]">Nền tảng hỗ trợ nhận nuôi</p>
          <p class="tw-text-center tw-text-[30px] ">và gây quỹ cho thú cưng</p>
        </div>
        <div nz-col nzSpan="6" class="tw-text-center">
          <a href="#"
            ><span
              nz-icon
              nzType="facebook"
              nzTheme="fill"
              class="tw-mt-[40px]"
              style="font-size: 35px;"
            ></span
          ></a>
          <a href="#"
            ><span
              nz-icon
              nzType="twitter"
              nzTheme="outline"
              class="tw-mt-[40px]"
              style="font-size: 35px;"
            ></span
          ></a>
          <a href="#"
            ><span
              nz-icon
              nzType="instagram"
              nzTheme="fill"
              class="tw-mt-[40px]"
              style="font-size: 35px;"
            ></span
          ></a>
          <a href="#"
            ><span
              nz-icon
              nzType="wechat"
              nzTheme="fill"
              class="tw-mt-[40px]"
              style="font-size: 35px;"
            ></span
          ></a>
        </div>
        <div nz-col nzSpan="6">
          <p class="tw-text-[40px] tw-font-bold">Trung tâm cứu trợ</p>
          <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Đăng kí</a><br />
          <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Hướng dẫn</a>
        </div>
        <div nz-col nzSpan="6">
          <p class="tw-text-[40px] tw-font-bold">Nền tảng</p>
          <a href="#" class="tw-ml-3 tw-text-lg tw-text-black"
            >Liên hệ chúng tôi</a
          ><br />
          <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Chính sách</a
          ><br />
          <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Bảo mật</a>
        </div>
      </nz-footer>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        width: 120px;
        height: 31px;
        float: left;
      }

      [nz-menu] {
        line-height: 100px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(public lstore: LoginStore) {}

  form = this.lstore.form;

  login() {
    this.lstore.login({model: LoginApi.mapModel(this.form)})
  }
}
