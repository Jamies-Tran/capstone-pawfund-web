import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-welcome-layout',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, NzImageModule, NzGridModule, NzButtonModule, NzIconModule, RouterLink],
  template: `
    <nz-layout class="tw-h-screen tw-bg-cover tw-bg-center tw-bg-[url('assets/icon/layout.png')]">
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
          <button nz-button nzType="primary" class=" tw-h-[50px] tw-mt-6 tw-rounded-full" [routerLink]="['/login']" routerLinkActive="router-link-active" >Đăng Nhập</button>
          <button nz-button nzType="primary" class=" tw-h-[50px] tw-mt-6 tw-rounded-full tw-ml-2" [routerLink]="['/register']" routerLinkActive="router-link-active">Đăng ký</button>
        </div>
      </nz-header>
      <nz-content>
        <div class="inner-content">Content</div>
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
        <a href="#" ><span nz-icon nzType="facebook" nzTheme="fill" class="tw-mt-[40px]" style="font-size: 35px;"></span></a>
        <a href="#" ><span nz-icon nzType="twitter" nzTheme="outline" class="tw-mt-[40px]" style="font-size: 35px;"></span></a>
        <a href="#" ><span nz-icon nzType="instagram" nzTheme="fill" class="tw-mt-[40px]" style="font-size: 35px;"></span></a>
        <a href="#" ><span nz-icon nzType="wechat" nzTheme="fill" class="tw-mt-[40px]" style="font-size: 35px;"></span></a>
        </div>
        <div nz-col nzSpan="6">
            <p class="tw-text-[40px] tw-font-bold">Trung tâm cứu trợ</p>
            <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Đăng kí</a><br>
            <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Hướng dẫn</a>
        </div>
        <div nz-col nzSpan="6">
            <p class="tw-text-[40px] tw-font-bold">Nền tảng</p>
            <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Liên hệ chúng tôi</a><br>
            <a href="#" class="tw-ml-3 tw-text-lg tw-text-black">Chính sách</a><br>
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
export class WelcomeComponent {}
