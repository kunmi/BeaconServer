"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng2_img_map_1 = require("../../../plugin/ng2-img-map");
var util_component_1 = require("../../../util.component");
var DashFloorplanComponent = (function () {
    function DashFloorplanComponent(router, activeRouter, authService, projectProvider, userProvider, floorService, values, flashMessagesService, snackBarRef, dialog) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.authService = authService;
        this.projectProvider = projectProvider;
        this.userProvider = userProvider;
        this.floorService = floorService;
        this.values = values;
        this.flashMessagesService = flashMessagesService;
        this.snackBarRef = snackBarRef;
        this.dialog = dialog;
        this.floorplan = { name: "default" };
        this.pins = [];
        this.deleteDialogData = {
            data: {},
            message: "Are you sure you wan to remove this floorplan? if you do, you will lose all beacon assignments!!",
            title: "Remove floor plan from Project",
            yes: "Yes",
            no: "No"
        };
    }
    DashFloorplanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (result) {
            if (result) {
                if (result.user) {
                    if (!result.user.isadmin) {
                        _this.router.navigate(["../"], { relativeTo: _this.activeRouter.parent });
                    }
                    _this.activeRouter.params.subscribe(function (params) {
                        _this.floorService.getFloorPlan(params['floorplanid'], params['projectid']).subscribe(function (data) {
                            if (data) {
                                _this.presentProject = data.data.project;
                                _this.floorplan = data.data.floorplan;
                            }
                            else {
                            }
                        });
                    });
                }
            }
            else {
            }
        });
    };
    DashFloorplanComponent.prototype.floorplanAppeared = function (context) {
        this.floorplanContext = context;
        context.imageSmoothingQuality = "high";
        context.imageSmoothingEnabled = true;
        context.draggable = true;
        var m = context.createMarker([51, 52]);
        m.size = 49;
        m.setAsComposite(this.icon.nativeElement, ng2_img_map_1.ShapeType.Circle, 40, 40);
        //this.pins.push(context.createMarker([0, 0]);
        this.pins.push(m);
        //this.pins.push(context.createMarker([75, 75]).setData("baby"));
        context.draw();
    };
    DashFloorplanComponent.prototype.onSelected = function (marker) {
        console.log(marker);
    };
    DashFloorplanComponent.prototype.deleteFloorPlan = function () {
        var _this = this;
        var dialogRef = this.dialog.open(util_component_1.YesNoDialogComponent, {
            width: '450px',
            data: this.deleteDialogData
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.agree) {
                    _this.floorService;
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
    __decorate([
        core_1.ViewChild('icon')
    ], DashFloorplanComponent.prototype, "icon", void 0);
    DashFloorplanComponent = __decorate([
        core_1.Component({
            selector: 'app-dash-floorplan',
            templateUrl: './dash-floorplan.component.html',
            styleUrls: ['./dash-floorplan.component.css']
        })
    ], DashFloorplanComponent);
    return DashFloorplanComponent;
}());
exports.DashFloorplanComponent = DashFloorplanComponent;
