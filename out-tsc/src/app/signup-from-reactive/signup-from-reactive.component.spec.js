import { async, TestBed } from '@angular/core/testing';
import { SignupFromReactiveComponent } from './signup-from-reactive.component';
describe('SignupFromReactiveComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SignupFromReactiveComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SignupFromReactiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=signup-from-reactive.component.spec.js.map