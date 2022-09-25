import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailDuplicateValidation(data : any) : ValidatorFn { 
  return (control : AbstractControl) : ValidationErrors | null => {
    const match = data.find((element : any) => element['email'] == control.value);
    return match ? { emailDuplicated: {value : control.value}} : null;
  }
}