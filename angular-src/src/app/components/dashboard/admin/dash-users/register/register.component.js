"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var material_1 = require("@angular/material");
var util_component_1 = require("../../../../util.component");
var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, userProvider, authService, router, dialog, dialogRef, data) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.userProvider = userProvider;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.disable_roles = false;
        this.disable_info = false;
        this.disable_isadmin = true;
        this.can_delete = true;
        this.submitText = "Register";
        /** Needed for Google Email Validator **/
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.deleteDialogData = {
            data: {},
            message: "Are you sure you wan to delete this user?",
            title: "Delete User",
            yes: "Yes",
            no: "No"
        };
        this.model = this.initUser();
        this.authService.getProfile().subscribe(function (result) {
            if (!result.user.roles.manage_users) {
                _this.emailFormControl.disable();
            }
            _this.disable_roles = !result.user.roles.manage_roles;
            _this.disable_info = !result.user.roles.manage_users;
            _this.disable_isadmin = !result.user.isadmin;
            _this.can_delete =
                result.user.roles.manage_users &&
                    result.user.roles.manage_roles &&
                    result.user.roles.manage_projects &&
                    result.user.isadmin;
        });
        if (this.data) {
            this.userProvider.getUser(this.data.id).subscribe(function (data) {
                if (!data.success) {
                    _this.dialogRef.close({ success: false, message: data.message });
                }
                else {
                    _this.model = data.user;
                    _this.submitText = "Update";
                }
            });
        }
        //    this.model.name = "Hello Boys";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //Required Fields
        if (!this.validateService.validateRegister(this.model)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(this.model.email)) {
            this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Submission
        if (this.data) {
            //Update User
            this.userProvider.updateUser(this.model).subscribe(function (data) {
                if (data.success) {
                    _this.model = _this.initUser();
                    _this.dialogRef.close({ success: true });
                }
                else {
                    _this.flashMessagesService.show('Error performing update ' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            //Register User
            this.userProvider.registerUser(this.model).subscribe(function (data) {
                if (data.success) {
                    //this.flashMessagesService.show('Registration successful',
                    //{cssClass: 'alert-success', timeout: 3000});
                    _this.model = _this.initUser();
                    _this.dialogRef.close({ success: true });
                }
                else {
                    _this.flashMessagesService.show('Error Registering User ' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    RegisterComponent.prototype.openDeleteDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(util_component_1.YesNoDialogComponent, {
            width: '250px',
            data: this.deleteDialogData
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.agree) {
                    _this.userProvider.deleteUser(_this.model).subscribe(function (data) {
                        if (data.success) {
                            _this.model = _this.initUser();
                            _this.dialogRef.close({ success: true });
                        }
                        else {
                            _this.flashMessagesService.show('Error deleting User ' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                        }
                    });
                }
                else {
                }
            }
        });
    };
    RegisterComponent.prototype.initUser = function () {
        var newuser = {
            name: "",
            username: "",
            email: "",
            roles: {
                manage_users: false,
                manage_roles: false,
                manage_projects: false
            },
            isadmin: false
        };
        return newuser;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __param(7, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
