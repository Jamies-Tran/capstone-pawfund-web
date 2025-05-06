import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { provideComponentStore } from '@ngrx/component-store';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  FormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { tap } from 'rxjs';
import { NzTableDefaultSettingDirective } from 'src/share/ui/directive/nz-table-default-setting.directive';
import { NzSelectChangeDirective } from 'src/share/ui/directive/nz-select-change.directive';
import { trimRequired } from 'src/share/form-validator/trim-required.validator';
import { AccountAddApi } from 'src/app/register/data-access/model/account-api.model';
import { AccountAddModalComponent } from './account-add-modal.component';
import { emailRegex } from 'src/share/form-validator/email-regex.const';
import { AccountStore } from 'src/app/register/data-access/store/account.store';
import { RxLet } from '@rx-angular/template/let';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzDividerModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzTableModule,
    NzTableDefaultSettingDirective,
    RxLet,
    FormsModule,
    NzSelectModule,
  ],
  providers: [
    provideComponentStore(AccountStore),
    NzMessageService,
    NzModalService,
  ],
  template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>Quản lý tài khoản</nz-breadcrumb-item>
      <nz-breadcrumb-item>Danh sách tài khoản</nz-breadcrumb-item>
    </nz-breadcrumb>
    <nz-divider></nz-divider>
    <div nz-row class="tw-pr-[10px]">
      <div nz-col nzSpan="20" class="">
        <nz-input-group nzSearch [nzAddOnAfter]="suffixIconButton">
          <input
            type="text"
            nz-input
            placeholder="Tìm theo tên"
            (keyup.enter)="onSearch()"
          />
        </nz-input-group>
        <ng-template #suffixIconButton>
          <button nz-button nzType="primary" nzSearch (click)="onSearch()">
            <span nz-icon nzType="search"></span>
          </button>
        </ng-template>
      </div>
      <div nz-col nzSpan="2" class="tw-text-center">
        <button nz-button nzType="primary" (click)="onAddAccount()">
          Tạo tài khoản
        </button>
      </div>

      <div nz-col nzSpan="24" class="tw-mt-5">
        <ng-container *rxLet="vm$ as vm">
          <nz-table
            appNzTableDefaultSetting
            class="tw-mr-4"
            [nzData]="[]"
            [nzTotal]="0"
            (nzPageIndex)="(1)"
            (nzPageSize)="(10)"
            (nzQueryParams)="onTableQueryParamsChange($event)"
            [nzShowTotal]="totalText"
            [nzLoading]="!!vm.loadingCount"
            nzShowSizeChanger
          >
            <thead>
              <ng-template #totalText let-total let-range="range">
                <span
                  >{{ range[0] }} - {{ range[1] }} of {{ total }}
                  {{ 'Staffs' }}</span
                >
              </ng-template>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Giới tính</th>
                <!-- <th>Ngày làm</th>
                <th>Ca làm</th> -->
                <th>Trạng thái</th>
                <th>Chức vụ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr *ngFor="let data of nzData; index as i">
                <td>{{ i + 1 }}</td>
                <td>{{ data.firstName + ' ' + data.lastName }}</td>
                <td>{{ data.address }}</td>
                <td>{{ data.phone }}</td>
                <td>{{ data.genderCode }}</td>
                <td>{{ data.accountStatusName }}</td>
                <td>{{ data.roleName }}</td>
                <td class="tw-text-center">
                  <button
                    nz-button
                    nzType="primary"
                    nzSize="small"
                  >
                    Chi Tiết
                  </button>
                </td>
              </tr> -->
            </tbody>
          </nz-table>
        </ng-container>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffComponent {
  constructor(
    public aStore: AccountStore,
    private _nzModalSvc: NzModalService,
    private _fb: NonNullableFormBuilder
  ) {}

  vm$ = this.aStore.state$;
  role$ = localStorage.getItem('role$');

  onTableQueryParamsChange(params: NzTableQueryParams) {
    const { sort } = params;
    const currentSort = sort.find((item) => item.value !== null);
    // this.aStore.pagingRequest.sorter = currentSort?.key ?? '';
    // this.aStore.pagingRequest.orderDescending = currentSort?.value !== 'ascend';
    // this.aStore.getAccountPaging();
  }

  onSearch() {
    // this.aStore.pagingRequest.search =
    //   this.aStore.pagingRequest.search.replace(/[\t\n\r]/, '');
    // if (this.aStore.pagingRequest.current !== 1) {
    //   this.aStore.pagingRequest.current = 1;
    // } else {
    //   this.aStore.getAccountPaging();
    // }
  }

  onChangeLicense() {
    // if (this.aStore.pagingRequest.current !== 1) {
    //   this.aStore.pagingRequest.current = 1;
    // } else {
    //   this.aStore.getAccountPaging();
    // }
  }

  onAddAccount() {
    const modalRef = this._nzModalSvc.create({
      nzTitle: 'Tạo Tài Khoản Nhân Viên',
      nzWidth: '1024px',
      nzContent: AccountAddModalComponent,
    });

    const form = this._fb.group<AccountAddApi.RequestFormGroup>({
      firstName: this._fb.control('', trimRequired),
      lastName: this._fb.control('', trimRequired),
      address: this._fb.control('', Validators.required),
      dateOfBirth: this._fb.control('', Validators.required),
      email: this._fb.control('', [
        trimRequired,
        Validators.pattern(emailRegex),
        Validators.email,
        Validators.maxLength(50),
      ]),
      genderCode: this._fb.control('', Validators.required),
      genderName: this._fb.control(''),
      identification: this._fb.control('', [
        trimRequired,
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      password: this._fb.control('', trimRequired),
      rePassword: this._fb.control('', trimRequired),
      phone: this._fb.control('', [
        trimRequired,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      medias: this._fb.control(null),
    });

    modalRef.componentInstance!.form = form;
    // modalRef
    //   .componentInstance!.clickSubmit.pipe(
    //     tap(() => {
    //       this.aStore.addAccount({
    //         model: form.getRawValue(),
    //         modalRef,
    //       });
    //     })
    //   )
    //   .subscribe();
  }
}
