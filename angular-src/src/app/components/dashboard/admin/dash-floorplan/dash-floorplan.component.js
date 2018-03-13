"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DashFloorplanComponent = (function () {
    function DashFloorplanComponent(router, activeRouter, authService, projectProvider, userProvider, floorService, values, flashMessagesService, snackBarRef) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.authService = authService;
        this.projectProvider = projectProvider;
        this.userProvider = userProvider;
        this.floorService = floorService;
        this.values = values;
        this.flashMessagesService = flashMessagesService;
        this.snackBarRef = snackBarRef;
        this.floorplan = { name: "default" };
        this.pins = [];
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
        this.pins.push(context.createMarker([0, 0]));
        this.pins.push(context.createMarker([50, 50]));
        this.pins.push(context.createMarker([75, 75]).setData("baby"));
        context.draw();
    };
    DashFloorplanComponent.prototype.onSelected = function (marker) {
        console.log(marker);
    };
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
