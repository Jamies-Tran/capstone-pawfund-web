import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { provideComponentStore } from '@ngrx/component-store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AccountAddApi, AccountUpdateApi } from 'src/app/register/data-access/model/account-api.model';
import { AccountStore } from 'src/app/register/data-access/store/account.store';
import { RxLet } from '@rx-angular/template/let';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-hangtag-add-or-update-modal',
  standalone: true,
  imports: [
    CommonModule,
    NzMenuModule,
    NzImageModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    NzSelectModule,
  ],
  providers: [provideComponentStore(AccountStore), NzMessageService],
  template: `
    <div>
    <form nz-form >
        <div nz-row class="tw-ml-[12%]">
          <!-- first name -->
          <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3" nzRequired
              >Họ và tên đệm</nz-form-label
            >
            <nz-form-control nzErrorTip="Vui lòng nhập họ và tên đệm">
              <input
                class="tw-rounded-md tw-w-[70%]"
                nz-input
                placeholder="Nhập tên tài khoản"
              />
            </nz-form-control>
          </nz-form-item>

          <!-- last name -->
          <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3" nzRequired>Tên</nz-form-label>
            <nz-form-control nzErrorTip="Vui lòng nhập tên">
              <input
                class="tw-rounded-md tw-w-[70%]"
                nz-input
                placeholder="Nhập tên tài khoản"
              />
            </nz-form-control>
          </nz-form-item>

          <!-- dia chi -->

          <nz-form-item nz-col nzSpan="12" class="">
          <nz-form-label class="tw-ml-3" nzRequired>Địa chỉ</nz-form-label>
            <nz-form-control nzErrorTip="Vui lòng nhập địa chỉ">
              <input
                class=" tw-w-[70%]"
                placeholder="Nhập địa chỉ"
                nz-input
              />
              <!-- <nz-autocomplete
                [nzDataSource]="vm.addressData"
                nzBackfill
                #auto
              ></nz-autocomplete> -->
            </nz-form-control>
          </nz-form-item>

          <!-- so dien thoai -->

          <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3" nzRequired
              >Số điện thoại</nz-form-label
            >
            <nz-form-control [nzErrorTip]="phoneErrorTpl">
              <input
                class="tw-rounded-md tw-w-[70%]"
                nz-input
                placeholder="Nhập số điện thoại"
              />
            </nz-form-control>
            <ng-template #phoneErrorTpl let-control>
              <ng-container *ngIf="control.hasError('trimRequired')">
                Vui lòng nhập sđt
              </ng-container>
              <ng-container
                *ngIf="
                  control.hasError('minlength') &&
                  !control.hasError('trimRequired')
                "
              >
                Sđt gồm 10 số
              </ng-container>
              <ng-container
                *ngIf="
                  control.hasError('maxlength') &&
                  !control.hasError('minlength')
                "
              >
              Sđt gồm 10 số
              </ng-container>
            </ng-template>
          </nz-form-item>
          <!-- gioi tinh -->
          <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3" nzRequired>Giới tính</nz-form-label>
            <nz-form-control nzErrorTip="Chọn giới tính">
              <nz-select
                class="tw-w-[70%]"
                nzPlaceHolder="Chọn giới tính"
              >
                <nz-option nzValue="NAM" nzLabel="Nam"></nz-option>
                <nz-option nzValue="NU" nzLabel="Nữ"></nz-option>
              </nz-select>
            </nz-form-control>
          </nz-form-item>
          <!-- ngay sinh -->
          <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3" nzRequired>Ngày sinh</nz-form-label>
            <nz-form-control nzErrorTip="Chọn ngày sinh">
              <nz-date-picker
              [nzDisabledDate]="disabledDate"
                class="tw-w-[70%]"
              ></nz-date-picker>
            </nz-form-control>
          </nz-form-item>
        </div>
        <!-- <nz-divider></nz-divider> -->

        <div nz-row class="tw-ml-[12%]">
          <!-- <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3" nzRequired>Chi nhánh</nz-form-label>
            <nz-form-control>
              <nz-select
                class="tw-w-[70%]"
                [formControl]="form.controls.branch"
                nzShowSearch="true"
                nzServerSearch="false"
                (nzOnSearch)="onSeachBranchName($event)"
                (nzSelectChange)="onChangeLicense($event)"
              >
                <nz-option
                  *ngFor="let option of vm.branchNameData.values"
                  [nzValue]="option.branchId"
                  [nzLabel]="option.branchName"
                ></nz-option>
              </nz-select>
            </nz-form-control>
          </nz-form-item> -->
          <!-- <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3">Địa chỉ chi nhánh</nz-form-label>
            <nz-form-control>
              <input class="tw-rounded-md tw-w-[70%]" nz-input [formControl]="form.controls.branchAddress" />
            </nz-form-control>
          </nz-form-item> -->
          <!-- ca -->
          <!-- <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3"
              >Số lượng nhân viên của chi nhánh</nz-form-label
            >
            <nz-form-control>
            <input class="tw-rounded-md tw-w-[70%]" nz-input [formControl]="form.controls.numberStaffs" />
            </nz-form-control>
          </nz-form-item> -->
          <!-- chuc vu -->
          <nz-form-item nz-col nzSpan="12" class="">
            <nz-form-label class="tw-ml-3" nzRequired>Chức vụ</nz-form-label>
            <nz-form-control>
              <nz-select
              (nzSelectChange)="onChangeLicense()"
                class="tw-w-[70%]"
              >
                <nz-option nzValue="OPERATOR_STAFF" nzLabel="Nhân viên"></nz-option>
                <nz-option
                  nzValue="RECEPTIONIST"
                  nzLabel="Lễ Tân"
                ></nz-option>
                <nz-option
                  nzValue="BRANCHMANAGER"
                  nzLabel="Quản lý chi nhánh"
                ></nz-option>
              </nz-select>
            </nz-form-control>
          </nz-form-item>
        </div>
      </form>
    </div>
    <div *nzModalFooter>
      <button nz-button nzType="default" (click)="onDestroyModal()">Trở lại</button>
      <button nz-button nzType="primary" (click)="onSubmit()">Ok</button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountAddModalComponent implements OnInit {

  @Input() form!: FormGroup<AccountAddApi.RequestFormGroup>;
  @Output() clickSubmit = new EventEmitter<void>();
  vm$ = this.aStore.state$;

  constructor(private _nzModalRef: NzModalRef, private _cdr: ChangeDetectorRef, public aStore: AccountStore) {}

  ngOnInit() {
  }

  onSubmit() {
    this.clickSubmit.emit();
  }

  onDestroyModal() {
    this._nzModalRef.destroy();
  }

  today = new Date();

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > -6570;


onChangeLicense() {
  }

  getAddress(event: Event) {

  }

}
