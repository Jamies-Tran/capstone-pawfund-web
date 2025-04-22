import { FormControl, FormGroup } from '@angular/forms';

export namespace ProfileGetApi {
  export interface Response {
    data: {
      accountId: string;
      firstName: string;
      lastName: string;
      identification: string;
      email: string;
      phone: string;
      address: string;
      dateOfBirth: string;
      genderCode: string;
      genderName: string;
      roles: any[];
      statusCode: string;
      statusName: string;
      medias: any[];
    };
  }
}

export namespace ProfileUpdateApi {
  export interface Request {
    firstName: string;
    lastName: string;
    identification: string;
    email: string;
    phone: string;
    address: string;
    dateOfBirth: string;
    genderCode: string;
    genderName: string;
    medias: any[] | null;
  }

  export type RequestFormGroup = {
    accountId: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    identification: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    address: FormControl<string>;
    dateOfBirth: FormControl<string>;
    genderCode: FormControl<string>;
    genderName: FormControl<string>;
    medias: FormControl<any[] | null>;
  };

  export function mapModel(form: FormGroup<RequestFormGroup>) {
    const formValue = form.getRawValue();
    return {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      identification: formValue.identification,
      email: formValue.email,
      phone: formValue.phone,
      address: formValue.address,
      dateOfBirth: formValue.dateOfBirth,
      genderCode: formValue.genderCode,
      genderName: formValue.genderName,
      medias: formValue.medias,
    };
  }
}
