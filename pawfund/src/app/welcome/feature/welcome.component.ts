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
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzImageModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    RouterLink,
  ],
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
          <button
            nz-button
            nzType="primary"
            class="orange-button tw-h-[50px]  tw-rounded-xl tw-ml-2"
            [routerLink]="['/register']"
            routerLinkActive="router-link-active"
          >
            Đăng ký
          </button>
        </div>
      </nz-header>

      <!-- Content -->
      <nz-content class="tw-min-h-[calc(100vh-84px)]">
        <div class="inner-content"></div>
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
        background-color: #f36439 !important;
        border-color: #f36439 !important;
        color: white !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
