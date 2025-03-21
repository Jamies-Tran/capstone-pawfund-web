import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzImageModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzInputModule
  ],
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
          >
            Đăng ký
          </button>
        </div>
      </nz-header>
      <nz-content>
        <div nz-row>
          <div nz-col nzSpan="12" nzOffset="12" class="tw-mt-[100px]">
          <form nz-form class="tw-max-w-[300px]">
      <nz-form-item>
      <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired nzFor="email" class="tw-font-bold tw-text-xl">E-mail</nz-form-label>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-group nzPrefixIcon="user">
            <input type="text" nz-input formControlName="username" placeholder="example@gmail.com" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
      <nz-form-label [nzSm]="8" [nzXs]="24" nzRequired nzFor="email" class="tw-font-bold tw-text-xl">Mật khẩu</nz-form-label>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock">
            <input type="password" nz-input formControlName="password" placeholder="******" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <button nz-button class="login-form-button login-form-margin tw-rounded-full" [nzType]="'primary'">Đăng nhập</button>
      Hoặc
      <a>Đăng kí ngay!</a>
    </form>
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
            ><nz-icon
              [nzType]="'facebook'"
              class="tw-mt-[40px]"
              nzTheme="fill"
              style="font-size: 35px;"
          /></a>
          <a href="#"
            ><nz-icon
              nzType="twitter"
              class="tw-mt-[40px] tw-ml-4"
              nzTheme="outline"
              style="font-size: 35px;"
          /></a>
          <a href="#"
            ><nz-icon
              nzType="discord"
              class="tw-mt-[40px] tw-ml-4"
              nzTheme="fill"
              style="font-size: 35px;"
          /></a>
          <a href="#"
            ><nz-icon
              nzType="instagram"
              class="tw-mt-[40px] tw-ml-4"
              nzTheme="outline"
              style="font-size: 35px;"
          /></a>
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
export class LoginComponent {}
