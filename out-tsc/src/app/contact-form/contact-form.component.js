var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.contactMethods = [
            { id: 1, name: 'email' },
            { id: 2, name: 'phone' }
        ];
    }
    ContactFormComponent.prototype.log = function (name) {
        console.log(name);
    };
    ContactFormComponent.prototype.submit = function (f) {
        console.log(f);
    };
    ContactFormComponent = __decorate([
        Component({
            selector: 'app-contact-form',
            templateUrl: './contact-form.component.html',
            styleUrls: ['./contact-form.component.css']
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());
export { ContactFormComponent };
//# sourceMappingURL=contact-form.component.js.map