import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";   

export function postalCodeValidator(): ValidatorFn{
 
    return (control: AbstractControl): ValidationErrors | null =>{
        if (!control.value == null ){
            if (!control.value.match(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/)){
                return{canadaFormat: true}
            }else
                return null;
        }else 
        return null;
       
    }
}

export function emptyField(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
        if (!control.get('resName')?.value === null){
            return{canadaFormat: true}
        }else if (control.get('resPhone')?.value === null){
            return{canadaFormat: true}
        }else  if (control.get('resAddress')?.value === null){
            return{canadaFormat: true}
        }else  if (control.get('postalCode')?.value === null){
            return{canadaFormat: true}
        }else  if (control.get('city')?.value === null){
            return{canadaFormat: true}
        }else  if (control.get('email')?.value === null){
            return{canadaFormat: true}
        }else  if (control.get('resServices')?.value === null){
            return{canadaFormat: true}
        }
            return null;
    }
}
