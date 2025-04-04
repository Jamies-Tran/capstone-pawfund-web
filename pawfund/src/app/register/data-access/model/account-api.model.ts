import { FormControl, FormGroup } from '@angular/forms';

export namespace AccountAddApi {
  export interface Request {
    firstName: string;
    lastName: string;
    identification: string;
    phone: string;
    email: string;
    password: string;
    address: string;
    dateOfBirth: string;
    genderCode: string;
    genderName: string;
    medias: medias[] | null;
  }

  export type RequestFormGroup = {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    identification: FormControl<string>;
    phone: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    rePassword: FormControl<string>;
    genderCode: FormControl<string>;
    genderName: FormControl<string>;
    dateOfBirth: FormControl<string>;
    address: FormControl<string>;
    medias: FormControl<medias[] | null>;
  };

  export type medias = { url: string; isThumbnail: boolean };

  export function mapModel(form: FormGroup<RequestFormGroup>) {
    const formValue = form.getRawValue();
    return {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      identification: formValue.identification,
      phone: formValue.phone,
      email: formValue.email,
      password: formValue.password,
      rePassword: formValue.rePassword,
      genderCode: formValue.genderCode,
      genderName: formValue.genderName,
      dateOfBirth: formValue.dateOfBirth,
      address: formValue.address,
      medias: formValue.medias,
    };
  }
}

export namespace AccountVerifyApi {
  export interface Request {
    email: string | null;
    verificationCode: string
  }

  export interface RequestFormGroup {
    email: FormControl<string | null>;
    verificationCode: FormControl<string>
  }

  export function mapModel(form: FormGroup<RequestFormGroup>) {
    const formValue = form.getRawValue();
    return {
      email: formValue.email,
      verificationCode: formValue.verificationCode
    };
  }
}

export namespace AccountPagingApi {
  export interface Request {
    search: string;
    role: string;
    current: number;
    pageSize: number;
    sorter: string;
    branchId: string;
    orderDescending: boolean;
  }

  export interface Response {
    accountId: number;
    accountStatusCode: string;
    accountStatusName: string;
    address: string;
    branchId: string;
    dob: string;
    firstName: string;
    genderCode: string;
    genderName: string;
    lastName: string;
    phone: string;
    professionalTypeCode: string;
    professionalTypeName: string;
    roleCode: string;
    roleName: string;
    staffCode: string;
    thumbnail: string;
  }
}

export namespace AccountUpdateApi {
  export interface Request {
    firstName: string;
    lastName: string;
    identification: string;
    phone: string;
    email: string;
    password: string;
    address: string;
    dateOfBirth: string;
    genderCode: string;
    genderName: string;
    medias: {
      url: string;
      isThumbnail: boolean;
    }[];
  }

  export type RequestFormGroup = {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    identification: FormControl<string>;
    phone: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    rePassword: FormControl<string>;
    genderCode: FormControl<string>;
    genderName: FormControl<string>;
    dateOfBirth: FormControl<string>;
    address: FormControl<string>;
    medias: FormControl<string[]>;
  };

  export interface Response {
    value: {
      firstName: string;
      lastName: string;
      phone: string;
      address: string;
      gender: string;
      dob: string;
      branch: number;
      professional: string;
      thumbnailUrl: string;
    } | null;
  }
}

export namespace ScheduleGetApi {
  export interface Response {
    values: {
      scheduleId: number;
      staffId: number;
      shift: string;
      workingDate: string;
      scheduleStatus: string;
    }[];
  }
}
