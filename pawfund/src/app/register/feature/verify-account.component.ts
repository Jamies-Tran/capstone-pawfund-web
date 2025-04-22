import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
import { AccountAddApi, AccountVerifyApi } from '../data-access/model/account-api.model';
import { BehaviorSubject, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-account-verify',
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
            <li nz-menu-item class="tw-text-white tw-text-[40px] ">
              Trang Chủ
            </li>
            <li nz-menu-item class="tw-text-white tw-text-[40px] ">
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
          <div nz-col nzSpan="14" nzOffset="7" class="tw-mt-[50px]">
            <p class="tw-font-bold tw-text-4xl tw-text-center">KIỂM TRA EMAIL VÀ NHẬP MÃ XÁC MINH</p>
            <p class="tw-font-bold tw-text-4xl tw-text-center">ĐỂ KÍCH HOẠT TÀI KHOẢN</p>
          </div>
          <div nz-col nzSpan="12" nzOffset="12" class="tw-mt-[50px]">
            <form nz-form [formGroup]="form">
              <div nz-row>
                <!-- email -->

                <nz-form-item nz-col nzSpan="24">
                  <nz-form-label
                    [nzSm]="12"
                    [nzXs]="24"
                    nzRequired
                    nzFor="email"
                    class="tw-font-bold tw-text-xl"
                    >Email</nz-form-label
                  >
                  <nz-form-control [nzErrorTip]="emailErrorTpl">
                    <nz-input-group [nzSuffixIcon]="'mail'" class=" tw-w-[30%]">
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
                    <button nz-button nzType="primary" class="tw-ml-3" [disabled]="isDisabled$ | async" (click)="sendCode()">{{buttonLabel$ | async}}</button>
                  </nz-form-control>
                </nz-form-item>

                <!-- code -->
                <nz-form-item nz-col nzSpan="24">
                  <nz-form-label nzRequired class="tw-font-bold tw-text-xl"
                    >Mã xác nhận</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Nhập họ và tên đệm"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <nz-input-group
                      [nzSuffixIcon]="'info-circle'"
                      class=" tw-w-[30%]"
                    >
                      <input
                        [formControl]="form.controls.verificationCode"
                        type="text"
                        nz-input
                      />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>
              </div>
            </form>
            <button
              nz-col
              nzSpan="14"
              nzOffset="3"
              nz-button
              class="login-form-button login-form-margin tw-rounded-full "
              [nzType]="'primary'"
              (click)="Verify()"
              [disabled]="form.invalid"
            >
              xác minh
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
export class VerifyAccountComponent implements OnInit {
  constructor(public aStore: AccountStore) {}
  form = this.aStore.emailForm;

  ngOnInit(){
    this.aStore.sendCode
  }

  private initialTime = 60;
  private countdownSubject = new BehaviorSubject<number | null>(null);

  isDisabled$ = this.countdownSubject.asObservable().pipe(
    map(value => value !== null) // Nếu có giá trị, nghĩa là đang đếm ngược -> disabled
  );

  buttonLabel$ = this.countdownSubject.asObservable().pipe(
    map(value => (value === null ? 'Gửi lại' : `${value}s`)) // Cập nhật label nút
  );

  sendCode() {
    this.aStore.sendCode()
    this.countdownSubject.next(this.initialTime); // Bắt đầu đếm ngược từ 60

    interval(1000)
      .pipe(take(this.initialTime))
      .subscribe(value => {
        const timeLeft = this.initialTime - value - 1;
        this.countdownSubject.next(timeLeft > 0 ? timeLeft : null); // Khi hết thời gian, enable lại nút
      });
  }
  Verify() {
    this.aStore.verifyAccount({model: AccountVerifyApi.mapModel(this.form)})
  }
}
