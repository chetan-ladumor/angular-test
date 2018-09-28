var UsernameValidators = /** @class */ (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    UsernameValidators.shouldBeUnique = function (control) {
        // hear we have a issue: this function is always returns null so we can not use this function inside component
        //when we involve asynchronous operation in validators we need to use different signature for the validator function
        setTimeout(function () {
            console.log('ok');
            if (control.value === 'chetan') {
                return { shouldBeUnique: true };
            }
            return null;
        }, 2000);
        return null;
    };
    return UsernameValidators;
}());
export { UsernameValidators };
//# sourceMappingURL=username.validators.js.map