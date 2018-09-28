import { ErrorHandler } from "@angular/core/src/error_handler";


export class AppErrorhandler implements ErrorHandler {
    handleError(error) {
        alert("An Unexpected Error Occured..");
        console.log(error)
    }
}