import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";


export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if( (control.value as string).indexOf(' ') >= 0 )
        {
            return { cannotContainSpace: true };
        }
        return null;
    }

    // static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    //     // hear we have a issue: this function is always returns null so we can not use this function inside component
    //     //when we involve asynchronous operation in validators we need to use different signature for the validator function
    //     setTimeout( ()=>{
    //         console.log('ok');
    //         if(control.value=== 'chetan')
    //         {
    //             return { shouldBeUnique: true};
    //         }
    //         return null;
    //     },2000 );

    //     return null;
        
    // }

    // static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null {
        
    //     return new Promise( (resolve, reject)=>{
    //         setTimeout( ()=>{
    //             console.log('ok');
    //             if(control.value=== 'chetan')
    //             {
    //                 resolve( { shouldBeUnique: true} );
    //             }
    //             else
    //             {
    //                 resolve(null);
    //             }
                
    //         },2000 );

    //     } );

        
    // }
}