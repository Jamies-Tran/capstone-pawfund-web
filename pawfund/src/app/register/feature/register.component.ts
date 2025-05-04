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
      <nz-header
        class="tw-bg-[url('assets/icon/bg-90.png')]  tw-h-[84px] tw-bg-cover tw-bg-no-repeat tw-w-full"
        nz-row
      >
        <div nz-col nzSpan="6" class="logo ">
          <img
            nz-image
            nzSrc="assets/icon/logo_2.png"
            width="270px"
            height="80px"
          />
        </div>
        <div nz-col nzSpan="12">
          <!--  
        <ul
            nz-menu
            nzMode="horizontal"
            class=" tw-bg-transparent tw-text-center"
          >
            <li nz-menu-item class="tw-text-white tw-text-[20px] tw-font-bold">
              Trang Chủ
            </li>
            <li nz-menu-item class="tw-text-white tw-text-[20px] tw-font-bold">
              Thông Tin
            </li>
          </ul>
          -->
        </div>
        <div nz-col nzSpan="6" class="tw-flex tw-items-center tw-justify-end">
          <button
            nz-button
            nzType="primary"
            class="orange-button tw-h-[50px]  tw-rounded-xl tw-ml-auto"
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

      <!-- Content -->
      <nz-content class="tw-min-h-[calc(100vh-84px)]">
        <div nz-row>
          <div nz-col nzSpan="14" nzOffset="10" class="tw-mt-[100px]">
            <h1
              nz-col
              nzSpan="14"
              nzOffset="9"
              class="tw-text-3xl tw-font-bold tw-mb-6"
              style="color: #F36439;"
            >
              Đăng Ký
            </h1>

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
              class="orange-button tw-h-[50px] tw-text-white tw-font-bold tw-px-8 tw-py-2 tw-rounded-xl hover:tw-bg-orange-600 disabled:tw-bg-gray-400 disabled:tw-border-none disabled:tw-cursor-not-allowed"
              [nzType]="'primary'"
              (click)="signUp()"
              [disabled]="form.invalid"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </nz-content>
      <!-- Footer -->
      <nz-footer class="tw-bg-orange-500  tw-flex tw-flex-wrap" nz-row>
        <div nz-col nzSpan="10" class="logo tw-pb-2">
          <img
            nz-image
            nzSrc="assets/icon/logo_2.png"
            width="360px"
            height="100px"
          />
          <p
            class="tw-w-[400px] tw-text-left tw-text-[20px] tw-break-words tw-text-white"
          >
            Nền tảng hỗ trợ nhận nuôi và gây quỹ cho thú cưng
          </p>
          <p
            class="tw-w-[400px] tw-text-left tw-text-[26px] tw-break-words tw-text-white tw-mb-[10px]"
          >
            Liên hệ
          </p>
          <div class="tw-text-white tw-space-y-2 tw-mb-[1rem]">
            <!-- Phone -->
            <div class="tw-flex tw-items-center tw-space-x-2 ">
              <span
                nz-icon
                nzType="phone"
                nzTheme="outline"
                class="tw-text-xl"
              ></span>
              <span>+84929526624</span>
            </div>

            <!-- Email -->
            <div class="tw-flex tw-items-center tw-space-x-2 ">
              <span
                nz-icon
                nzType="mail"
                nzTheme="outline"
                class="tw-text-xl"
              ></span>
              <span>admin&#64;pawfund.com</span>
            </div>
          </div>
          <div class="tw-text-white tw-space-y-3">
            <!-- Tiêu đề -->
            <p class="tw-text-[24px] tw-font-semibold tw-mb-[10px]">
              Mạng xã hội
            </p>

            <!-- Mô tả -->
            <p
              class="tw-w-[400px] tw-text-[16px] tw-text-gray-300 tw-break-words"
            >
              Theo dõi các mạng xã hội để có được những thông tin mới nhất
            </p>

            <!-- Các icon mạng xã hội -->
            <div class="tw-flex tw-space-x-3">
              <!-- Facebook -->
              <a href="#" class="tw-text-white"
                ><span
                  nz-icon
                  nzType="facebook"
                  nzTheme="fill"
                  style="font-size: 35px;"
                ></span
              ></a>

              <!-- Twitter -->
              <a href="#" class="tw-text-white"
                ><span
                  nz-icon
                  nzType="twitter"
                  nzTheme="outline"
                  style="font-size: 35px;"
                ></span
              ></a>

              <!-- Intagram -->
              <a href="#" class="tw-text-white"
                ><span
                  nz-icon
                  nzType="instagram"
                  nzTheme="fill"
                  style="font-size: 35px;"
                ></span
              ></a>

              <!-- LinkedIn -->
              <a href="#" class="tw-text-white"
                ><span
                  nz-icon
                  nzType="wechat"
                  nzTheme="fill"
                  style="font-size: 35px;"
                ></span
              ></a>
            </div>
          </div>
        </div>

        <!-- Cột 1: Tài nguyên -->
        <div nz-col nzSpan="7">
          <div class="tw-h-[100px] tw-flex tw-items-center">
            <p
              class="tw-text-[24px] tw-font-semibold tw-text-white tw-mb-[0px]"
            >
              Tài nguyên
            </p>
          </div>
          <a
            href="#"
            class="tw-mb-[6px] tw-block tw-text-white tw-text-[16px] hover:tw-underline"
            >Blog</a
          >
          <a
            href="#"
            class="tw-mb-[6px] tw-block tw-text-white tw-text-[16px] hover:tw-underline"
            >Câu hỏi thường gặp</a
          >
          <a
            href="#"
            class="tw-mb-[6px] tw-block tw-text-white tw-text-[16px] hover:tw-underline"
            >Liên hệ</a
          >
          <a
            href="#"
            class="tw-mb-[6px] tw-block tw-text-white tw-text-[16px] hover:tw-underline"
            >Điều khoản dịch vụ</a
          >
        </div>

        <!-- Cột 2: Pháp lý -->
        <div nz-col nzSpan="7">
          <div class="tw-h-[100px] tw-flex tw-items-center">
            <p
              class="tw-text-[24px] tw-font-semibold tw-text-white tw-mb-[0px]"
            >
              Pháp lý
            </p>
          </div>

          <a
            href="#"
            class="tw-mb-[6px] tw-block tw-text-white tw-text-[16px] hover:tw-underline"
            >Chính sách bảo mật</a
          >
          <a
            href="#"
            class="tw-mb-[6px] tw-block tw-text-white tw-text-[16px] hover:tw-underline"
            >Điều khoản dịch vụ</a
          >
          <a
            href="#"
            class="tw-mb-[6px] tw-block tw-text-white tw-text-[16px] hover:tw-underline"
            >Chính sách cookie</a
          >
        </div>
      </nz-footer>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        width: 120px;
        float: left;
      }

      [nz-menu] {
        line-height: 80px;
      }
      .orange-button {
        background-color: #f36439;
        border-color: #f36439;
        color: white !important;
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
    const minDate = new Date(
      this.today.getFullYear() - 18,
      this.today.getMonth(),
      this.today.getDate() + 1
    );
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
      this.aStore.createAccount({ model: AccountAddApi.mapModel(this.form) });
    }
  }
}
