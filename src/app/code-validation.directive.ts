import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function codeValidation(element : string) : ValidatorFn { 

  return (control : AbstractControl) : ValidationErrors | null => {
    const match = (element == control.value);
    return match ? null : { codeMisMatch : {value : control.value}};
  }

}
