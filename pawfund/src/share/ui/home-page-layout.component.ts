import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-homepage-layout',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    RouterOutlet,
    NzImageModule,
    NzMenuModule,
    NzToolTipModule,
    RouterLink,
    NzAvatarModule,
    NzDropDownModule,
  ],
  template: `
    <nz-layout class="tw-min-h-screen">
      <nz-sider
        nzCollapsible
        [(nzCollapsed)]="isCollapsed"
        [nzTrigger]="null"
        class="tw-bg-orange-400"
      >
        <div class="logo">
          <div *ngIf="!isCollapsed">
            <img
              nz-image
              [nzSrc]="
                isCollapsed
                  ? '../assets/icon/Logo_chua_xoa_nen.png'
                  : '../assets/icon/Logo_chua_xoa_nen_2.png'
              "
              heigth="120px"
              width="198px"
            />
          </div>
        </div>
        <ul nz-menu class="tw-bg-orange-400" nzMode="inline">
          <li nz-menu-item nzMatchRouter [routerLink]="['/homepage']">
            <span nz-icon nzType="home"></span>
            <span class="tw-font-bold">Tổng quan</span>
          </li>

          <!-- quản lí tài khoản -->
          <li
            nz-menu-item
            nzMatchRouter
            [routerLink]="['/account-management', 'account-list']"
          >
            <span nz-icon nzType="home"></span>
            <span class="tw-font-bold">Quản lý nhân viên</span>
          </li>

          <!-- quản lí chi nhánh -->

          <li
            nz-menu-item
            nzMatchRouter
            [routerLink]="['/account-management', 'account-list']"
          >
            <span nz-icon nzType="home"></span>
            <span class="tw-font-bold">Quản lý thú cưng</span>
          </li>

          <!-- quản lí dịch vụ -->

          <li
            nz-menu-item
            nzMatchRouter
            [routerLink]="['/account-management', 'account-list']"
          >
            <span nz-icon nzType="home"></span>
            <span class="tw-font-bold">Quản lý quỹ</span>
          </li>

          <!-- quản lí lịch -->

        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header>
          <div class="tw-justify-between tw-flex tw-bg-orange-400">
            <span
              class="trigger"
              nz-icon
              [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"
              (click)="isCollapsed = !isCollapsed"
            ></span>
            <div class="tw-inline-block tw-mr-3">
              <nz-avatar
                nzSize="large"
                nzIcon="user"
                nzSrc="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                nz-dropdown
                [nzDropdownMenu]="avatarMenu"
                nzTrigger="click"
                class="tw-cursor-pointer"
              ></nz-avatar>
              <nz-dropdown-menu #avatarMenu="nzDropdownMenu">
                <ul nz-menu>
                  <li
                    nz-menu-item
                    nzMatchRouter
                    [routerLink]="['/profile']"
                  >
                    <span nz-icon nzType="user" nzTheme="outline"></span>
                    <span class="tw-inline-block tw-ml-2">Hồ sơ</span>
                  </li>
                  <li nz-menu-item (click)="logout()">
                    <span nz-icon nzType="logout" nzTheme="outline"></span>
                    <span class="tw-inline-block tw-ml-2">Đăng xuất</span>
                  </li>
                </ul>
              </nz-dropdown-menu>
            </div>
          </div>
        </nz-header>
        <nz-content class="tw-mt-5 tw-m-2 tw-p-2 tw-bg-white" id="app-content">
          <router-outlet></router-outlet>
        </nz-content>
      </nz-layout>
    </nz-layout>
  `,
  styles: [
    `
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }

      .trigger:hover {
        color: #1890ff;
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        min-height: 360px;
      }

      nz-footer {
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageLayoutComponent {
  constructor(private _router: Router) {}
  isCollapsed = false;
  role = localStorage.getItem('role$');
  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}
