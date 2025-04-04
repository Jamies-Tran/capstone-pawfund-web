import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RouterLink } from '@angular/router';
import { AccountStore } from '../data-access/store/account.store';
import { provideComponentStore } from '@ngrx/component-store';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { OnlyNumberInputDirective } from 'src/share/ui/directive/only-number-input.directive';
import { AccountAddApi } from '../data-access/model/account-api.model';

@Component({
  selector: 'app-register',
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
    NzDatePickerModule,
    RouterLink,
    ReactiveFormsModule,
    NzSelectModule,
    OnlyNumberInputDirective,
  ],
  providers: [provideComponentStore(AccountStore)],
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
            <li nz-menu-item class="tw-text-white tw-text-[40px] tw-font-serif">
              Trang Chủ
            </li>
            <li nz-menu-item class="tw-text-white tw-text-[40px] tw-font-serif">
              Thông Tin
            </li>
          </ul>
        </div>
        <div nz-col nzSpan="2" class="tw-flex">
          <button
            nz-button
            nzType="primary"
            class=" tw-h-[50px] tw-mt-6 tw-rounded-full"
            [routerLink]="['/login']"
            routerLinkActive="router-link-active"
          >
            Đăng Nhập
          </button>
          <!-- <button
            nz-button
            nzType="primary"
            class=" tw-h-[50px] tw-mt-6 tw-rounded-full tw-ml-2"
          >
            Đăng ký
          </button> -->
        </div>
      </nz-header>
      <nz-content>
        <div nz-row>
          <div nz-col nzSpan="14" nzOffset="10" class="tw-mt-[100px]">
            <form nz-form [formGroup]="form">
              <div nz-row>
                <!-- Họ và tên đệm -->
                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label nzRequired class="tw-font-bold tw-text-xl"
                    >Họ và tên đệm</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Nhập họ và tên đệm"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <nz-input-group [nzSuffixIcon]="'user'" class=" tw-w-[70%]">
                      <input
                        [formControl]="form.controls.firstName"
                        type="text"
                        nz-input
                        placeholder="Nguyễn Văn"
                      />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>

                <!-- Tên -->
                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label nzRequired class="tw-font-bold tw-text-xl"
                    >Tên</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Nhập tên"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <nz-input-group [nzSuffixIcon]="'user'" class=" tw-w-[70%]">
                      <input
                        type="text"
                        nz-input
                        [formControl]="form.controls.lastName"
                        placeholder="A"
                      />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>

                <!-- Địa chỉ -->
                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label
                    [nzSm]="12"
                    [nzXs]="24"
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                    >Địa chỉ</nz-form-label
                  >
                  <nz-form-control nzErrorTip="Nhập địa chỉ">
                    <nz-input-group
                      [nzSuffixIcon]="'audit'"
                      class=" tw-w-[70%]"
                    >
                      <input
                        type="text"
                        [formControl]="form.controls.address"
                        nz-input
                        placeholder="111 Nguyen Van A, P5, HCM"
                      />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>

                <!-- email -->

                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label
                    [nzSm]="12"
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
                    [nzSm]="12"
                    [nzXs]="24"
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                    >Số điện thoại</nz-form-label
                  >
                  <nz-form-control [nzErrorTip]="phoneErrorTpl">
                    <nz-input-group
                      [nzSuffixIcon]="'phone'"
                      class=" tw-w-[70%]"
                    >
                      <input
                        type="text"
                        appOnlyNumber
                        [formControl]="form.controls.phone"
                        nz-input
                        placeholder="0988XXXXXX"
                      />
                    </nz-input-group>
                    <ng-template #phoneErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('trimRequired')"
                        >Vui lòng nhập Sđt</ng-container
                      >
                      <ng-container *ngIf="control.hasError('maxlength')"
                        >Số điện thoại gồm 10 số
                      </ng-container>
                      <ng-container *ngIf="control.hasError('minlength')"
                        >Số điện thoại gồm 10 số
                      </ng-container>
                    </ng-template>
                  </nz-form-control>
                </nz-form-item>

                <!-- cccc -->

                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label
                    [nzSm]="12"
                    [nzXs]="24"
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                    >CCCD</nz-form-label
                  >
                  <nz-form-control [nzErrorTip]="iErrorTpl">
                    <nz-input-group [nzSuffixIcon]="'book'" class=" tw-w-[70%]">
                      <input
                        type="text"
                        [formControl]="form.controls.identification"
                        nz-input
                        placeholder="0520XXXXXXXX"
                      />
                    </nz-input-group>
                    <ng-template #iErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('trimRequired')"
                        >Vui lòng nhập CCCC</ng-container
                      >
                      <ng-container *ngIf="control.hasError('maxlength')"
                        >Số CCCC gồm 12 số
                      </ng-container>
                      <ng-container *ngIf="control.hasError('minlength')"
                        >Số CCCC gồm 12 số
                      </ng-container>
                    </ng-template>
                  </nz-form-control>
                </nz-form-item>

                <!-- ngày sinh -->

                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label
                    [nzSm]="12"
                    [nzXs]="24"
                    nzRequired
                    nzFor="email"
                    class="tw-font-bold tw-text-xl"
                    >Ngày sinh</nz-form-label
                  >
                  <nz-form-control nzErrorTip="Please input your email!">
                    <nz-date-picker
                      class=" tw-w-[70%]"
                      [formControl]="form.controls.dateOfBirth"
                      [nzDisabledDate]="disableUnder18"
                    ></nz-date-picker>
                  </nz-form-control>
                </nz-form-item>

                <!-- giới tính -->
                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label
                    [nzSm]="12"
                    [nzXs]="24"
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                    >Giới tính</nz-form-label
                  >
                  <nz-form-control nzErrorTip="Please input your email!">
                    <nz-select
                      [nzSuffixIcon]="'user'"
                      class=" tw-w-[70%]"
                      nzAllowClear
                      nzPlaceHolder="Chọn giới tính"
                      [formControl]="form.controls.genderCode"
                    >
                      <nz-option nzLabel="Nam" nzValue="MALE"></nz-option>
                      <nz-option nzLabel="Nữ" nzValue="FEMALE"></nz-option>
                    </nz-select>
                  </nz-form-control>
                </nz-form-item>

                <!-- mật khẩu -->

                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label
                    [nzSm]="12"
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

                <nz-form-item nz-col nzSpan="12">
                  <nz-form-label
                    [nzSm]="12"
                    [nzXs]="24"
                    nzRequired
                    nzFor="email"
                    class="tw-font-bold tw-text-xl"
                    >Nhập lại mật khẩu</nz-form-label
                  >
                  <nz-form-control [nzErrorTip]="rePassErrorTpl">
                    <nz-input-group [nzSuffixIcon]="'lock'" class=" tw-w-[70%]">
                      <input
                        type="password"
                        [formControl]="form.controls.rePassword"
                        nz-input
                        placeholder="********"
                      />
                    </nz-input-group>
                    <ng-template #rePassErrorTpl let-control>
                      <ng-container *ngIf="control.hasError('trimRequired')"
                        >Vui lòng nhập lại mật khẩu</ng-container
                      >
                      <ng-container *ngIf="control.hasError('passwordMisMatch')"
                        >Mật khẩu không khớp
                      </ng-container>
                    </ng-template>
                  </nz-form-control>
                </nz-form-item>
              </div>
            </form>
            <button
              nz-col
              nzSpan="14"
              nzOffset="9"
              nz-button
              class="login-form-button login-form-margin tw-rounded-full"
              [nzType]="'primary'"
              (click)="signUp()"
              [disabled]="form.invalid"
            >
              Đăng ký
            </button>
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
export class RegisterComponent {
  constructor(public aStore: AccountStore) {}
  form = this.aStore.form;
  today = new Date();

  disableUnder18 = (current: Date): boolean => {
    if (!current) return false;
    const minDate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate() + 1);
    return current >= minDate; // Chặn ngày sinh dưới 18 tuổi
  };

  signUp() {
    if (this.form.controls.genderCode.value === 'MALE') {
      this.form.controls.genderName.setValue('Nam');
    } else this.form.controls.genderName.setValue('Nữ');

    if (
      this.form.controls.password.value !== this.form.controls.rePassword.value
    )
      this.form.controls.rePassword.setErrors({ passwordMisMatch: true });
    else {
      this.aStore.createAccount({model: AccountAddApi.mapModel(this.form)})
    }
  }
}
