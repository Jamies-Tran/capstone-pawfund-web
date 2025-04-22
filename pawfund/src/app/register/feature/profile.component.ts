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
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ProfileUpdateApi } from '../data-access/model/profile-api.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RouterLink, RouterOutlet } from '@angular/router';

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
    NzDatePickerModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [provideComponentStore(ProfileStore), NzModalService],
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
          <h1>{{form.controls.email.value}}</h1>
        </div>
        <ul nz-menu nzTheme="light" nzMode="inline">
          <li nz-menu-item nzSelected nzMatchRouter [routerLink]="['/profile']" routerLinkActive="router-link-active">
            <span>Thông tin tài khoản</span>
          </li>
          <li nz-menu-item nzMatchRouter  [routerLink]="['/shelter-register']" routerLinkActive="router-link-active" >
            <span>Đăng ký trung tâm</span>
          </li>
          <li nz-menu-item>
            <span class="tw-text-red-500">Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div nz-col nzSpan="18">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  constructor(public pStore: ProfileStore) {}

  form = this.pStore.form;

  onUpdate() {
    this.pStore.updateProfile({ model: ProfileUpdateApi.mapModel(this.form) });
  }

}
