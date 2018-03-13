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
var forms_1 = require("@angular/forms");
var ProjectImageDialogComponent = (function () {
    function ProjectImageDialogComponent(validateService, flashMessagesService, projectProvider, userProvider, authService, dialog, dialogRef, fb, data) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.projectProvider = projectProvider;
        this.userProvider = userProvider;
        this.authService = authService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.disable_info = false;
        this.submitText = "Upload Image";
        this.images = [];
        this.upload = [];
        this.uploading = false;
        this.form = this.fb.group({
            'imageInput': new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.model = this.initProject();
        this.authService.getProfile().subscribe(function (result) {
            _this.disable_info = !result.user.roles.manage_projects;
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
    }
    ProjectImageDialogComponent.prototype.ngOnInit = function () {
    };
    ProjectImageDialogComponent.prototype.uploadImages = function () {
        var _this = this;
        this.uploading = true;
        var data = new FormData();
        if (this.files.length == 0)
            return;
        for (var i = 0; i < this.files.length; i++) {
            data.append("imageInput", this.files[i]);
        }
        this.projectProvider.addImagesToProject(this.data.id, data).subscribe(function (result) {
            _this.uploading = false;
            if (result.success) {
                _this.dialogRef.close({ success: true });
            }
            else {
                _this.flashMessagesService.show('Error occurred ' + result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
        //   let data = new FormData();
        //  data.append("projectID", this.data.id);
    };
    ProjectImageDialogComponent.prototype.onChange = function (event) {
        this.images = [].slice.call(event.target.files);
        this.files = event.target.files;
        //input.value = files.map(f => f.name).join(', ');
    };
    ProjectImageDialogComponent.prototype.initProject = function () {
        var newProject = {
            name: "",
            email: "",
            description: ""
        };
        return newProject;
    };
    ProjectImageDialogComponent = __decorate([
        core_1.Component({
            selector: 'dialog-image-upload',
            template: "<main>\n    <div class=\"container\">\n\n      <form [formGroup] = \"form\" (ngSubmit)=\"uploadImages()\" id=\"form\" enctype=\"multipart/form-data\">\n\n        <div  >\n\n          <h4>Upload Floorplan</h4>\n          <br/>\n\n          <mat-progress-bar mode=\"indeterminate\" *ngIf=\"uploading\"></mat-progress-bar>\n\n          <div *ngIf=\"!uploading\">\n\n            <input  id=\"imageInput\" name=\"imageInput\" type=\"file\" multiple (change)=\"onChange($event)\" formControlName=\"imageInput\"\n                    accept=\".jpg, .gif, .png\"\n                    required/>\n            <br/>\n            <br/>\n\n            <div *ngFor=\"let image of images; let i = index\" >\n\n              <span>{{image.name}}</span>\n\n            </div>\n\n            <br/>\n\n            <div class=\"row\">\n\n              <div class=\"col-4\">\n                <input *ngIf=\"!inputs_disabled\"  type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(images.length>0)\" value=\"Upload Image\" />\n              </div>\n              \n            </div>\n            \n          </div>\n            \n            \n          </div>\n          \n        \n\n        \n\n      </form>\n      \n    </div>\n\n  </main>"
        }),
        __param(8, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], ProjectImageDialogComponent);
    return ProjectImageDialogComponent;
}());
exports.ProjectImageDialogComponent = ProjectImageDialogComponent;
