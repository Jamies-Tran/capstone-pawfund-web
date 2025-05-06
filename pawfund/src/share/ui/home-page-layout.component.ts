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
import { CommonApiService } from '../data-access/api/common.service';

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
        <ng-container *ngIf="!isCollapsed">
          <div class="logo">
            <div>
              <img
                nz-image
                [nzSrc]="'../assets/icon/logo_2.png'"
                heigth="120px"
                width="198px"
              />
            </div>
          </div>
        </ng-container>
        <ul nz-menu class="tw-bg-orange-400 custom-sidebar" nzMode="inline">
          <ng-container *ngIf="isCollapsed">
            <li
              nz-menu-item
              nzMatchRouter
              style="display: flex; justify-content: center; align-items: center; padding: 0;"
            >
              <img
                nz-image
                [nzSrc]="'../assets/icon/Logo_No_Brand.png'"
                width="40"
                height="40"
                alt="logo"
              />
            </li>
          </ng-container>
          <li nz-menu-item nzMatchRouter [routerLink]="['/homepage']">
            <span nz-icon nzType="dashboard"></span>
            <span class="tw-font-bold">Tổng quan</span>
          </li>

          <!-- Quản lý nhân viên -->
          <li nz-menu-item nzMatchRouter [routerLink]="['/staff']">
            <span nz-icon nzType="team"></span>
            <span class="tw-font-bold">Quản lý nhân viên</span>
          </li>

          <!-- Quản lý thú cưng -->
          <li
            nz-menu-item
            nzMatchRouter
            [routerLink]="['/account-management', 'account-list']"
          >
            <span nz-icon nzType="smile"></span>
            <span class="tw-font-bold">Quản lý thú cưng</span>
          </li>

          <!-- Quản lý quỹ -->
          <li
            nz-menu-item
            nzMatchRouter
            [routerLink]="['/account-management', 'account-list']"
          >
            <span nz-icon nzType="wallet"></span>
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
                  <li nz-menu-item nzMatchRouter [routerLink]="['/profile']">
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

      .custom-sidebar.ant-menu-inline,
      .ant-menu-vertical {
        border-right: none !important;
      }
      :host ::ng-deep .custom-sidebar .ant-menu-item-selected {
        background-color: #f97316 !important; /* tailwind orange-400 */
        color: white !important;
      }

      :host ::ng-deep .custom-sidebar .ant-menu-item-selected .anticon {
        color: white !important;
      }
      :host ::ng-deep .ant-menu-inline .ant-menu-item::after {
        border-right: 3px solid #ee4b2b !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageLayoutComponent {
  constructor(private _router: Router, private _commonSvc: CommonApiService) {}
  isCollapsed = false;
  role = localStorage.getItem('role$');
  logout() {
    this._commonSvc.logout().subscribe((data) => {
      localStorage.clear();
      this._router.navigate(['/login']);
    });
  }
}
