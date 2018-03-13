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
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var YesNoDialogComponent = (function () {
    function YesNoDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    YesNoDialogComponent.prototype.onYesClick = function () {
        this.dialogRef.close({ agree: true });
    };
    YesNoDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close({ agree: false });
    };
    YesNoDialogComponent = __decorate([
        core_1.Component({
            selector: 'yes-no-dialog',
            template: "\n  \n  <h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p [innerHTML]=\"data.message\"></p>\n<br/>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" cdkFocusInitial>{{data.no}}</button>\n  <button mat-button (click)=\"onYesClick()\"  >{{data.yes}}</button>\n</div>\n  ",
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], YesNoDialogComponent);
    return YesNoDialogComponent;
}());
exports.YesNoDialogComponent = YesNoDialogComponent;
var InfoDialogComponent = (function () {
    function InfoDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    InfoDialogComponent.prototype.onYesClick = function () {
        this.dialogRef.close({ agree: true });
    };
    InfoDialogComponent = __decorate([
        core_1.Component({
            selector: 'info-dialog',
            template: "    \n  <h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p [innerHTML]=\"data.message\"></p>\n<br/>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onYesClick()\"  >{{data.yes}}</button>\n</div>\n  ",
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], InfoDialogComponent);
    return InfoDialogComponent;
}());
exports.InfoDialogComponent = InfoDialogComponent;
