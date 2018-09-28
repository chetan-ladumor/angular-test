var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.sendRecord = new EventEmitter();
    }
    ChildComponent.prototype.sendAllReocrds = function () {
        var selectedEmployee = {
            selectedName: this.cName,
            selecteedCity: this.cCity,
        };
        this.sendRecord.emit(selectedEmployee); //emiting an event
    };
    ChildComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "cName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "cCity", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ChildComponent.prototype, "sendRecord", void 0);
    ChildComponent = __decorate([
        Component({
            selector: 'app-child',
            templateUrl: './child.component.html',
            styleUrls: ['./child.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());
export { ChildComponent };
//# sourceMappingURL=child.component.js.map