import { FormControl, FormGroup } from "@angular/forms";

export namespace LoginApi {
  export interface Request {
    email: string;
    password: string;
  }

  export type RequestFormGroup = {
    email: FormControl<string>,
    password: FormControl<string>
  }

  export function mapModel(form: FormGroup<RequestFormGroup>) {
      const formValue = form.getRawValue();
      return {
        email: formValue.email,
        password: formValue.password
      };
    }
}
