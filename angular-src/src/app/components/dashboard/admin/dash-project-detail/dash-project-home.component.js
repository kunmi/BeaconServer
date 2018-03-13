"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var util_component_1 = require("../../../util.component");
var project_image_dialog_components_1 = require("./project-image-dialog.components");
var DashProjectHomeComponent = (function () {
    function DashProjectHomeComponent(authservice, projectProvider, userProvider, router, activeRouter, dialog, flashMessagesService, snackBarRef, values) {
        var _this = this;
        this.authservice = authservice;
        this.projectProvider = projectProvider;
        this.userProvider = userProvider;
        this.router = router;
        this.activeRouter = activeRouter;
        this.dialog = dialog;
        this.flashMessagesService = flashMessagesService;
        this.snackBarRef = snackBarRef;
        this.values = values;
        this.selectable = true;
        this.projectUser = [];
        this.images = [];
        //Auto - complete
        this.users = [];
        this.myControl = new forms_1.FormControl();
        this.deleteDialogData = {
            data: {},
            message: "Are you sure you wan to remove this user? if you do, their present token will be decommissioned",
            title: "Remove user from Project",
            yes: "Yes",
            no: "No"
        };
        authservice.getProfile().subscribe(function (result) {
            if (result) {
                if (result.user) {
                    if (!result.user.isadmin) {
                        _this.router.navigate(["../"], { relativeTo: _this.activeRouter.parent });
                    }
                    _this.canManageProjects = result.user.roles.manage_projects;
                    _this.activeRouter.params.subscribe(function (params) {
                        _this.projectProvider.getProject(params['id']).subscribe(function (data) {
                            _this.presentProject = data.project;
                            _this.title = _this.presentProject.name;
                            _this.description = _this.presentProject.description;
                            _this.email = _this.presentProject.email;
                            _this.images = _this.presentProject.floorPlans;
                            _this.buildData(data.project.users);
                        });
                    });
                }
            }
            else {
            }
        });
    }
    DashProjectHomeComponent.prototype.ngOnInit = function () {
    };
    DashProjectHomeComponent.prototype.remove = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(util_component_1.YesNoDialogComponent, {
            width: '350px',
            data: this.deleteDialogData
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.agree) {
                    _this.projectProvider.removeFromProjects(user, _this.presentProject).subscribe(function (data) {
                        if (data) {
                            if (data.success) {
                                var index = _this.projectUser.indexOf(user);
                                if (index >= 0) {
                                    _this.projectUser.splice(index, 1);
                                }
                                _this.snackBarRef.open("User removed", "Close", {
                                    duration: 3000,
                                });
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                                return false;
                            }
                            return;
                        }
                        else {
                            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-danger', timeout: 3000 });
                            return false;
                        }
                    });
                }
                else {
                }
            }
        });
    };
    //Auto - complete
    DashProjectHomeComponent.prototype.filter = function (name) {
        return this.users.filter(function (option) {
            return option.username.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    DashProjectHomeComponent.prototype.displayFn = function (user) {
        return user ? user.name : "";
    };
    DashProjectHomeComponent.prototype.addUsertoProject = function () {
        var _this = this;
        if (this.myControl.value == undefined) {
            var infoDialogData = {
                message: "No user selected, please select a user using the proivided input field",
                title: "Please select a user",
                yes: "okay"
            };
            this.dialog.open(util_component_1.InfoDialogComponent, {
                width: '350px',
                data: infoDialogData
            });
        }
        else {
            this.projectProvider.addToProject(this.myControl.value, this.presentProject).subscribe(function (result) {
                if (result) {
                    if (result.success) {
                        _this.projectUser = [];
                        _this.buildData(result.users);
                        _this.snackBarRef.open("User added Successfully", "Close", {
                            duration: 3000,
                        });
                        _this.myControl.setValue({});
                        return;
                    }
                    else {
                        _this.flashMessagesService.show(result.msg, { cssClass: 'alert-warning', timeout: 3000 });
                        return true;
                    }
                }
                else {
                    _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            });
        }
    };
    DashProjectHomeComponent.prototype.buildData = function (allowed_users) {
        var _this = this;
        this.userProvider.getUsers().subscribe(function (allusers) {
            for (var y = 0; y < allowed_users.length; y++) {
                var current_user = allowed_users[y];
                for (var i = 0; i < allusers.length; i++) {
                    if (current_user.user_id == allusers[i]._id) {
                        var chosenUser = allusers[i];
                        chosenUser.token = current_user.token;
                        _this.projectUser.push(allusers[i]);
                        break;
                    }
                }
            }
            if (_this.canManageProjects) {
                _this.users = allusers;
                _this.filteredOptions = _this.myControl.valueChanges
                    .pipe(operators_1.startWith({}), operators_1.map(function (user) { return user && typeof user === 'object' ? user.name : user; }), operators_1.map(function (name) { return name ? _this.filter(name) : _this.users.slice(); }));
            }
        });
    };
    DashProjectHomeComponent.prototype.showInfo = function (user) {
        var infoDialogData = {
            message: "The assigned API token for " + user.name + " for this project (" + this.presentProject.name + ") is: <br><br>" +
                "<h5>Token: </h5> " + user.token,
            title: "Token Info",
            yes: "okay"
        };
        this.dialog.open(util_component_1.InfoDialogComponent, {
            width: '450px',
            data: infoDialogData
        });
    };
    /*   IMAGE UPLOAD SECTION   */
    DashProjectHomeComponent.prototype.openImageUploadDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(project_image_dialog_components_1.ProjectImageDialogComponent, {
            width: '500px',
            data: { id: this.presentProject._id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.success) {
                    _this.snackBarRef.open("Uploaded successful", "Close", {
                        duration: 3000,
                    });
                    _this.loadImages();
                }
            }
            console.log("The Dialog was closed");
        });
    };
    DashProjectHomeComponent.prototype.loadImages = function () {
        var _this = this;
        this.projectProvider.getImagesForProject(this.presentProject._id).subscribe(function (result) {
            if (result.success) {
                _this.images = result.images;
            }
        });
    };
    DashProjectHomeComponent.prototype.showFloorPlan = function (id) {
        this.router.navigate(['../', this.presentProject._id, "floorplan", id], { relativeTo: this.activeRouter });
    };
    DashProjectHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-dash-project-home',
            templateUrl: './dash-project-home.component.html',
            styleUrls: ['./dash-project-home.component.css']
        })
    ], DashProjectHomeComponent);
    return DashProjectHomeComponent;
}());
exports.DashProjectHomeComponent = DashProjectHomeComponent;
