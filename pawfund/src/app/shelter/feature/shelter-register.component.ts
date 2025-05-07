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
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { provideComponentStore } from '@ngrx/component-store';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  AccountAddApi,
  AccountUpdateApi,
} from 'src/app/register/data-access/model/account-api.model';
import { AccountStore } from 'src/app/register/data-access/store/account.store';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';

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
    NzStepsModule,
    NzRadioModule,
    NzUploadModule,
  ],
  providers: [provideComponentStore(AccountStore), NzMessageService],
  template: `
    <div nz-row>
      <div nz-col nzSpan="20" nzOffset="2" class="tw-mt-[100px]">
        <div>
          <nz-steps [nzCurrent]="current">
            <nz-step nzTitle="Khảo sát"></nz-step>
            <nz-step nzTitle="Thông tin trung tâm"></nz-step>
            <nz-step nzTitle="Giấy tờ hoạt động"></nz-step>
          </nz-steps>

          <form nz-form nzLabelAlign="left">
            <!-- Thông tin -->
            <div class="steps-content" *ngIf="current === 1">
              <div class="tw-pl-[10%]">
                <!-- Tên trung tâm -->
                <nz-form-item>
                  <nz-form-label
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                    [nzSm]="6"
                    [nzXs]="24"
                    >Tên trung tâm</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Nhập tên trung tâm"
                    [nzSm]="14"
                    [nzXs]="24"
                  >
                    <nz-input-group [nzSuffixIcon]="'user'">
                      <input type="text" nz-input placeholder="Trung tâm..." />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>

                <!-- Địa chỉ -->
                <nz-form-item>
                  <nz-form-label
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                    [nzSm]="6"
                    [nzXs]="24"
                    >Địa chỉ</nz-form-label
                  >
                  <nz-form-control
                    [nzSm]="14"
                    [nzXs]="24"
                    nzErrorTip="Nhập địa chỉ"
                  >
                    <nz-input-group [nzSuffixIcon]="'audit'">
                      <input
                        type="text"
                        nz-input
                        placeholder="111 Nguyen Van..."
                      />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>

                <!-- email -->

                <nz-form-item>
                  <nz-form-label
                    [nzSm]="6"
                    [nzXs]="24"
                    nzRequired
                    nzFor="email"
                    class="tw-font-bold tw-text-xl"
                    >Email</nz-form-label
                  >
                  <nz-form-control
                    [nzSm]="14"
                    [nzXs]="24"
                    [nzErrorTip]="emailErrorTpl"
                  >
                    <nz-input-group [nzSuffixIcon]="'mail'">
                      <input
                        type="text"
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

                <nz-form-item>
                  <nz-form-label
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                    [nzSm]="6"
                    [nzXs]="24"
                    >Hotline</nz-form-label
                  >
                  <nz-form-control
                    [nzErrorTip]="phoneErrorTpl"
                    [nzSm]="14"
                    [nzXs]="24"
                  >
                    <nz-input-group [nzSuffixIcon]="'phone'">
                      <input
                        type="text"
                        appOnlyNumber
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

                <!-- ngày thành lập -->
                <nz-form-item>
                  <nz-form-label
                    [nzSm]="6"
                    [nzXs]="24"
                    nzRequired
                    class="tw-font-bold tw-text-xl"
                  >
                    Ngày thành lập
                  </nz-form-label>
                  <nz-form-control
                    [nzSm]="14"
                    [nzXs]="24"
                    nzErrorTip="Chọn ngày thành lập"
                  >
                    <div class="w-full">
                      <nz-date-picker style=" width: 100% "></nz-date-picker>
                    </div>
                  </nz-form-control>
                </nz-form-item>
              </div>
            </div>

            <!-- Khảo sát -->
            <div class="steps-content" *ngIf="current === 0">
              <div class="tw-pl-[10%]">
                <!-- câu 1 -->
                <nz-form-item class="custom-label">
                  <nz-form-label
                    nzRequired
                    nzLabelWrap
                    class="tw-font-bold tw-text-xl tw-pr-[10px]"
                    [nzSm]="24"
                    [nzXs]="24"
                    >1. Bạn có hợp đồng nhận nuôi để chuyển quyền chăm sóc thú
                    cưng từ tổ chức sang người nhận nuôi không?</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Vui lòng chọn"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <nz-radio-group>
                      <label nz-radio nzValue="Yes">Có</label>
                      <label nz-radio nzValue="No">Không</label>
                    </nz-radio-group>
                  </nz-form-control>
                </nz-form-item>

                <!-- câu 2 -->

                <nz-form-item class="custom-label">
                  <nz-form-label
                    nzRequired
                    nzLabelWrap
                    class="tw-font-bold tw-text-xl tw-pr-[10px]"
                    [nzSm]="24"
                    [nzXs]="24"
                    >2. Vui lòng mô tả cách các bạn tiếp nhận thú cưng bị bỏ
                    rơi/bị thương và các bước chăm sóc, điều trị sau khi tiếp
                    nhận.</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Vui lòng chọn"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <textarea class="tw-w-[70%]" rows="4" nz-input></textarea>
                  </nz-form-control>
                </nz-form-item>

                <!-- câu 3 -->

                <nz-form-item class="custom-label">
                  <nz-form-label
                    nzRequired
                    nzLabelWrap
                    class="tw-font-bold tw-text-xl tw-pr-[10px]"
                    [nzSm]="24"
                    [nzXs]="24"
                    >3. Ước tính tổ chức của bạn hiện có bao nhiêu thú cưng đang
                    chờ được nhận nuôi?</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Vui lòng chọn"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <input class="tw-w-[70%]" type="text" nz-input />
                  </nz-form-control>
                </nz-form-item>
                <!-- câu 2 -->

                <nz-form-item class="custom-label">
                  <nz-form-label
                    nzRequired
                    nzLabelWrap
                    class="tw-font-bold tw-text-xl tw-pr-[10px]"
                    [nzSm]="24"
                    [nzXs]="24"
                    >4. Vui lòng mô tả cách các bạn tiếp nhận thú cưng bị bỏ
                    rơi/bị thương và các bước chăm sóc, điều trị sau khi tiếp
                    nhận.</nz-form-label
                  >
                  <nz-form-control
                    nzErrorTip="Vui lòng chọn"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <textarea class="tw-w-[70%]" rows="4" nz-input></textarea>
                  </nz-form-control>
                </nz-form-item>
              </div>
            </div>
            <!-- Giấy tờ -->

            <div class="steps-content tw-text-center" *ngIf="current === 2">
              <div class="tw-pl-[20%]">
                <nz-form-item>
                  <nz-form-control
                    nzErrorTip="Vui lòng chọn"
                    [nzSm]="24"
                    [nzXs]="24"
                  >
                    <div class="tw-w-[70%]">
                      <nz-upload
                        nzType="drag"
                        [nzMultiple]="true"
                        nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        (nzChange)="handleChange($event)"
                      >
                        <p class="ant-upload-drag-icon">
                          <span nz-icon nzType="inbox"></span>
                        </p>
                        <p class="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p class="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit
                          from uploading company data or other band files
                        </p>
                      </nz-upload>
                    </div>
                  </nz-form-control>
                </nz-form-item>
              </div>
            </div>
          </form>

          <div class="steps-action tw-text-right">
            <button
              nz-button
              nzType="default"
              (click)="pre()"
              *ngIf="current > 0"
            >
              <span>Trở lại</span>
            </button>
            <button
              nz-button
              nzType="default"
              (click)="next()"
              *ngIf="current < 2"
            >
              <span>Tiếp tục</span>
            </button>
            <button
              nz-button
              nzType="default"
              (click)="next()"
              *ngIf="current === 2"
            >
              <span>Gửi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .steps-content {
        margin-top: 10px;
        border: 1px solid #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        padding-top: 20px;
      }

      .steps-action {
        margin-top: 24px;
      }

      button {
        margin-right: 8px;
      }

      [nz-radio] {
        display: block;
        height: 32px;
        line-height: 32px;
      }
      .custom-label ::ng-deep .ant-form-item-required {
        height: auto !important;
        display: contents !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShelterRegisterComponent {
  constructor(public aStore: AccountStore) {}

  onChangeLicense() {}

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
    this.changeContent();
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
    } else if (status === 'error') {
    }
  }
}
