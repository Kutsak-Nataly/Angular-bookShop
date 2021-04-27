import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const checkBoxValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  let counter = 0;
  const controlsArray: string[] = Object.keys(formGroup.controls);
  controlsArray.map(key => {
    const control = formGroup.controls[key];
    if (control.value === true) {
      counter++;
    }
  });
  return counter < 1 ? {checkBoxChecked: true} : null;
};
