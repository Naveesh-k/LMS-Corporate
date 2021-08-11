"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistersComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegistersComponent = /** @class */ (function () {
    function RegistersComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.showF = false;
        this.showS = false;
        this.showT = false;
    }
    RegistersComponent.prototype.ngOnInit = function () {
        this.signForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            // validates date format yyyy-mm-dd
            dob: ['', [forms_1.Validators.required, forms_1.Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required],
            acceptTerms: [false, forms_1.Validators.requiredTrue]
        }, {
        // validator: MustMatch('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegistersComponent.prototype, "f", {
        get: function () { return this.signForm.controls; },
        enumerable: false,
        configurable: true
    });
    RegistersComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.signForm.invalid) {
            return;
        }
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signForm.value, null, 4));
    };
    RegistersComponent.prototype.onReset = function () {
        this.submitted = false;
        this.signForm.reset();
    };
    // ---------- Show Hide 
    RegistersComponent.prototype.fShow = function () {
        this.showF = false;
        this.showS = false;
        this.showT = false;
    };
    RegistersComponent.prototype.sShow = function () {
        this.showS = true;
        this.showT = false;
        this.showF = false;
    };
    RegistersComponent.prototype.tShow = function () {
        this.showT = true;
        this.showS = false;
        this.showF = false;
    };
    RegistersComponent = __decorate([
        core_1.Component({
            selector: 'app-registers',
            templateUrl: './registers.component.html',
            styleUrls: ['./registers.component.scss']
        })
    ], RegistersComponent);
    return RegistersComponent;
}());
exports.RegistersComponent = RegistersComponent;
