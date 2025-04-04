import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ProfileStore } from '../data-access/store/profile.store';
import { provideComponentStore } from '@ngrx/component-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { OnlyNumberInputDirective } from 'src/share/ui/directive/only-number-input.directive';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ProfileUpdateApi } from '../data-access/model/profile-api.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzUploadModule,
    NzImageModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    OnlyNumberInputDirective,
    NzDatePickerModule,
  ],
  providers: [provideComponentStore(ProfileStore)],
  template: `
    <div nz-row nzJustify="start">
      <div nz-col nzSpan="6">
        <div class=" tw-text-center">
          <img
            class="tw-rounded-full"
            nz-image
            width="50%"
            height="50%"
            nzSrc="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt=""
          />
          <h1>Yasuo</h1>
          <h5>Shop owner</h5>
        </div>
        <ul nz-menu nzTheme="light" nzMode="inline">
          <li nz-menu-item nzSelected>
            <span>Thông tin tài khoản</span>
          </li>
          <li nz-menu-item>
            <span>Đăng ký trung tâm</span>
          </li>
          <li nz-menu-item>
            <span class="tw-text-red-500">Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div nz-col nzSpan="18">
        <div nz-row>
          <div nz-col nzSpan="18" nzOffset="4" class="tw-mt-[100px]">
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
              </div>
            </form>
            <div class="tw-mt-7 tw-text-center">
              <button
                nz-button
                class="tw-mr-[120px]"
                nzType="primary"
                [disabled]="form.invalid"
                (click)="onUpdate()"
              >
                Cập Nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  constructor(public pStore: ProfileStore) {}

  form = this.pStore.form;
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

  onUpdate() {
    this.pStore.updateProfile({ model: ProfileUpdateApi.mapModel(this.form) });
  }
}
