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
var material_1 = require("@angular/material");
var util_component_1 = require("../../../util.component");
var forms_1 = require("@angular/forms");
var DashProjectDialogComponents = (function () {
    function DashProjectDialogComponents(validateService, flashMessagesService, projectProvider, userProvider, authService, dialog, dialogRef, data) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.projectProvider = projectProvider;
        this.userProvider = userProvider;
        this.authService = authService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.disable_info = false;
        this.can_delete = true;
        this.submitText = "Create Project";
        /** Needed for Google Email Validator **/
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.deleteDialogData = {
            data: {},
            message: "Are you sure you wan to delete this project?",
            title: "Delete Project",
            yes: "Yes",
            no: "No"
        };
        this.model = this.initProject();
        this.authService.getProfile().subscribe(function (result) {
            if (!result.user.roles.manage_projects) {
                _this.emailFormControl.disable();
            }
            _this.disable_info = !result.user.roles.manage_projects;
            _this.can_delete =
                result.user.roles.manage_users &&
                    result.user.roles.manage_roles &&
                    result.user.roles.manage_projects &&
                    result.user.isadmin;
        });
        userProvider.getUsers().subscribe(function (result) {
            _this.users = result;
        });
        if (this.data) {
            this.projectProvider.getProject(this.data.id).subscribe(function (data) {
                if (!data.success) {
                    _this.dialogRef.close({ success: false, message: data.message });
                }
                else {
                    _this.model = data.project;
                    _this.submitText = "Update Project";
                }
            });
        }
        //    this.model.name = "Hello Boys";
    }
    DashProjectDialogComponents.prototype.ngOnInit = function () {
    };
    DashProjectDialogComponents.prototype.onRegisterSubmit = function () {
        var _this = this;
        //Required Fields
        if (!this.validateService.validateProjectRegistration(this.model)) {
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
            this.projectProvider.updateproject(this.model).subscribe(function (data) {
                if (data.success) {
                    _this.model = _this.initProject();
                    _this.dialogRef.close({ success: true });
                }
                else {
                    _this.flashMessagesService.show('Error performing update ' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            //Register User
            this.projectProvider.registerProject(this.model).subscribe(function (data) {
                if (data.success) {
                    //this.flashMessagesService.show('Registration successful',
                    //{cssClass: 'alert-success', timeout: 3000});
                    _this.model = _this.initProject();
                    _this.dialogRef.close({ success: true });
                }
                else {
                    _this.flashMessagesService.show('Error Registering User ' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    DashProjectDialogComponents.prototype.openDeleteDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(util_component_1.YesNoDialogComponent, {
            width: '350px',
            data: this.deleteDialogData
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.agree) {
                    _this.projectProvider.deleteProject(_this.model).subscribe(function (data) {
                        if (data.success) {
                            _this.model = _this.initProject();
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
    DashProjectDialogComponents.prototype.gotoProjectHome = function () {
        this.dialogRef.close({ navigate: true, id: this.model._id });
        //this.router.navigate(["./project", this.model.id],{relativeTo: this.r});
    };
    DashProjectDialogComponents.prototype.initProject = function () {
        var newProject = {
            name: "",
            email: "",
            description: ""
        };
        return newProject;
    };
    DashProjectDialogComponents = __decorate([
        core_1.Component({
            selector: 'dash-project-dialog',
            template: "<main>\n    <div class=\"container\">\n\n      <form (submit)=\"onRegisterSubmit()\"  class=\"custom-form\">\n\n\n        <div  >\n\n          <h4>Project Details</h4>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"Name *\" [(ngModel)]=\"model.name\"  name=\"name\"  id=\"name\" [disabled]=\"disable_info\" >\n          </mat-form-field>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"E-Mail*\" [formControl]=\"emailFormControl\" [(ngModel)]=\"model.email\" name=\"email\" id=\"email\" [disabled]=\"disable_info\">\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          \n          <mat-form-field class=\"input-full-width\">\n            <textarea matInput placeholder=\"Description\" [(ngModel)]=\"model.description\"  name=\"description\" id=\"description\"  [disabled]=\"disable_info\" rows=\"7\"></textarea>\n          </mat-form-field>\n\n        </div>\n\n        <br/>\n\n        <br/>\n\n        <div class=\"row\">\n\n          <div class=\"col-4\">\n            <input *ngIf=\"!inputs_disabled\" type=\"submit\" class=\"btn btn-primary\" value=\"{{submitText}}\" >\n          </div>\n          \n          <div class=\"col\" *ngIf=\"data\">\n            <div style=\"float: right\" *ngIf=\"can_delete\">\n              <button  mat-raised-button color=\"warn\" [disabled]=\"!can_delete\" type=\"button\" class=\"btn btn-primary\" (click)=\"openDeleteDialog()\">Delete</button>\n            </div>\n          </div>\n\n        </div>\n\n\n      </form>\n\n      <br/>\n      <br/>\n      <button *ngIf=\"data\" mat-button color=\"primary\" (click)=\"gotoProjectHome()\">Go to {{model.name}}'s home</button>\n    </div>\n\n  </main>"
        }),
        __param(7, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], DashProjectDialogComponents);
    return DashProjectDialogComponents;
}());
exports.DashProjectDialogComponents = DashProjectDialogComponents;
