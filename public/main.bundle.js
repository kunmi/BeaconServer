webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/components/dashboard/dashboard.module": [
		"../../../../../src/app/components/dashboard/dashboard.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_admin_dash_users_register_register_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_client_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_admin_dash_users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule' },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_client_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "\n   <!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<div class=\"container-fluid\" style=\"padding-top: 10px; padding-bottom: 20px\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_module__["DashboardModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */] // NOt sure I need this --> for Material
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__models_Values__["a" /* Values */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-beacon/beacon-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_component__ = __webpack_require__("../../../../../src/app/components/util.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var BeaconDialogComponent = (function () {
    function BeaconDialogComponent(validateService, flashMessagesService, userProvider, authService, dialog, dialogRef, fb, data) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.userProvider = userProvider;
        this.authService = authService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.model = {
            uuid: "",
            major: "",
            minor: "",
            ref: "",
            txPower: "",
            type: "iBeacon",
            nameSpaceId: "",
            instanceId: ""
        };
        this.align = 'start';
        this.disable_info = false;
        this.submitText = "Add Beacon";
        this.authService.getProfile().subscribe(function (result) {
            _this.disable_info = !result.user.roles.manage_projects;
        });
        if (this.data) {
            this.submitText = "Save";
            var beacon = this.data.beacon;
            this.model.txPower = beacon.txPower;
            this.model.ref = beacon.ref;
            this.model.type = beacon.type;
            if (beacon.type == "iBeacon") {
                this.model.uuid = beacon.uuid;
                this.model.major = beacon.major;
                this.model.minor = beacon.minor;
            }
            else {
                this.model.nameSpaceId = beacon.nameSpaceId;
                this.model.instanceId = beacon.instanceId;
            }
        }
    }
    BeaconDialogComponent.prototype.ngOnInit = function () {
    };
    BeaconDialogComponent.prototype.canDelete = function () {
        if (this.data && !this.disable_info)
            return true;
        else
            return false;
    };
    BeaconDialogComponent.prototype.addBeacon = function () {
        if (this.model.type === "iBeacon") {
            if ((this.model.uuid + "").trim().length <= 0) {
                this.showBeaconError("UUID ");
                return;
            }
        }
        else {
            if ((this.model.nameSpaceId + "").trim().length <= 0) {
                this.showBeaconError("Namespace ");
                return;
            }
        }
        if (this.data) {
            this.data.beacon.type = this.model.type;
            this.data.beacon.ref = this.model.ref;
            if (this.model.type == "iBeacon") {
                this.data.beacon.uuid = this.model.uuid;
                this.data.beacon.major = this.model.major;
                this.data.beacon.minor = this.model.minor;
            }
            else {
                this.data.beacon.nameSpaceId = this.model.nameSpaceId;
                this.data.beacon.instanceId = this.model.instanceId;
            }
            this.dialogRef.close({ data: this.data.beacon, action: "edit", index: this.data.index });
        }
        else {
            this.dialogRef.close({ data: this.model, action: "add" });
        }
    };
    BeaconDialogComponent.prototype.deleteBeacon = function () {
        this.dialogRef.close({ data: this.data.beacon, action: "delete", index: this.data.index });
    };
    BeaconDialogComponent.prototype.showBeaconError = function (item) {
        var infoDialogData = {
            message: item + "is required, please provide",
            title: "Required field",
            yes: "okay"
        };
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__util_component__["a" /* InfoDialogComponent */], {
            width: '450px',
            data: infoDialogData
        });
    };
    BeaconDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-beacon-add',
            template: "<main>\n    <div class=\"container\">\n\n      <form  id=\"form\" >\n\n        <div  >\n\n          <h4>Beacon Details</h4>\n          \n          <br/>\n          <section class=\"example-section\">\n            <label class=\"example-margin\">Type:</label>\n            <mat-radio-group [(ngModel)]=\"model.type\" name=\"kind\" [disabled]=\"canDelete()\">\n              <mat-radio-button  value=\"iBeacon\">iBeacon</mat-radio-button>\n              <mat-radio-button  value=\"eddystone\">Eddystone</mat-radio-button>\n            </mat-radio-group>\n          </section>\n          \n          <br/>\n          \n          <section>\n\n            <div *ngIf=\"model.type == 'iBeacon'\">\n            <mat-form-field class=\"input-full-width\">\n              <input matInput placeholder=\"UUID\" [(ngModel)]=\"model.uuid\"  name=\"uuid\"  id=\"uuid\" [disabled]=\"disable_info\" >\n            </mat-form-field>\n            <mat-form-field class=\"input-full-width\">\n              <input matInput placeholder=\"Major\" [(ngModel)]=\"model.major\"  name=\"major\"  id=\"major\" [disabled]=\"disable_info\" >\n            </mat-form-field>\n            <mat-form-field class=\"input-full-width\">\n              <input matInput placeholder=\"Minor\" [(ngModel)]=\"model.minor\"  name=\"minor\"  id=\"minor\" [disabled]=\"disable_info\" >\n            </mat-form-field>\n            <mat-form-field class=\"input-full-width\">\n              <input matInput placeholder=\"Map to Number: \" [(ngModel)]=\"model.ref\"  name=\"ref\"  id=\"ref\" [disabled]=\"disable_info\" >\n            </mat-form-field>\n\n            </div>\n\n            \n            <div *ngIf=\"model.type == 'eddystone'\">\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Namespace ID\" [(ngModel)]=\"model.nameSpaceId\"  name=\"nameSpaceId\"  id=\"nameSpaceId\" [disabled]=\"disable_info\" required=\"required\" >\n              </mat-form-field>\n\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Instance ID\" [(ngModel)]=\"model.instanceId\"  name=\"instanceId\"  id=\"instanceId\" [disabled]=\"disable_info\" >\n              </mat-form-field>\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Map to Number: \" [(ngModel)]=\"model.ref\"  name=\"ref\"  id=\"ref\" [disabled]=\"disable_info\" >\n              </mat-form-field>\n\n            </div>\n            \n          </section>\n         \n          <br/>\n          \n\n          <button mat-raised-button color=\"primary\" (click)=\"addBeacon()\" >{{submitText}}</button>\n          <button mat-raised-button color=\"warn\" (click)=\"deleteBeacon()\" *ngIf=\"data\" >Delete Beacon</button>\n          \n            \n          </div>\n          \n\n      </form>\n      \n    </div>\n\n  </main>"
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], Object])
    ], BeaconDialogComponent);
    return BeaconDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-floorplan/dash-floorplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-floorplan/dash-floorplan.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n  <mat-card style=\"min-height: 700px\">\n\n    <h1 style=\"align-content: center; \" class=\"text-center\"> {{floorplan.name}}\n    </h1>\n\n    <p>iBeacon -> <img #icon src=\"../../../assets/beacon_icon.png\"\n                       style=\"width: 30px; height: 30px\"/>  EddyStone -> <img #icon2 src=\"../../../assets/beacon_icon2.png\"\n                                                                              style=\"width: 30px; height: 30px\"/> </p>\n    <br/>\n\n    <div style=\"float: right\">\n      <button mat-button color=\"primary\" (click)=\"addBeacon()\">+ Beacon</button>\n      <button mat-raised-button color=\"accent\" (click)=\"saveBeacon()\" *ngIf=\"changed\" style=\"float: right\">Save</button>\n\n    </div>\n    <br/>\n    <div style=\"margin-top: 10px\">\n      <img-map #imgMap\n               src=\"{{this.values.getServiceEndPoint()+floorplan.url}}\"\n               [markers]=\"pins\"\n               [polygons]=\"polygons\"\n               (viewDidAppear)=\"floorplanAppeared($event)\"\n               (change)=\"onMarkerChanged($event)\"\n               imageSmoothing=\"true\"\n               smoothingQuality=\"high\"\n               canDrag=\"true\"\n               (onPolyChange)=\"onPolygonChanged($event)\"\n               (onMarkerDoubleClicked)=\"showBeaconDetails($event)\"\n               (onPolygonDoubleClicked)=\"showPolygonDetails($event)\"\n               polygonEnabled=\"true\"\n               showPolyNodes=\"true\"\n\n      ></img-map>\n\n    </div>\n    <br/>\n    <div>\n      <br/>\n\n      <br/>\n      <h4>Floorplan - Details:</h4>\n\n\n      <strong>Beacon count: </strong> <span>{{getBeaconSize()}}</span> <br/>\n      <strong>Content Areas: </strong> <span>0</span> <br/>\n      <strong>Total Assigned Contents so Far: </strong> <span></span> <br/>\n\n      <br/>\n\n\n      <h4>Other - Details</h4>\n      <strong>Date Added: </strong> <span> {{floorplan.created}} </span> <br/>\n      <strong>Size: </strong> <span>{{floorplan.size | fileSize}}</span> <br/>\n\n      <button mat-raised-button *ngIf=\"can_manage_project\" style=\"float: right\" (click)=\"changeName()\">Change Name\n      </button>\n      <br/>\n      <br/>\n\n      <button mat-raised-button color=\"warn\" (click)=\"deleteFloorPlan()\" *ngIf=\"can_delete\" style=\"float: right\">Delete\n        Floorplan\n      </button>\n\n      <br/>\n      <br/>\n    </div>\n\n\n  </mat-card>\n\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-floorplan/dash-floorplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashFloorplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__ = __webpack_require__("../../../../../src/app/components/plugin/ng2-img-map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_component__ = __webpack_require__("../../../../../src/app/components/util.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dash_beacon_beacon_dialog_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-beacon/beacon-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialog_floorplan_name_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dialog-floorplan-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_contentarea_name_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dialog-contentarea-name.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














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
        this.can_delete = false;
        this.can_manage_project = false;
        this.floorplan = { name: "default" };
        this.pins = [];
        this.polygons = [];
        //changeList: Beacon[] = [];
        this.changed = false;
        this.floorplanId = "";
        this.projectID = "";
        //floorplanContext: ImgMapComponent;
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
                    _this.can_delete =
                        result.user.roles.manage_users &&
                            result.user.roles.manage_roles &&
                            result.user.roles.manage_projects &&
                            result.user.isadmin;
                    _this.can_manage_project = result.user.roles.manage_projects;
                    if (!result.user.isadmin) {
                        _this.router.navigate(["../"], { relativeTo: _this.activeRouter.parent });
                    }
                }
            }
            else {
            }
        });
    };
    DashFloorplanComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.floorplanId = params['floorplanid'];
            _this.projectID = params['projectid'];
            _this.floorService.getFloorPlan(params['floorplanid'], params['projectid']).subscribe(function (data) {
                if (data) {
                    _this.presentProject = data.data.project;
                    _this.floorplan = data.data.floorplan;
                    for (var i = 0; i < _this.floorplan.beacons.length; i++) {
                        var b = _this.floorplan.beacons[i];
                        var m = new __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["b" /* Marker */](b.map.x, b.map.y);
                        m.size = 20;
                        m.data = b;
                        var icon = "";
                        if (b.type.toLowerCase() === "iBeacon".toLowerCase())
                            icon = _this.icon.nativeElement;
                        else
                            icon = _this.icon2.nativeElement;
                        m.setAsComposite(icon, __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["d" /* ShapeType */].Circle, 30, 30);
                        _this.pins.push(m);
                        //                  this.floorplanContext.addMarker(m);
                    }
                    for (var i = 0; i < _this.floorplan.areas.length; i++) {
                        var area = _this.floorplan.areas[i];
                        var p = new __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["c" /* Polygon */]();
                        p.setVertices(area.coordinates);
                        p.data = area;
                        _this.polygons.push(p);
                    }
                }
                else {
                }
            });
        });
    };
    DashFloorplanComponent.prototype.floorplanAppeared = function (context) {
        //this.floorplanContext = context;
    };
    DashFloorplanComponent.prototype.onMarkerChanged = function (index) {
        this.changed = true;
        var marker = this.pins[index];
        marker.data.map.x = marker.x;
        marker.data.map.y = marker.y;
        //console.log(this.changeList);
    };
    DashFloorplanComponent.prototype.deleteFloorPlan = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__util_component__["b" /* YesNoDialogComponent */], {
            width: '450px',
            data: this.deleteDialogData
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.agree) {
                    _this.floorService.deleteFloorplanWithId(_this.floorplan._id, _this.presentProject._id).subscribe(function (data) {
                        if (data) {
                            if (data.success) {
                                _this.router.navigate(["projects", _this.presentProject._id], { relativeTo: _this.activeRouter.parent });
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                            }
                        }
                    });
                }
            }
        });
    };
    ;
    DashFloorplanComponent.prototype.addBeacon = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__dash_beacon_beacon_dialog_component__["a" /* BeaconDialogComponent */], {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.action == "add") {
                    var data = result.data;
                    var m = new __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["b" /* Marker */](50, 50);
                    m.size = 20;
                    var beacon = {
                        map: {
                            x: m.x,
                            y: m.y,
                            shape: __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["d" /* ShapeType */].Circle
                        },
                        type: data.type,
                        ref: data.ref
                    };
                    if (data.type == "iBeacon") {
                        beacon.uuid = data.uuid;
                        beacon.major = data.major;
                        beacon.minor = data.minor;
                    }
                    else {
                        beacon.nameSpaceId = data.nameSpaceId;
                        beacon.instanceId = data.instanceId;
                    }
                    m.data = beacon;
                    m.setAsComposite(_this.icon.nativeElement, __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["d" /* ShapeType */].Circle, 30, 30);
                    _this.floorplanContext.addMarker(m);
                    //this.changeList.push(beacon);
                }
            }
        });
    };
    DashFloorplanComponent.prototype.saveBeacon = function () {
        var _this = this;
        var beacons = [];
        var areas = [];
        this.pins.forEach(function (marker, index) {
            beacons.push(marker.data);
        });
        this.polygons.forEach(function (polygon, index) {
            var c = polygon.data;
            c.coordinates = polygon.getVertices();
            areas.push(c);
        });
        this.floorService.saveChangesOnFloorPlan(this.floorplanId, this.projectID, { beacons: beacons, areas: areas }).subscribe(function (result) {
            if (result.success) {
                _this.snackBarRef.open("Changes Saved", "Close", {
                    duration: 3000,
                });
                //  this.router.navigate(["projects", this.presentProject._id], {relativeTo: this.activeRouter.parent});
                console.log("YAY!");
            }
        });
    };
    DashFloorplanComponent.prototype.changeName = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__dialog_floorplan_name_component__["a" /* DialogFloorPlanNameComponent */], {
            width: '450px',
            data: {
                floorplanId: this.floorplanId,
                projectId: this.projectID,
                name: this.floorplan.name
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.data.success) {
                    _this.snackBarRef.open("Name saved", "Close", {
                        duration: 3000,
                    });
                    _this.floorplan.name = result.data.name;
                }
                else {
                    _this.flashMessagesService.show("An error occured " + result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            }
        });
    };
    DashFloorplanComponent.prototype.getBeaconSize = function () {
        if (this.floorplan.beacons)
            return this.floorplan.beacons.length;
        else
            return 0;
    };
    DashFloorplanComponent.prototype.onPolygonChanged = function (index) {
        this.changed = true;
    };
    DashFloorplanComponent.prototype.showBeaconDetails = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__dash_beacon_beacon_dialog_component__["a" /* BeaconDialogComponent */], {
            width: '450px',
            data: { beacon: this.pins[index].data, index: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.action == "delete") {
                    if (result.data._id) {
                        _this.floorService.deleteBeaconFromFloorPlan(_this.floorplanId, _this.projectID, result.data._id).subscribe(function (data) {
                            if (data.success) {
                                _this.snackBarRef.open("Beacon Removed", "Close", {
                                    duration: 3000,
                                });
                                _this.pins.splice(result.index, 1);
                                _this.floorplanContext.draw();
                            }
                            else {
                                _this.flashMessagesService.show("An Error occured " + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                            }
                        });
                    }
                    else {
                        _this.pins.splice(result.index, 1);
                        _this.floorplanContext.draw();
                    }
                }
                if (result.action == "edit") {
                    _this.pins[result.index].data = result.data;
                    _this.changed = true;
                }
            }
        });
    };
    DashFloorplanComponent.prototype.showPolygonDetails = function (index) {
        var _this = this;
        this.changed = true;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__dialog_contentarea_name_component__["a" /* DialogContentAreaNameComponent */], {
            width: '450px',
            data: {
                index: index,
                area: this.polygons[index].data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.polygons[result.index].data = result.data.area;
            }
            //this.contentAreaChangeList.push(this.polygons[index]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imgMap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["a" /* ImgMapComponent */])
    ], DashFloorplanComponent.prototype, "floorplanContext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('icon'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DashFloorplanComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('icon2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DashFloorplanComponent.prototype, "icon2", void 0);
    DashFloorplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-floorplan',
            template: __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dash-floorplan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dash-floorplan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_8__models_Values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDialog */]])
    ], DashFloorplanComponent);
    return DashFloorplanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-floorplan/dialog-contentarea-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContentAreaNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DialogContentAreaNameComponent = (function () {
    function DialogContentAreaNameComponent(validateService, flashMessagesService, userProvider, floorplanProvider, authService, dialog, dialogRef, fb, data) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.userProvider = userProvider;
        this.floorplanProvider = floorplanProvider;
        this.authService = authService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.name = "";
        this.disable_info = false;
        this.form = this.fb.group({
            'name': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required])
        });
        this.authService.getProfile().subscribe(function (result) {
            _this.disable_info = !result.user.roles.manage_projects;
        });
        if (this.data) {
            this.name = this.data.area.name;
        }
    }
    DialogContentAreaNameComponent.prototype.ngOnInit = function () {
    };
    DialogContentAreaNameComponent.prototype.save = function () {
        this.data.area.name = this.name;
        this.dialogRef.close({ data: this.data, index: this.data.index });
    };
    DialogContentAreaNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-contentarea-name',
            template: "<main>\n    <div class=\"container\">\n\n      <form  id=\"form\" >\n\n        <div>\n\n          <h4> Content Area Name</h4>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"name\"  name=\"name\"  id=\"name\" [disabled]=\"disable_info\" required=\"required\" >\n          </mat-form-field>\n          \n          <button mat-raised-button color=\"primary\" (click)=\"save()\" >Save</button>\n          \n        </div>\n\n      </form>\n      \n    </div>\n\n  </main>"
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], Object])
    ], DialogContentAreaNameComponent);
    return DialogContentAreaNameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-floorplan/dialog-floorplan-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogFloorPlanNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DialogFloorPlanNameComponent = (function () {
    function DialogFloorPlanNameComponent(validateService, flashMessagesService, userProvider, floorplanProvider, authService, dialog, dialogRef, fb, data) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.userProvider = userProvider;
        this.floorplanProvider = floorplanProvider;
        this.authService = authService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.floorplanId = "";
        this.projectId = "";
        this.disable_info = false;
        this.form = this.fb.group({
            'name': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required])
        });
        this.authService.getProfile().subscribe(function (result) {
            _this.disable_info = !result.user.roles.manage_projects;
        });
        if (this.data) {
            this.name = this.data.name;
            this.floorplanId = this.data.floorplanId;
            this.projectId = this.data.projectId;
        }
    }
    DialogFloorPlanNameComponent.prototype.ngOnInit = function () {
    };
    DialogFloorPlanNameComponent.prototype.save = function () {
        var _this = this;
        this.floorplanProvider.saveFloorPlanName(this.floorplanId, this.projectId, this.name).subscribe(function (result) {
            result.name = _this.name;
            _this.dialogRef.close({ data: result });
        });
    };
    DialogFloorPlanNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-floorplan-name',
            template: "<main>\n    <div class=\"container\">\n\n      <form  id=\"form\" >\n\n        <div>\n\n          <h4>Floor-Plan Name Change</h4>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"name\"  name=\"name\"  id=\"name\" [disabled]=\"disable_info\" required=\"required\" >\n          </mat-form-field>\n          \n          <button mat-raised-button color=\"primary\" (click)=\"save()\" >Save</button>\n          \n        </div>\n\n      </form>\n      \n    </div>\n\n  </main>"
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], Object])
    ], DialogFloorPlanNameComponent);
    return DialogFloorPlanNameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-home/dash-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-home/dash-home.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n\n  Kunmi here\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-home/dash-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashHomeComponent = (function () {
    function DashHomeComponent() {
    }
    DashHomeComponent.prototype.ngOnInit = function () {
    };
    DashHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-home',
            template: __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-home/dash-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/admin/dash-home/dash-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashHomeComponent);
    return DashHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-project-detail/dash-project-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-project-detail/dash-project-home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n  <!-- class=\"container mat-elevation-z8\" -->\n  <mat-card class=\"container\">\n  <div>\n    <h2>{{title}}</h2>\n    <p>{{description}}</p>\n    <br>\n    <br>\n    <strong>E-Mail: </strong> <span>{{email}}</span>\n\n\n  </div>\n  </mat-card>\n<br>\n  <mat-card class=\"container\">\n    <div>\n      <h4>Allowed Users</h4>\n      <p>The following users can assign content to {{title}}</p>\n\n      <mat-chip-list #chipList>\n        <mat-chip *ngFor=\"let user of projectUser\" [selectable]=\"selectable\"\n                  [removable]=\"canManageProjects\" (remove)=\"remove(user)\" (dblclick)=\"showInfo(user)\">\n          {{user.name}}\n          <mat-icon matChipRemove *ngIf=\"canManageProjects\" >cancel</mat-icon>\n        </mat-chip>\n\n      </mat-chip-list>\n\n      <br>\n      <br>\n\n      <form *ngIf=\"canManageProjects\">\n\n        <p>If you wish to add a new user to this project, you can search for them using below input field.</p>\n\n        <mat-form-field style=\"width: 500px\">\n          <input type=\"text\" placeholder=\"Search for username\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"\n                 >\n          <mat-autocomplete #auto=\"matAutocomplete\" [displayWith] = \"displayFn\">\n            <mat-option *ngFor=\"let user of filteredOptions | async\" [value]=\"user\"  >\n              {{ user.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" (click)=\"addUsertoProject()\">Add user</button>\n      </form>\n\n    </div>\n  </mat-card>\n\n<br>\n\n  <mat-card class=\"container\">\n    <div>\n      <h4>Floor Plans and Beacons</h4>\n      <br>\n\n      <div class=\"row\" >\n\n      <div *ngFor=\"let image of images; let i = index\">\n\n        <mat-card style=\"width: 250px; height: 250px; display: inline-block; margin-left: 10px; margin-top: 15px;\n                        position: relative\" (click)=\"showFloorPlan(image.id)\">\n          <div style=\"\n          background-color: rgba(0, 0, 0, 0.7);\n          width: auto; height: auto; position: absolute;\n          top: 0px; right: 10px;\n          padding: 5px\">\n            <span style=\"color: #FFFFFF\">{{image.beacon_count>0? image.beacon_count+\" \"+(image.beacon_count>1?\"beacons\": \"beacon\") : \"no beacons\"}}</span>\n          </div>\n\n          <div style=\"width: 98%; height: 80%; overflow-x: auto; overflow-y: auto\">\n            <img src=\"{{this.values.getServiceEndPoint()+image.url}}\" style=\"height: 100%; width: 100%\"  />\n          </div>\n\n          <div style=\"height: 98%; height: 18%; margin-top: 10px\">\n\n            <p style=\"margin: auto auto; text-align: center\"> {{image.name}} </p> <br/>\n\n          </div>\n\n        </mat-card>\n\n      </div>\n      </div>\n\n      <br>\n\n\n      <button mat-fab color=\"primary\" (click)=\"openImageUploadDialog()\">+</button>\n\n\n    </div>\n  </mat-card>\n\n  <br>\n\n  <mat-card class=\"container\">\n    <div>\n      <h4>Push Settings</h4>\n      <p>provide your Push and APNS details here, to enable push updates</p>\n      <br>\n      <form >\n        <mat-form-field class=\"example-full-width\" style=\"width: 650px;\">\n          <textarea matInput placeholder=\"Google GCM\" [formControl]=\"gcmControl\"></textarea>\n        </mat-form-field>\n\n        <br/>\n\n        <button mat-raised-button color=\"primary\" (click)=\"saveGCMKey()\">Save</button>\n\n      </form>\n    </div>\n    <br>\n  </mat-card>\n\n\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-project-detail/dash-project-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashProjectHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_component__ = __webpack_require__("../../../../../src/app/components/util.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_image_dialog_components__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-project-detail/project-image-dialog.components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












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
        this.myControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        this.gcmControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
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
                            if (_this.presentProject.push) {
                                _this.gcmControl.setValue(_this.presentProject.push.gcm);
                            }
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__util_component__["b" /* YesNoDialogComponent */], {
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
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__util_component__["a" /* InfoDialogComponent */], {
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
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["startWith"])({}), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (user) { return user && typeof user === 'object' ? user.name : user; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (name) { return name ? _this.filter(name) : _this.users.slice(); }));
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
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__util_component__["a" /* InfoDialogComponent */], {
            width: '450px',
            data: infoDialogData
        });
    };
    /*   IMAGE UPLOAD SECTION   */
    DashProjectHomeComponent.prototype.openImageUploadDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__project_image_dialog_components__["a" /* ProjectImageDialogComponent */], {
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
                    //          this.getUsersFromServer();
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
    DashProjectHomeComponent.prototype.saveGCMKey = function () {
        var _this = this;
        this.projectProvider.saveGCM(this.presentProject._id, this.gcmControl.value).subscribe(function (result) {
            if (result.success) {
                _this.snackBarRef.open("GCM saved", "Close", {
                    duration: 3000,
                });
            }
            else {
                _this.flashMessagesService.show("Error Occured " + result.msg, { cssClass: 'alert-warning', timeout: 3000 });
            }
        });
    };
    DashProjectHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-project-home',
            template: __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-project-detail/dash-project-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/admin/dash-project-detail/dash-project-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_11__models_Values__["a" /* Values */]])
    ], DashProjectHomeComponent);
    return DashProjectHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-project-detail/project-image-dialog.components.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectImageDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








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
            'imageInput': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-image-upload',
            template: "<main>\n    <div class=\"container\">\n\n      <form [formGroup] = \"form\" (ngSubmit)=\"uploadImages()\" id=\"form\" enctype=\"multipart/form-data\">\n\n        <div  >\n\n          <h4>Upload Floorplan</h4>\n          <br/>\n\n          <mat-progress-bar mode=\"indeterminate\" *ngIf=\"uploading\"></mat-progress-bar>\n\n          <div *ngIf=\"!uploading\">\n\n            <input  id=\"imageInput\" name=\"imageInput\" type=\"file\" multiple (change)=\"onChange($event)\" formControlName=\"imageInput\"\n                    accept=\".jpg, .gif, .png\"\n                    required/>\n            <br/>\n            <br/>\n\n            <div *ngFor=\"let image of images; let i = index\" >\n\n              <span>{{image.name}}</span>\n\n            </div>\n\n            <br/>\n\n            <div class=\"row\">\n\n              <div class=\"col-4\">\n                <input *ngIf=\"!inputs_disabled\"  type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(images.length>0)\" value=\"Upload Image\" />\n              </div>\n              \n            </div>\n            \n          </div>\n            \n            \n          </div>\n          \n        \n\n        \n\n      </form>\n      \n    </div>\n\n  </main>"
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], Object])
    ], ProjectImageDialogComponent);
    return ProjectImageDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-projects/dash-project-dialog.components.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashProjectDialogComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_component__ = __webpack_require__("../../../../../src/app/components/util.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









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
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["k" /* Validators */].email,
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
                    //this.router.navigate(['/login'])
                }
                else {
                    _this.flashMessagesService.show('Error Registering User ' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    DashProjectDialogComponents.prototype.openDeleteDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__util_component__["b" /* YesNoDialogComponent */], {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dash-project-dialog',
            template: "<main>\n    <div class=\"container\">\n\n      <form (submit)=\"onRegisterSubmit()\"  class=\"custom-form\">\n\n\n        <div  >\n\n          <h4>Project Details</h4>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"Name *\" [(ngModel)]=\"model.name\"  name=\"name\"  id=\"name\" [disabled]=\"disable_info\" >\n          </mat-form-field>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"E-Mail*\" [formControl]=\"emailFormControl\" [(ngModel)]=\"model.email\" name=\"email\" id=\"email\" [disabled]=\"disable_info\">\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          \n          <mat-form-field class=\"input-full-width\">\n            <textarea matInput placeholder=\"Description\" [(ngModel)]=\"model.description\"  name=\"description\" id=\"description\"  [disabled]=\"disable_info\" rows=\"7\"></textarea>\n          </mat-form-field>\n\n        </div>\n\n        <br/>\n\n        <br/>\n\n        <div class=\"row\">\n\n          <div class=\"col-4\">\n            <input *ngIf=\"!inputs_disabled\" type=\"submit\" class=\"btn btn-primary\" value=\"{{submitText}}\" >\n          </div>\n          \n          <div class=\"col\" *ngIf=\"data\">\n            <div style=\"float: right\" *ngIf=\"can_delete\">\n              <button  mat-raised-button color=\"warn\" [disabled]=\"!can_delete\" type=\"button\" class=\"btn btn-primary\" (click)=\"openDeleteDialog()\">Delete</button>\n            </div>\n          </div>\n\n        </div>\n\n\n      </form>\n\n      <br/>\n      <br/>\n      <button *ngIf=\"data\" mat-button color=\"primary\" (click)=\"gotoProjectHome()\">Go to {{model.name}}'s home</button>\n    </div>\n\n  </main>"
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_7__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], DashProjectDialogComponents);
    return DashProjectDialogComponents;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-projects/dash-projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-projects/dash-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n<div>\n  <h2>Available Projects</h2>\n  <div class=\"\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n\n  </div>\n\n  <div class=\"container mat-elevation-z8\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <!-- Username Column -->\n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\n      </ng-container>\n\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"description\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" > <div style=\"padding-top: 7px; padding-bottom: 7px\"> {{row.description | slice:0:120}} {{row.description.length > 120 ? '...' : ''}} </div></mat-cell>\n      </ng-container>\n\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n               (click)=\"highlight(row)\" (dblclick)=\"openEditProjectDialog(row)\">\n      </mat-row>\n\n    </mat-table>\n\n\n\n    <div class=\"button-row\" style=\"float: right\" *ngIf=\"canManageProject\">\n      <button mat-fab color=\"primary\" (click)=\"openCreateProjectDialog()\">+</button>\n    </div>\n\n\n    <mat-paginator #paginator\n                   [pageSize]=\"10\"\n                   [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n  </div>\n\n\n\n</div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-projects/dash-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dash_project_dialog_components__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-projects/dash-project-dialog.components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashProjectsComponent = (function () {
    function DashProjectsComponent(authService, userProvider, projectProvider, router, activeRouter, dialog, flashMessagesService, snackBarRef) {
        var _this = this;
        this.authService = authService;
        this.userProvider = userProvider;
        this.projectProvider = projectProvider;
        this.router = router;
        this.activeRouter = activeRouter;
        this.dialog = dialog;
        this.flashMessagesService = flashMessagesService;
        this.snackBarRef = snackBarRef;
        this.selectedRowIndex = -1;
        this.displayedColumns = ['name', 'email', 'description'];
        this.canManageProject = false;
        this.getProjectFromServer();
        this.authService.getProfile().subscribe(function (result) {
            _this.presentUser = result.user;
            _this.canManageProject = result.user.roles.manage_projects;
        });
    }
    DashProjectsComponent.prototype.ngOnInit = function () {
    };
    DashProjectsComponent.prototype.getProjectFromServer = function () {
        var _this = this;
        this.projectProvider.getProjects().subscribe(function (result) {
            var projects = [];
            result.forEach(function (element) {
                var project = {
                    id: element._id.toString(),
                    name: element.name.toString(),
                    email: element.email.toString(),
                    description: element.description.toString()
                };
                projects.push(project);
            });
            // Assign the data to the data source for the table to render
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTableDataSource */](projects);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            console.log(_this.dataSource);
        });
    };
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    DashProjectsComponent.prototype.ngAfterViewInit = function () {
    };
    DashProjectsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DashProjectsComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.id;
    };
    DashProjectsComponent.prototype.openCreateProjectDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dash_project_dialog_components__["a" /* DashProjectDialogComponents */], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.success) {
                    _this.snackBarRef.open("User Created Successfully", "Close", {
                        duration: 3000,
                    });
                    _this.getProjectFromServer();
                }
                else {
                }
            }
            console.log("The Dialog was closed");
        });
    };
    DashProjectsComponent.prototype.openEditProjectDialog = function (row) {
        var _this = this;
        var presentUserId = row.id;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dash_project_dialog_components__["a" /* DashProjectDialogComponents */], {
            width: '500px',
            data: { id: presentUserId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.success) {
                    _this.snackBarRef.open("Updated Successfully", "Close", {
                        duration: 3000,
                    });
                    _this.getProjectFromServer();
                }
                else if (result.navigate) {
                    _this.router.navigate(["projects", result.id], { relativeTo: _this.activeRouter.parent });
                }
                else {
                    _this.flashMessagesService.show('An Error Occurred.  ' + result.message, { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            }
            console.log("The Dialog was closed");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */])
    ], DashProjectsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSort */])
    ], DashProjectsComponent.prototype, "sort", void 0);
    DashProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-projects',
            template: __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-projects/dash-projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/admin/dash-projects/dash-projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSnackBar */]])
    ], DashProjectsComponent);
    return DashProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-users/dash-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-users/dash-users.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n<div>\n<h3>Available Users</h3>\n  <br/>\n\n\n  <!-- class=\"container mat-elevation-z8\" -->\n  <mat-card class=\"container\">\n  <div >\n\n    <div class=\"\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <!-- Username Column -->\n      <ng-container matColumnDef=\"username\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Username </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.username}} </mat-cell>\n      </ng-container>\n\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> E-Mail </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" > {{row.email}} </mat-cell>\n      </ng-container>\n\n\n\n\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n               (click)=\"highlight(row)\" (dblclick)=\"openEditUserDialog(row)\">\n      </mat-row>\n\n\n\n\n    </mat-table>\n\n\n\n\n\n\n    <div class=\"button-row\" style=\"float: right\" *ngIf=\"canManageUsers\">\n      <button mat-fab color=\"primary\" (click)=\"openCreateUserDialog()\">+</button>\n    </div>\n\n\n    <mat-paginator #paginator\n                   [pageSize]=\"10\"\n                   [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n  </div>\n  </mat-card>\n\n\n</div>\n\n\n<div class=\"spaceTop\">\n\n</div>\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-users/dash-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashUsersComponent = (function () {
    function DashUsersComponent(authService, userProvider, dialog, flashMessagesService, snackBarRef) {
        var _this = this;
        this.authService = authService;
        this.userProvider = userProvider;
        this.dialog = dialog;
        this.flashMessagesService = flashMessagesService;
        this.snackBarRef = snackBarRef;
        this.selectedRowIndex = -1;
        this.displayedColumns = ['name', 'username', 'email'];
        this.canManageUsers = false;
        this.getUsersFromServer();
        this.authService.getProfile().subscribe(function (result) {
            _this.presentUser = result.user;
            _this.canManageUsers = result.user.roles.manage_users;
        });
    }
    DashUsersComponent.prototype.ngOnInit = function () {
    };
    DashUsersComponent.prototype.getUsersFromServer = function () {
        var _this = this;
        this.userProvider.getUsers().subscribe(function (result) {
            var users = [];
            result.forEach(function (element) {
                var user = {
                    id: element._id.toString(),
                    name: element.name.toString(),
                    username: element.username.toString(),
                    email: element.email.toString()
                };
                users.push(user);
            });
            // Assign the data to the data source for the table to render
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatTableDataSource */](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            console.log(_this.dataSource);
        });
    };
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    DashUsersComponent.prototype.ngAfterViewInit = function () {
    };
    DashUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DashUsersComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.id;
    };
    DashUsersComponent.prototype.openCreateUserDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.success) {
                    _this.snackBarRef.open("User Created Successfully", "Close", {
                        duration: 3000,
                    });
                    _this.getUsersFromServer();
                }
                else {
                }
            }
            console.log("The Dialog was closed");
        });
    };
    DashUsersComponent.prototype.openEditUserDialog = function (row) {
        var _this = this;
        var presentUserId = row.id;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], {
            width: '500px',
            data: { id: presentUserId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.success) {
                    _this.snackBarRef.open("Updated Successfully", "Close", {
                        duration: 3000,
                    });
                    _this.getUsersFromServer();
                }
                else {
                    _this.flashMessagesService.show('An Error Occurred.  ' + result.message, { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            }
            console.log("The Dialog was closed");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatPaginator */])
    ], DashUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatSort */])
    ], DashUsersComponent.prototype, "sort", void 0);
    DashUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-users',
            template: __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/dash-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/dash-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBar */]])
    ], DashUsersComponent);
    return DashUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<main>\n  <div class=\"container\">\n\n    <form (submit)=\"onRegisterSubmit()\"  class=\"custom-form\">\n\n      <div class=\"row\">\n\n        <div class=\"col-xs-7 col-md-5\"  >\n\n          <h4>Personal Details</h4>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"model.name\"  name=\"name\"  id=\"name\" [disabled]=\"disable_info\" >\n          </mat-form-field>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"Username\" [(ngModel)]=\"model.username\"  name=\"username\" id=\"username\" required=\"required\" [disabled]=\"disable_info\">\n          </mat-form-field>\n\n          <mat-form-field class=\"input-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"model.email\" name=\"email\" id=\"email\" [disabled]=\"disable_info\">\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"input-full-width mat-password\" *ngIf=\"!data\">\n            <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\"  name=\"password\" id=\"password\" required=\"required\" [disabled]=\"disable_info\" >\n          </mat-form-field>\n\n\n        </div>\n\n\n        <div class=\"col-xs-7 col-md-5 offset-md-1\"  >\n\n          <div class=\"row\">\n\n            <div class=\"col\">\n              <h4>Roles</h4>\n\n              <section >\n                <mat-checkbox [(ngModel)]=\"model.roles.manage_users\" name=\"manage_users\" id=\"manage_users\" [disabled]=\"disable_roles\">Manage Users</mat-checkbox>\n              </section>\n              <section>\n                <mat-checkbox [(ngModel)]=\"model.roles.manage_roles\" name=\"manage_roles\" id=\"manage_roles\" [disabled]=\"disable_roles\">Manage Roles</mat-checkbox>\n              </section>\n              <section >\n                <mat-checkbox [(ngModel)]=\"model.roles.manage_projects\" name=\"manage_projects\" id=\"manage_projects\" [disabled]=\"disable_roles\">Manage Projects</mat-checkbox>\n              </section>\n              <br/>\n              <br/>\n\n            </div>\n\n          </div>\n\n\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4>Admin</h4>\n\n              <section >\n                <mat-checkbox [(ngModel)]=\"model.isadmin\" name=\"isadmin\" id=\"isadmin\" [disabled]=\"disable_isadmin\">is Admin</mat-checkbox>\n              </section>\n\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n      <br/>\n      <br/>\n\n      <div class=\"row\">\n\n        <div class=\"col-4\">\n          <input *ngIf=\"!inputs_disabled\" type=\"submit\" class=\"btn btn-primary\" value=\"{{submitText}}\" >\n        </div>\n\n        <div class=\"col\" *ngIf=\"data\">\n          <div style=\"float: right\" *ngIf=\"can_delete\">\n            <button  mat-raised-button color=\"warn\" [disabled]=\"!can_delete\" type=\"button\" class=\"btn btn-primary\" (click)=\"openDeleteDialog()\">Delete</button>\n          </div>\n        </div>\n\n      </div>\n\n\n    </form>\n\n\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_component__ = __webpack_require__("../../../../../src/app/components/util.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









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
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email,
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
                    //this.router.navigate(['/login'])
                }
                else {
                    _this.flashMessagesService.show('Error Registering User ' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    RegisterComponent.prototype.openDeleteDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__util_component__["b" /* YesNoDialogComponent */], {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.css")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatDialogRef */], Object])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n  <div>\n    <h3>Available Contents</h3>\n    <br/>\n\n\n    <!-- class=\"container mat-elevation-z8\" -->\n    <mat-card class=\"container\">\n      <div >\n        <div class=\"\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n        </div>\n\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.title}} </mat-cell>\n          </ng-container>\n\n          <!-- Username Column -->\n          <ng-container matColumnDef=\"body\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Preview </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.body.length> 20 ? (row.body | slice:0:20)+'..':row.body}} </mat-cell>\n          </ng-container>\n\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"floorplan-name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Floorplan  </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" > {{row.floorplan_name | slice:0:20}} </mat-cell>\n          </ng-container>\n\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"published\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Published </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" > {{row.published | slice:0:20}} </mat-cell>\n          </ng-container>\n\n\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n                   (dblclick)=\"showContentDetails(row)\"   >\n          </mat-row>\n\n\n\n\n        </mat-table>\n\n\n\n        <mat-paginator #paginator\n                       [pageSize]=\"10\"\n                       [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n      </div>\n    </mat-card>\n\n\n  </div>\n\n\n  <div class=\"spaceTop\">\n\n  </div>\n\n</main>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_content_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/content/view-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ContentComponent = (function () {
    function ContentComponent(router, activeRouter, authService, projectProvider, userProvider, floorService, contentService, values, flashMessagesService, snackBarRef, dialog) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.authService = authService;
        this.projectProvider = projectProvider;
        this.userProvider = userProvider;
        this.floorService = floorService;
        this.contentService = contentService;
        this.values = values;
        this.flashMessagesService = flashMessagesService;
        this.snackBarRef = snackBarRef;
        this.dialog = dialog;
        this.contents = [];
        this.presentUser = null;
        this.project_id = null;
        this.selectedRowIndex = -1;
        this.displayedColumns = ['title', 'body', 'floorplan-name', 'published'];
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (result) {
            if (result) {
                if (result.user) {
                    _this.presentUser = result.user;
                    _this.activeRouter.params.subscribe(function (params) {
                        _this.project_id = params['id'];
                        _this.contentService.getContentsFromProject(_this.project_id).subscribe(function (data) {
                            if (data.success) {
                                data.contents.forEach(function (element) {
                                    var content = {
                                        _id: element._id.toString(),
                                        title: element.title.toString(),
                                        body: element.body.toString(),
                                        published: element.published.toString(),
                                        floorplan_name: element.floorplan_name,
                                        floorplan_id: element.floorplan_id,
                                        beacons: element.beacons,
                                        area: element.areas
                                    };
                                    _this.contents.push(content);
                                });
                                // Assign the data to the data source for the table to render
                                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MatTableDataSource */](_this.contents);
                                _this.dataSource.paginator = _this.paginator;
                                _this.dataSource.sort = _this.sort;
                            }
                            else {
                                _this.flashMessagesService.show("An Error occured " + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                            }
                        });
                    });
                }
            }
            else {
                _this.flashMessagesService.show("An Error occured " + result.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ContentComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ContentComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.id;
    };
    ContentComponent.prototype.showContentDetails = function (c) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__view_content_component__["a" /* DialogViewContentComponent */], {
            width: '450px',
            data: { contentid: c._id, projectId: this.project_id }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatPaginator */])
    ], ContentComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatSort */])
    ], ContentComponent.prototype, "sort", void 0);
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/components/dashboard/client/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/client/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_9__services_content_service__["a" /* ContentProvider */],
            __WEBPACK_IMPORTED_MODULE_4__models_Values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDialog */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/content/view-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogViewContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var DialogViewContentComponent = (function () {
    function DialogViewContentComponent(validateService, flashMessagesService, userProvider, floorplanProvider, contentProvider, authService, dialog, fb, dialogRef, data) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.userProvider = userProvider;
        this.floorplanProvider = floorplanProvider;
        this.contentProvider = contentProvider;
        this.authService = authService;
        this.dialog = dialog;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.contentId = "";
        this.area_name = "";
        this.floorplan_name = "";
        this.has_content_area = false;
        this.floorplanId = "";
        this.projectId = "";
        this.beacons = [];
        this.content = null;
        if (this.data) {
            this.projectId = this.data.projectId;
            this.contentId = this.data.contentid;
            this.contentProvider.getContentDetails(this.contentId).subscribe(function (result) {
                if (result.success) {
                    var c = result.content;
                    _this.content = c;
                    _this.title = c.title;
                    _this.body = c.body;
                    _this.created = c.created;
                    if (c.data.area !== "") {
                        _this.area_name = c.data.area;
                        _this.has_content_area = true;
                    }
                    _this.floorplan_name = c.data.floorplan_name;
                    c.data.beacons.forEach(function (b) {
                        var s = "";
                        if (b.type == "iBeacon") {
                            s += "UUID:  " + b.uuid + "- Major:  " + b.major + "- Minor:  " + b.minor + ", Ref: " + b.ref;
                        }
                        else {
                            s += "Namespace ID:  " + b.nameSpaceId + "- Instance ID  " + b.instanceId + ", Ref: " + b.ref;
                        }
                        _this.beacons.push(s);
                    });
                }
            });
        }
    }
    DialogViewContentComponent.prototype.ngOnInit = function () {
    };
    DialogViewContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-view-content',
            template: "<main>\n    <div class=\"container\">\n\n     \n      \n      <div>\n\n        <mat-tab-group >\n\n          <br/>\n\n          <mat-tab label=\"Message\">\n\n            <form  id=\"form\" >\n\n              <div>\n                \n                <br/>\n                <br/>\n\n                <h4>Post Message</h4>\n\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"title\" [(ngModel)]=\"title\"  name=\"title\"  id=\"title\" required=\"required\" [disabled]=\"true\" >\n                </mat-form-field>\n\n                <mat-form-field class=\"input-full-width\">\n                  <textarea matInput placeholder=\"Message Here\" [(ngModel)]=\"body\"  name=\"body\"  id=\"body\" required=\"required\" [disabled]=\"true\" ></textarea>\n                </mat-form-field>\n\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"Published\" [(ngModel)]=\"created\"  name=\"published\"  id=\"published\" required=\"required\" [disabled]=\"true\" >\n                </mat-form-field>\n\n                <br/>\n                \n              </div>\n\n            </form>\n\n          </mat-tab>\n\n          <mat-tab label=\"Details\">\n\n            <div>\n              <br/>\n              <br/>\n\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Floorplan Name\" [(ngModel)]=\"floorplan_name\"  name=\"type\"  id=\"type\" [disabled]=\"true\" >\n              </mat-form-field>\n\n              <mat-form-field class=\"input-full-width\" *ngIf=\"has_content_area\">\n                <input matInput placeholder=\"Content Area Name\" [(ngModel)]=\"area_name\"  name=\"type\"  id=\"type\" [disabled]=\"true\" >\n              </mat-form-field>\n\n             \n              <h4>Beacons:</h4>\n              <div style=\"max-height: 300px; overflow-y: scroll\">\n\n                <ul *ngFor=\"let b of beacons; let i = index\">\n                  <li> <p>{{b}}</p> </li>\n                </ul>\n                \n              </div>\n              \n\n            </div>\n            \n            <br/>\n            <br/>\n            \n          \n          </mat-tab>\n          \n\n         \n        </mat-tab-group>\n        \n      </div>\n\n      \n    </div>\n\n  </main>"
        }),
        __param(9, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_8__services_content_service__["a" /* ContentProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogViewContentComponent);
    return DialogViewContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/floorplan/dialog-add-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAddContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var DialogAddContentComponent = (function () {
    function DialogAddContentComponent(validateService, flashMessagesService, userProvider, floorplanProvider, contentProvider, authService, dialog, fb, dialogRef, data) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.userProvider = userProvider;
        this.floorplanProvider = floorplanProvider;
        this.contentProvider = contentProvider;
        this.authService = authService;
        this.dialog = dialog;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.destination = "";
        this.floorplanId = "";
        this.projectId = "";
        this.beacons = [];
        this.contentAreaId = null;
        this.contentAreaName = "Not named - To name please save from admin";
        this.containedBeacons = [];
        this.disable_info = false;
        this.form = this.fb.group({
            'title': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required])
        });
        if (this.data) {
            this.projectId = this.data.projectId;
            this.floorplanId = this.data.floorplanId;
            this.beacons = this.data.beacons;
            this.destination = '<br/>' + 'Beacons with references: ';
            for (var i = 0; i < this.beacons.length; i++) {
                var b = this.beacons[i];
                var s = "";
                if (b.type == "iBeacon") {
                    s += "UUID:  " + b.uuid + "- Major:  " + b.major + "- Minor:  " + b.minor + ", Ref: " + b.ref;
                }
                else {
                    s += "Namespace ID:  " + b.nameSpaceId + "- Instance ID  " + b.instanceId + ", Ref: " + b.ref;
                }
                this.containedBeacons.push(s);
                if (b.ref) {
                    this.destination += "<b> " + b.ref + " </b>";
                    if (i < this.beacons.length - 1) {
                        this.destination += " , ";
                    }
                }
            }
            if (this.data.area) {
                this.contentAreaId = this.data.area;
                if (this.data.area.name) {
                    this.destination += "<br/> Content-Area Name: <b> " + this.data.area.name + " </b>";
                    this.contentAreaName = this.data.area.name;
                }
            }
        }
    }
    DialogAddContentComponent.prototype.ngOnInit = function () {
    };
    DialogAddContentComponent.prototype.publish = function () {
        var _this = this;
        var content = this.data.content = {
            title: this.title,
            body: this.body,
            beacons: []
        };
        for (var i = 0; i < this.beacons.length; i++) {
            content.beacons.push(this.beacons[i]._id);
        }
        if (this.contentAreaId) {
            content.area = this.contentAreaId;
        }
        this.contentProvider.publishContentIntoProjectAndFloorplan(this.projectId, this.floorplanId, content).subscribe(function (result) {
            if (result.success) {
                _this.dialogRef.close({ success: true });
            }
            else {
                _this.flashMessagesService.show("An error occurred " + result.msg);
            }
        });
        //this.dialogRef.close({data: result});
    };
    DialogAddContentComponent.prototype.isContentArea = function () {
        return this.contentAreaId != null;
    };
    DialogAddContentComponent.prototype.isBeaconArea = function () {
        return this.contentAreaId == null;
    };
    DialogAddContentComponent.prototype.getAsFormattedDate = function (value) {
        return (new Date(value)).toUTCString();
    };
    DialogAddContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-add-content',
            template: "<main>\n    <div class=\"container\">\n\n     \n      \n      <div>\n\n        <mat-tab-group >\n\n          <br/>\n\n          <mat-tab label=\"Message\">\n\n            <form  id=\"form\" >\n\n              <div>\n                \n                <br/>\n                <br/>\n\n                <h4>Post Message</h4>\n\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"title\" [(ngModel)]=\"title\"  name=\"title\"  id=\"title\" required=\"required\" >\n                </mat-form-field>\n\n                <mat-form-field class=\"input-full-width\">\n                  <textarea matInput placeholder=\"Message Here\" [(ngModel)]=\"body\"  name=\"body\"  id=\"body\" required=\"required\"></textarea>\n                </mat-form-field>\n\n                <span>Destination: <div [innerHTML]=\"destination\"></div></span>\n                <br/>\n                <br/>\n\n                <button mat-raised-button color=\"primary\" (click)=\"publish()\" >Publish</button>\n\n              </div>\n\n            </form>\n\n          </mat-tab>\n\n          <mat-tab label=\"Details\">\n\n\n            <div *ngIf=\"isBeaconArea()\">\n              <br/>\n              <br/>\n\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Beacon Type:\" [(ngModel)]=\"beacons[0].type\"  name=\"type\"  id=\"type\" [disabled]=\"true\" >\n              </mat-form-field>\n\n\n              <div *ngIf=\"beacons[0].type == 'iBeacon'\">\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"UUID\" [(ngModel)]=\"beacons[0].uuid\"  name=\"uuid\"  id=\"uuid\" [disabled]=\"true\" >\n                </mat-form-field>\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"Major\" [(ngModel)]=\"beacons[0].major\"  name=\"major\"  id=\"major\" [disabled]=\"true\" >\n                </mat-form-field>\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"Minor\" [(ngModel)]=\"beacons[0].minor\"  name=\"minor\"  id=\"minor\" [disabled]=\"true\" >\n                </mat-form-field>\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"Map to Number: \" [(ngModel)]=\"beacons[0].ref\"  name=\"ref\"  id=\"ref\" [disabled]=\"true\" >\n                </mat-form-field>\n\n              </div>\n\n\n              <div *ngIf=\"beacons[0].type == 'eddystone'\">\n                \n                \n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"Namespace ID\" [(ngModel)]=\"beacons[0].nameSpaceId\"  name=\"nameSpaceId\"  id=\"nameSpaceId\" [disabled]=\"true\" required=\"required\" >\n                </mat-form-field>\n\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"Instance ID\" [(ngModel)]=\"beacons[0].instanceId\"  name=\"instanceId\"  id=\"instanceId\" [disabled]=\"true\" >\n                </mat-form-field>\n                <mat-form-field class=\"input-full-width\">\n                  <input matInput placeholder=\"Map to Number: \" [(ngModel)]=\"beacons[0].ref\"  name=\"ref\"  id=\"ref\" [disabled]=\"true\" >\n                </mat-form-field>\n\n              </div>\n\n            </div>\n          \n            <br/>\n            <br/>\n            \n            \n            \n            \n            <div *ngIf=\"isContentArea()\">\n\n              <br/>\n              <br/>\n              \n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Type\" value=\"Content Area\"  name=\"instanceId\"  id=\"instanceId\" [disabled]=\"true\" >\n              </mat-form-field>\n\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Type\" value=\"Name of Area: \"  [(ngModel)]=\"contentAreaName\"  name=\"instanceId\"  id=\"instanceId\" [disabled]=\"true\" >\n              </mat-form-field>\n\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Number of Beacons \" [(ngModel)]=\"beacons.length\"  name=\"ref\"  id=\"ref\" [disabled]=\"true\" >\n              </mat-form-field>\n\n\n              <h4>Beacons:</h4>\n              <div style=\"max-height: 300px; overflow-y: scroll\">\n\n                <ul *ngFor=\"let b of containedBeacons; let i = index\">\n                  <li> <p>{{b}}</p> </li>\n                </ul>\n\n              </div>\n\n\n\n\n              <br/>\n              <br/>\n              \n            </div>\n          \n          </mat-tab>\n          \n\n          <mat-tab label=\"Telemetry\" *ngIf=\"isBeaconArea()\">\n            <br/>\n            <br/>\n\n            <div>\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Last Seen: \" value=\"{{getAsFormattedDate(beacons[0].lastSeen)}}\"  name=\"last_seen\"  id=\"last_seen\" [disabled]=\"true\" >\n              </mat-form-field>\n\n              <mat-form-field class=\"input-full-width\">\n                <input matInput placeholder=\"Created On: \" value=\"{{getAsFormattedDate(beacons[0].created)}}\"  name=\"created\"  id=\"created\" [disabled]=\"true\" >\n              </mat-form-field>\n\n              <mat-form-field class=\"input-full-width\">\n                <textarea matInput placeholder=\"Telemetry\" [(ngModel)]=\"beacons[0].telemetry\"  name=\"body\"  id=\"body\" required=\"required\"></textarea>\n              </mat-form-field>\n              \n              \n              \n\n            </div>\n\n            <br/>\n            <br/>\n          \n          </mat-tab>\n        </mat-tab-group>\n        \n      </div>\n\n      \n    </div>\n\n  </main>"
        }),
        __param(9, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_8__services_content_service__["a" /* ContentProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogAddContentComponent);
    return DialogAddContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/floorplan/floorplan.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n  <mat-card style=\"min-height: 700px\">\n    <h1 style=\"align-content: center; \" class=\"text-center\">{{floorplan.name}}\n    </h1>\n\n    <p>iBeacon -> <img #icon src=\"../../../assets/beacon_icon.png\"\n                    style=\"width: 30px; height: 30px\"/>  EddyStone -> <img #icon2 src=\"../../../assets/beacon_icon2.png\"\n                                                                           style=\"width: 30px; height: 30px\"/> </p>\n\n    <br/>\n    <br/>\n    <div>\n      <img-map #imgMap\n               src=\"{{this.values.getServiceEndPoint()+floorplan.url}}\"\n               [markers]=\"pins\"\n               [polygons]=\"polygons\"\n               imageSmoothing=\"true\"\n               smoothingQuality=\"high\"\n               (onMarkerDoubleClicked)=\"showBeaconDetails($event)\"\n               (onPolygonDoubleClicked)=\"showPolygonDetails($event)\"\n               polygonEnabled=\"true\"\n               showPolyNodes=\"true\"\n\n      ></img-map>\n\n    </div>\n    <br/>\n    <div>\n      <br/>\n\n      <div class=\"row\">\n\n        <div class=\"\">\n          <h4>Floorplan - Details:</h4>\n          <strong>Beacon count: </strong> <span>{{getBeaconSize()}}</span> <br/>\n          <strong>Content Areas: </strong> <span>0</span> <br/>\n          <strong>Total Assigned Contents so Far: </strong> <span></span> <br/>\n          <strong>Date Added: </strong> <span> {{floorplan.created}} </span> <br/>\n          <br/>\n        </div>\n\n\n      </div>\n\n      <br/>\n\n\n      <br/>\n      <br/>\n    </div>\n\n\n  </mat-card>\n\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/floorplan/floorplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientFloorplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__ = __webpack_require__("../../../../../src/app/components/plugin/ng2-img-map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialog_add_content_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/floorplan/dialog-add-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ClientFloorplanComponent = (function () {
    function ClientFloorplanComponent(router, activeRouter, authService, projectProvider, userProvider, floorService, values, flashMessagesService, snackBarRef, dialog) {
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
        this.polygons = [];
        this.presentUser = "";
        this.changed = false;
        this.floorplanId = "";
        this.projectID = "";
    }
    ClientFloorplanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (result) {
            if (result) {
                if (result.user) {
                    _this.presentUser = result.user;
                    _this.activeRouter.params.subscribe(function (params) {
                        _this.floorplanId = params['floorplanId'];
                        _this.projectID = params['id'];
                        _this.floorService.getFloorPlan(_this.floorplanId, _this.projectID).subscribe(function (data) {
                            if (data) {
                                _this.presentProject = data.data.project;
                                var userAllowed_1 = false;
                                _this.presentProject.users.forEach(function (user, index) {
                                    if (user.user_id === _this.presentUser._id) {
                                        userAllowed_1 = true;
                                    }
                                });
                                if (!userAllowed_1) {
                                    _this.router.navigate(["../"], { relativeTo: _this.activeRouter.parent });
                                }
                                _this.floorplan = data.data.floorplan;
                                for (var i = 0; i < _this.floorplan.beacons.length; i++) {
                                    var b = _this.floorplan.beacons[i];
                                    var m = new __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["b" /* Marker */](b.map.x, b.map.y);
                                    m.size = 20;
                                    m.data = b;
                                    var icon = "";
                                    if (b.type.toLowerCase() === "iBeacon".toLowerCase())
                                        icon = _this.icon.nativeElement;
                                    else
                                        icon = _this.icon2.nativeElement;
                                    m.setAsComposite(icon, __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["d" /* ShapeType */].Circle, 30, 30);
                                    _this.pins.push(m);
                                }
                                for (var i = 0; i < _this.floorplan.areas.length; i++) {
                                    var area = _this.floorplan.areas[i];
                                    var p = new __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["c" /* Polygon */]();
                                    p.setVertices(area.coordinates);
                                    p.data = area;
                                    _this.polygons.push(p);
                                }
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
    ClientFloorplanComponent.prototype.getBeaconSize = function () {
        if (this.floorplan.beacons)
            return this.floorplan.beacons.length;
        else
            return 0;
    };
    ClientFloorplanComponent.prototype.showBeaconDetails = function (index) {
        var _this = this;
        var beacons = [];
        beacons.push(this.pins[index].data);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__dialog_add_content_component__["a" /* DialogAddContentComponent */], {
            width: '650px',
            data: {
                beacons: beacons,
                index: index,
                projectId: this.projectID,
                floorplanId: this.floorplanId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.success) {
                    _this.snackBarRef.open("Message Published successfully", "Close", {
                        duration: 3000,
                    });
                }
            }
        });
    };
    ClientFloorplanComponent.prototype.showPolygonDetails = function (index) {
        var _this = this;
        this.changed = true;
        var p = this.polygons[index];
        var beacons = [];
        for (var i = 0; i < this.pins.length; i++) {
            var b = this.pins[i];
            var coords = [b.x, b.y];
            if (p.isPointInPolygon(coords)) {
                beacons.push(b.data);
            }
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__dialog_add_content_component__["a" /* DialogAddContentComponent */], {
            width: '650px',
            data: {
                index: index,
                area: this.polygons[index].data,
                projectId: this.projectID,
                floorplanId: this.floorplanId,
                beacons: beacons
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.success) {
                    _this.snackBarRef.open("Message Published successfully", "Close", {
                        duration: 3000,
                    });
                }
            }
            //this.contentAreaChangeList.push(this.polygons[index]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imgMap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__plugin_ng2_img_map__["a" /* ImgMapComponent */])
    ], ClientFloorplanComponent.prototype, "floorplanContext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('icon'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ClientFloorplanComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('icon2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ClientFloorplanComponent.prototype, "icon2", void 0);
    ClientFloorplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-floorplan',
            template: __webpack_require__("../../../../../src/app/components/dashboard/client/floorplan/floorplan.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_8__models_Values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDialog */]])
    ], ClientFloorplanComponent);
    return ClientFloorplanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf=\"user\">\n\n<h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/dashboard/client/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/client/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/project-overview/dash-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/project-overview/dash-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n\n  <!-- class=\"container mat-elevation-z8\" -->\n\n    <div >\n\n      <div *ngIf=\"!is_project\" style=\"text-align: center; margin-top: 50px\">\n        <h2>Welcome!</h2>\n        <p>{{presentUser.name}}</p>\n      </div>\n\n      <div *ngIf=\"is_project\">\n\n        <div style=\"text-align: center; margin-top: 50px\">\n          <h2>{{project_name}}</h2>\n          <p>{{project_description}}</p>\n\n          <h4>Access token</h4>\n          <p>xxx: {{access_token_for_project}}</p>\n\n\n          <div style=\"margin: auto auto; width: 400px\">\n            <stat-piechart #piechart></stat-piechart>\n          </div>\n\n        </div>\n\n        <br/>\n        <div class=\"row\">\n\n          <div class=\"col-8\">\n            <stat-horizontal-barchart #barchart></stat-horizontal-barchart>\n          </div>\n\n          <div class=\"col-3\">\n\n            <h3>Total Number of Contents:</h3>\n              <div> {{number_of_content}} </div>\n          </div>\n\n        </div>\n\n\n\n\n      </div>\n\n      <br>\n      <br>\n\n    </div>\n\n  <br>\n\n  <br>\n\n\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/project-overview/dash-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__statistics_bar_horizontal_stacked_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/statistics/bar-horizontal-stacked.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__statistics_pie_chart_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/statistics/pie-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var single = [
    {
        "name": "Germany",
        "value": 8940000
    },
    {
        "name": "USA",
        "value": 5000000
    },
    {
        "name": "France",
        "value": 7200000
    }
];
var DashOverviewComponent = (function () {
    function DashOverviewComponent(authservice, activeRouter, authService, projectProvider, userProvider, floorService, values, flashMessagesService, contentProvider) {
        var _this = this;
        this.authservice = authservice;
        this.activeRouter = activeRouter;
        this.authService = authService;
        this.projectProvider = projectProvider;
        this.userProvider = userProvider;
        this.floorService = floorService;
        this.values = values;
        this.flashMessagesService = flashMessagesService;
        this.contentProvider = contentProvider;
        this.presentProject = "";
        this.presentUser = "";
        this.token = "";
        this.is_project = false;
        this.projectId = "";
        this.project_name = "";
        this.project_description = "";
        this.access_token_for_project = "";
        this.number_ibeacons = 0;
        this.number_eddystone = 0;
        this.number_of_content = 0;
        this.number_of_floorplan = 0;
        // CHARTS //
        this.barData = [];
        this.pieData = [];
        this.view = [500, 300];
        authservice.getProfile().subscribe(function (result) {
            if (result) {
                if (result.user) {
                    _this.presentUser = result.user;
                }
            }
        });
    }
    DashOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.barData = [];
            _this.pieData = [];
            _this.number_ibeacons = 0;
            _this.number_eddystone = 0;
            //this.number_of_content = 0;
            _this.number_of_floorplan = 0;
            if (params['id']) {
                _this.is_project = true;
                _this.projectId = params['id'];
                _this.projectProvider.getProjectData(_this.projectId).subscribe(function (result) {
                    if (result.success) {
                        _this.project_name = result.project.name;
                        _this.project_description = result.project.description;
                        result.project.users.forEach(function (user) {
                            if (user.user_id === _this.presentUser._id) {
                                _this.access_token_for_project = user.token;
                            }
                        });
                        if (result.project.floorPlans.length > 0) {
                            result.project.floorPlans.forEach(function (fp) {
                                _this.number_of_floorplan++;
                                var data = {
                                    name: fp.name,
                                    series: []
                                };
                                var fp_ibeacon_num = 0;
                                var fp_eddy_num = 0;
                                fp.beacons.forEach(function (b) {
                                    if (b.type == "iBeacon") {
                                        fp_ibeacon_num++;
                                        _this.number_ibeacons++;
                                    }
                                    else {
                                        _this.number_eddystone++;
                                        fp_eddy_num++;
                                    }
                                });
                                var bd = {
                                    name: "iBeacon",
                                    value: fp_ibeacon_num
                                };
                                var ed = {
                                    name: "Eddystone",
                                    value: fp_eddy_num
                                };
                                data.series.push(bd);
                                data.series.push(ed);
                                _this.barData.push(data);
                            });
                            _this.barChart.setData(_this.barData);
                            var ibp = {
                                "name": "iBeacon",
                                "value": _this.number_ibeacons
                            };
                            var edp = {
                                "name": "Eddystone",
                                "value": _this.number_eddystone
                            };
                            _this.pieData.push(ibp);
                            _this.pieData.push(edp);
                            _this.piechart.setDate(_this.pieData);
                        }
                        else {
                            var d = {
                                name: " ",
                                series: []
                            };
                            var ibp = {
                                "name": "iBeacon",
                                "value": 0
                            };
                            var edp = {
                                "name": "Eddystone",
                                "value": 0
                            };
                            _this.pieData.push(ibp);
                            _this.pieData.push(edp);
                            _this.barChart.setData([d]);
                            _this.piechart.setDate(_this.pieData);
                        }
                    }
                });
                _this.contentProvider.getContentsFromProject(_this.projectId).subscribe(function (result) {
                    if (result.success)
                        _this.number_of_content = result.contents.length;
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barchart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__statistics_bar_horizontal_stacked_component__["a" /* BarHorizontalStackedComponentExport */])
    ], DashOverviewComponent.prototype, "barChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('piechart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__statistics_pie_chart_component__["a" /* PieAdvancedComponentExport */])
    ], DashOverviewComponent.prototype, "piechart", void 0);
    DashOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-overview',
            template: __webpack_require__("../../../../../src/app/components/dashboard/client/project-overview/dash-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/client/project-overview/dash-overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_floorplan_service__["a" /* FloorplanProvider */],
            __WEBPACK_IMPORTED_MODULE_1__models_Values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_8__services_content_service__["a" /* ContentProvider */]])
    ], DashOverviewComponent);
    return DashOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/statistics/bar-horizontal-stacked.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarHorizontalStackedComponentExport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarHorizontalStackedComponentExport = (function () {
    function BarHorizontalStackedComponentExport() {
        this.view = [700, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
        };
        //Object.assign(this, { single })
    }
    BarHorizontalStackedComponentExport.prototype.setData = function (data) {
        this.multi = data;
        //     this.multi = [... this.multi];
        //    this.multi.push(data);
        // Object.assign(this, { data });
    };
    BarHorizontalStackedComponentExport.prototype.onSelect = function (event) {
        console.log(event);
    };
    BarHorizontalStackedComponentExport.prototype.ngOnInit = function () {
    };
    BarHorizontalStackedComponentExport = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stat-horizontal-barchart',
            template: "\n    <ngx-charts-bar-horizontal-2d\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [gradient]=\"gradient\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [showDataLabel]=\"true\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-bar-horizontal-2d>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], BarHorizontalStackedComponentExport);
    return BarHorizontalStackedComponentExport;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/client/statistics/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieAdvancedComponentExport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieAdvancedComponentExport = (function () {
    function PieAdvancedComponentExport() {
        this.multi = [];
        this.view = [500, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
        };
        //Object.assign(this, { single })
    }
    PieAdvancedComponentExport.prototype.setDate = function (data) {
        this.multi = data;
        //    this.multi = [...this.multi];
        //Object.assign(this, { data });
    };
    PieAdvancedComponentExport.prototype.onSelect = function (event) {
        console.log(event);
    };
    PieAdvancedComponentExport.prototype.ngOnInit = function () {
    };
    PieAdvancedComponentExport = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stat-piechart',
            template: "\n    <ngx-charts-advanced-pie-chart\n      [view]=\"view\"\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [gradient]=\"gradient\"\n      [animations]=\"true\"\n      label=\"Total Beacons\"\n      \n      \n      >\n    </ngx-charts-advanced-pie-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], PieAdvancedComponentExport);
    return PieAdvancedComponentExport;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_dash_users_dash_users_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/dash-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_project_overview_dash_overview_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/project-overview/dash-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_dash_projects_dash_projects_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-projects/dash-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_dash_project_detail_dash_project_home_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-project-detail/dash-project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_dash_floorplan_dash_floorplan_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dash-floorplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__client_floorplan_floorplan_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/floorplan/floorplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_content_content_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/content/content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var dashRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', redirectTo: "overview", pathMatch: "full" },
            { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_5__client_project_overview_dash_overview_component__["a" /* DashOverviewComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__admin_dash_users_dash_users_component__["a" /* DashUsersComponent */] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__admin_dash_projects_dash_projects_component__["a" /* DashProjectsComponent */] },
            { path: 'projects/:id', component: __WEBPACK_IMPORTED_MODULE_7__admin_dash_project_detail_dash_project_home_component__["a" /* DashProjectHomeComponent */] },
            { path: 'projects/:projectid/floorplan/:floorplanid', component: __WEBPACK_IMPORTED_MODULE_8__admin_dash_floorplan_dash_floorplan_component__["a" /* DashFloorplanComponent */] },
            { path: 'project/:id', children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__client_project_overview_dash_overview_component__["a" /* DashOverviewComponent */] },
                    { path: 'floorplan/:floorplanId', component: __WEBPACK_IMPORTED_MODULE_9__client_floorplan_floorplan_component__["a" /* ClientFloorplanComponent */] },
                    { path: 'contents/:id', component: __WEBPACK_IMPORTED_MODULE_10__client_content_content_component__["a" /* ContentComponent */] }
                ] },
        ] },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(dashRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: "\n  \n  <div class=\"row\">\n  <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n    <app-sidebar></app-sidebar>\n  </nav>\n\n  <div class=\"col-sm-9 offset-sm-0 col-md-10\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n  \n  \n  "
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_dash_home_dash_home_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-home/dash-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_project_overview_dash_overview_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/project-overview/dash-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_dash_users_dash_users_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/dash-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_dash_users_register_register_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_component__ = __webpack_require__("../../../../../src/app/components/util.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_dash_projects_dash_projects_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-projects/dash-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_dash_projects_dash_project_dialog_components__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-projects/dash-project-dialog.components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_dash_project_detail_dash_project_home_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-project-detail/dash-project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_module__ = __webpack_require__("../../../../../src/app/material-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_dash_project_detail_project_image_dialog_components__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-project-detail/project-image-dialog.components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_dash_floorplan_dash_floorplan_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dash-floorplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_floorplan_service__ = __webpack_require__("../../../../../src/app/services/floorplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__plugin_ng2_img_map__ = __webpack_require__("../../../../../src/app/components/plugin/ng2-img-map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__plugin_file_size_pipe__ = __webpack_require__("../../../../../src/app/components/plugin/file-size.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_dash_beacon_beacon_dialog_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-beacon/beacon-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_dash_floorplan_dialog_floorplan_name_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dialog-floorplan-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_dash_floorplan_dialog_contentarea_name_component__ = __webpack_require__("../../../../../src/app/components/dashboard/admin/dash-floorplan/dialog-contentarea-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__client_floorplan_floorplan_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/floorplan/floorplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__client_floorplan_dialog_add_content_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/floorplan/dialog-add-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__client_content_content_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__client_statistics_bar_horizontal_stacked_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/statistics/bar-horizontal-stacked.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__client_statistics_pie_chart_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/statistics/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__client_content_view_content_component__ = __webpack_require__("../../../../../src/app/components/dashboard/client/content/view-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__admin_dash_home_dash_home_component__["a" /* DashHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__client_project_overview_dash_overview_component__["a" /* DashOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__admin_dash_users_dash_users_component__["a" /* DashUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__client_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__admin_dash_users_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__util_component__["b" /* YesNoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__util_component__["a" /* InfoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_dash_projects_dash_projects_component__["a" /* DashProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_dash_projects_dash_project_dialog_components__["a" /* DashProjectDialogComponents */],
                __WEBPACK_IMPORTED_MODULE_11__admin_dash_project_detail_dash_project_home_component__["a" /* DashProjectHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__admin_dash_project_detail_project_image_dialog_components__["a" /* ProjectImageDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_dash_floorplan_dash_floorplan_component__["a" /* DashFloorplanComponent */],
                __WEBPACK_IMPORTED_MODULE_22__plugin_ng2_img_map__["a" /* ImgMapComponent */],
                __WEBPACK_IMPORTED_MODULE_23__plugin_file_size_pipe__["a" /* FileSizePipe */],
                __WEBPACK_IMPORTED_MODULE_24__admin_dash_beacon_beacon_dialog_component__["a" /* BeaconDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__admin_dash_floorplan_dialog_floorplan_name_component__["a" /* DialogFloorPlanNameComponent */],
                __WEBPACK_IMPORTED_MODULE_26__admin_dash_floorplan_dialog_contentarea_name_component__["a" /* DialogContentAreaNameComponent */],
                __WEBPACK_IMPORTED_MODULE_27__client_floorplan_floorplan_component__["a" /* ClientFloorplanComponent */],
                __WEBPACK_IMPORTED_MODULE_28__client_floorplan_dialog_add_content_component__["a" /* DialogAddContentComponent */],
                __WEBPACK_IMPORTED_MODULE_30__client_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_32__client_statistics_bar_horizontal_stacked_component__["a" /* BarHorizontalStackedComponentExport */],
                __WEBPACK_IMPORTED_MODULE_33__client_statistics_pie_chart_component__["a" /* PieAdvancedComponentExport */],
                __WEBPACK_IMPORTED_MODULE_34__client_content_view_content_component__["a" /* DialogViewContentComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__util_component__["b" /* YesNoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_dash_projects_dash_project_dialog_components__["a" /* DashProjectDialogComponents */],
                __WEBPACK_IMPORTED_MODULE_8__util_component__["a" /* InfoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__admin_dash_project_detail_project_image_dialog_components__["a" /* ProjectImageDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_24__admin_dash_beacon_beacon_dialog_component__["a" /* BeaconDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__admin_dash_floorplan_dialog_floorplan_name_component__["a" /* DialogFloorPlanNameComponent */],
                __WEBPACK_IMPORTED_MODULE_26__admin_dash_floorplan_dialog_contentarea_name_component__["a" /* DialogContentAreaNameComponent */],
                __WEBPACK_IMPORTED_MODULE_28__client_floorplan_dialog_add_content_component__["a" /* DialogAddContentComponent */],
                __WEBPACK_IMPORTED_MODULE_32__client_statistics_bar_horizontal_stacked_component__["a" /* BarHorizontalStackedComponentExport */],
                __WEBPACK_IMPORTED_MODULE_33__client_statistics_pie_chart_component__["a" /* PieAdvancedComponentExport */],
                __WEBPACK_IMPORTED_MODULE_34__client_content_view_content_component__["a" /* DialogViewContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__material_module__["a" /* SharedMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts__["NgxChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_user_service__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_19__services_project_service__["a" /* ProjectProvider */], __WEBPACK_IMPORTED_MODULE_21__services_floorplan_service__["a" /* FloorplanProvider */], __WEBPACK_IMPORTED_MODULE_29__services_content_service__["a" /* ContentProvider */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills flex-column\">\n\n</ul>\n\n<ul class=\"nav-list nav nav-pills flex-column\" *ngIf=\"isadmin\">\n\n  <li class=\"nav\">\n    <a class=\"nav-link\" [routerLinkActive] = \"['active']\" [routerLink]=\"['overview']\">Overview <span class=\"sr-only\">(current)</span></a>\n  </li>\n\n  <li class=\"nav-item\" *ngIf=\"isadmin\">\n    <a class=\"nav-link\" [routerLinkActive] = \"['active']\" [routerLink]=\"['users']\">Users</a>\n  </li>\n  <li class=\"nav-item\" *ngIf=\"isadmin\">\n    <a class=\"nav-link\" [routerLinkActive] = \"['active']\" [routerLink]=\"['projects']\">Projects</a>\n  </li>\n\n</ul>\n\n<hr />\n\n<ul class=\"nav-list nav nav-pills flex-column\">\n  <li class=\"nav-item\" *ngFor=\"let project of projects\" >\n    <a class=\"nav-link\" [routerLink]=\"'project/'+project._id + ''\" [routerLinkActive] = \"['active']\">{{project.name}}</a>\n\n    <ul [routerLinkActive] = \"['submenu']\" class=\"nav-list\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"'project/' + project._id +'/home' \" [routerLinkActive] = \"['active2']\">Overview</a>\n       </li>\n\n      <li class=\"nav-item\" *ngFor=\"let floorPlan of project.floorPlans; let i = index\">\n        <a class=\"nav-link\" [routerLink]=\"'project/'+project._id+'/floorplan/'+floorPlan._id\" [routerLinkActive] = \"['active2']\">{{getFloorPlanName(floorPlan, i) | slice:0:20}}</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"'project/'+project._id+'/contents/'+project._id\" [routerLinkActive] = \"['active2']\">Contents</a>\n      </li>\n    </ul>\n\n  </li>\n\n\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(router, authService, projectProvider) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.projectProvider = projectProvider;
        this.isadmin = false;
        this.projects = [];
        this.authService.getProfile().subscribe(function (result) {
            _this.isadmin = result.user.isadmin;
            _this.projectProvider.getProjectsForUser(result.user._id).subscribe(function (data) {
                _this.projects = data;
            });
        });
    }
    SidebarComponent.prototype.getFloorPlanName = function (floorplan, index) {
        if (floorplan.name) {
            return floorplan.name;
        }
        else
            return "Floorplan " + index;
    };
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectProvider */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n      <span class=\"text-muted\">{{title}}, by {{copyright}} &nbsp; {{year}}.</span>\n      </div>\n      </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(info) {
        this.info = info;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.title = this.info.getTitle();
        this.copyright = this.info.getCopyright();
        this.year = this.info.getYear();
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_Values__["a" /* Values */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"jumbotron text-center\">\n  <h1>Beacon Management Framework</h1>\n  <p class=\"lead\">Welcome to the home of the Beacon Management Framework</p>\n  <div>\n\n    <!--    <a class=\"btn btn-primary\" routerLink=\"/register\">Register</a> -->\n    <a class=\"btn btn-primary\" routerLink=\"/login\">Login</a>\n  </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n\n\n<h2 class=\"page-header\">Please sign in</h2>\n\n<form (submit)=\"onLoginSubmit()\">\n\n <div class=\"form-group\">\n\n  <label for=\"username\" class=\"sr-only\">Email address</label>\n  <input type=\"text\" id=\"username\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required = \"required\" autofocus >\n\n </div>\n\n  <div class=\"form-group\">\n\n  <label for=\"password\" >Password</label>\n  <input type=\"password\" id=\"password\"  [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" required=\"required\" >\n\n  </div>\n    <!--\n    <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n    </label>\n  </div>\n  -->\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//needed for redirecting


var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n  <div class=\"container\">\n\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav  mr-auto\">\n\n      <li class=\"nav-item\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\"  [routerLinkActive] = \"['active']\" [routerLink]=\"['/']\">Home</a>\n      </li>\n\n\n\n    </ul>\n\n\n    <ul class=\"navbar-nav  ml-auto\">\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\">\n        <a class=\"nav-link\" [routerLinkActive] = \"['active']\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n\n\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive] = \"['active']\">\n        <a class=\"nav-link\"  [routerLink]=\"['/login']\">Login</a>\n      </li>\n\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\n        <a  class=\"nav-link\"(click)=\"onLogoutClick()\"  href=\"#\">Logout</a>\n      </li>\n\n    </ul>\n\n\n  </div>\n  </div>\n</nav>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//needed for redirecting



var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, appInfo) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.appInfo = appInfo;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.title = this.appInfo.getTitle();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", {
            cssClass: 'alert-success',
            timeout: 300
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__models_Values__["a" /* Values */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/plugin/file-size.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
var FileSizePipe = (function () {
    function FileSizePipe() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    FileSizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes))
            return '?';
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    FileSizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'fileSize' })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/plugin/ng2-img-map.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgMapComponent; });
/* unused harmony export MarkerType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ShapeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Polygon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var POLY_NODE_FILL = 'rgba(202, 202, 202, 0.6)';
var POLY_NORMAL_FILL = 'rgba(170, 172, 225, 0.6)';
var POLY_HOVER_FILL = 'rgba(0, 0, 255, 0.4)';
var POLY_ACTIVE_FILL = 'rgba(255, 0, 0, 0.6)';
var POLY_NODE_SIZE = 4;
var POLY_LINE_WIDTH = 5;
var ImgMapComponent = (function () {
    function ImgMapComponent(renderer) {
        this.renderer = renderer;
        this.imageSmoothingEnabled = false;
        /**
         *  Quality of drawn image - low|medium|high. Dependent on if ImageSmoothing is enabled
         * @type {string}
         */
        this.imageSmoothingQuality = "medium";
        this.draggable = false;
        this.ACTIVE_MARKER_SIZE = 25;
        this.polygonEnabled = false;
        this.showPolyNodes = false;
        this.polygons = [];
        this.polygonDraggedIndex = -1;
        this.polygonActive = -1;
        this.polygonHover = -1;
        this.isDrawingPlygon = null;
        this.polygonDragThreshold = 2;
        //Needed for noting polygon drag direction
        this.lastX = null;
        this.lastY = null;
        /**
         * On Marker change event.
         */
        this.changeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * On mark event.
         */
        this.markEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         *
         * Post Render to Enable Access to Component Context
         *
         *
         */
        this.afterinitEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.markerClickedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.markerDblClickedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * On Marker change event.
         */
        this.polyChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.polygonClickedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.polygonDblClickedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Collection of markers.
         */
        this.markers = [];
        /**
         * Index of the hover state marker.
         */
        this.markerHover = null;
        this.draggedIndex = -1;
        this.draggedPosition = null;
    }
    Object.defineProperty(ImgMapComponent.prototype, "setMarkers", {
        set: function (markers) {
            this.markerActive = null;
            this.markerHover = null;
            this.markers = markers;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgMapComponent.prototype, "setPolygons", {
        set: function (polygons) {
            this.polygonActive = -1;
            this.polygonHover = -1;
            this.polygons = polygons;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    ImgMapComponent.prototype.change = function (markerIndex) {
        this.changeEvent.emit(markerIndex);
        this.draw();
    };
    /**
     * Get the cursor position relative to the canvas.
     */
    ImgMapComponent.prototype.cursor = function (event) {
        var rect = this.canvas.nativeElement.getBoundingClientRect();
        return [
            event.clientX - rect.left,
            event.clientY - rect.top
        ];
    };
    /**
     * Check if a position is inside a marker.
     */
    ImgMapComponent.prototype.insideMarker = function (marker, coordinate) {
        var pixel = marker.getCoordsAsPixel(this.image);
        if (marker.type == MarkerType.Shape) {
            if (marker.base == ShapeType.Circle) {
                return Math.sqrt((coordinate[0] - pixel[0]) * (coordinate[0] - pixel[0])
                    + (coordinate[1] - pixel[1]) * (coordinate[1] - pixel[1])) < marker.size;
            }
            else {
                return (coordinate[0] >= pixel[0] && coordinate[0] <= ((pixel[0]) + marker.size))
                    &&
                        (coordinate[1] >= pixel[1] && coordinate[1] <= ((pixel[1]) + marker.size));
            }
        }
        else if (marker.type == MarkerType.Composite) {
            var inside = false;
            if (marker.base == ShapeType.Circle) {
                inside = Math.sqrt((coordinate[0] - pixel[0]) * (coordinate[0] - pixel[0])
                    + (coordinate[1] - pixel[1]) * (coordinate[1] - pixel[1])) < marker.size;
                if (inside)
                    return inside;
            }
            if (marker.base == ShapeType.Square) {
                inside = (coordinate[0] >= pixel[0] && coordinate[0] <= ((pixel[0]) + marker.size))
                    &&
                        (coordinate[1] >= pixel[1] && coordinate[1] <= ((pixel[1]) + marker.size));
                if (inside)
                    return inside;
            }
            if (!inside) {
                inside = (coordinate[0] >= pixel[0] && coordinate[0] <= ((pixel[0]) + marker.imageWidth))
                    &&
                        (coordinate[1] >= pixel[1] && coordinate[1] <= ((pixel[1]) + marker.imageHeight));
            }
            return inside;
        }
    };
    ImgMapComponent.prototype.addMarker = function (m) {
        this.markers.push(m);
        this.markerActive = this.markers.length - 1;
        if (this.changeEvent.observers.length > 0) {
            this.change(this.markerActive);
        }
        else {
            this.draw();
        }
    };
    ImgMapComponent.prototype.createMarker = function (coords, shape) {
        var dimension = this.pixelToMarker(coords);
        return new Marker(dimension[0], dimension[1], shape);
    };
    /**
     * Convert a pixel position to a percentage position.
     **/
    ImgMapComponent.prototype.pixelToMarker = function (pixel) {
        var image = this.image.nativeElement;
        return [
            (pixel[0] / image.clientWidth) * 100,
            (pixel[1] / image.clientHeight) * 100
        ];
    };
    /**
     * Sets the new marker position.
  
     **/
    ImgMapComponent.prototype.mark = function (pixel) {
        this.markerActive = this.markers.length;
        this.markers.push(this.createMarker(pixel));
        this.draw();
        this.markEvent.emit(this.markers[this.markerActive]);
    };
    /**
     * Sets the marker pixel positions.
  
     */
    /**
     * Clears the canvas and draws the markers.
     */
    ImgMapComponent.prototype.draw = function () {
        var canvas = this.canvas.nativeElement;
        var container = this.container.nativeElement;
        var image = this.image.nativeElement;
        var height = image.clientHeight;
        var width = image.clientWidth;
        this.renderer.setElementAttribute(canvas, 'height', "" + height);
        this.renderer.setElementAttribute(canvas, 'width', "" + width);
        this.renderer.setElementStyle(container, 'height', height + "px");
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, width, height);
        for (var index = 0; index < this.markers.length; index++) {
            if (index == this.draggedIndex)
                continue;
            if (this.markerActive === index) {
                this.drawMarker(this.markers[index], 'active');
            }
            else if (this.markerHover === index) {
                this.drawMarker(this.markers[index], 'hover');
            }
            else {
                this.drawMarker(this.markers[index]);
            }
        }
        if (this.draggable) {
            if (this.draggedIndex >= 0) {
                var marker = this.markers[this.draggedIndex];
                this.drawMarker(marker);
            }
        }
        if (this.polygonEnabled) {
            if (this.isDrawingPlygon != null)
                this.drawPath(this.isDrawingPlygon);
            this.drawPolygons();
        }
    };
    /**
     * Draw a marker.
     */
    ImgMapComponent.prototype.drawMarker = function (marker, type) {
        var context = this.canvas.nativeElement.getContext('2d');
        context.beginPath();
        var pixel = marker.getCoordsAsPixel(this.image);
        var size = type == 'active' ? this.ACTIVE_MARKER_SIZE : marker.size;
        switch (marker.base) {
            case ShapeType.Circle:
                context.arc(pixel[0], pixel[1], size, 0, 2 * Math.PI);
                break;
            case ShapeType.Square:
                context.rect(pixel[0], pixel[1], size, marker.size);
                break;
        }
        switch (type) {
            case 'active':
                context.fillStyle = 'rgba(255, 0, 0, 0.6)';
                break;
            case 'hover':
                context.fillStyle = 'rgba(0, 0, 255, 0.6)';
                break;
            default:
                context.fillStyle = 'rgba(0, 0, 255, 0.4)';
        }
        context.fill();
        if (marker.type == MarkerType.Composite) {
            context.beginPath();
            if (marker.type != null) {
                switch (marker.base) {
                    case ShapeType.Square:
                        pixel[0] = (pixel[0] + marker.size / 2) - marker.imageWidth / 2;
                        pixel[1] = (pixel[1] + marker.size / 2) - marker.imageHeight / 2;
                        break;
                    case ShapeType.Circle:
                        pixel[0] = (pixel[0] - marker.imageWidth / 2);
                        pixel[1] = (pixel[1] - marker.imageHeight / 2);
                        break;
                }
            }
            if (this.imageSmoothingEnabled) {
                context.mozImageSmoothingEnabled = true;
                context.imageSmoothingQuality = this.imageSmoothingQuality;
                context.webkitImageSmoothingEnabled = true;
                context.msImageSmoothingEnabled = true;
                context.imageSmoothingEnabled = true;
            }
            context.drawImage(marker.image, pixel[0], pixel[1], marker.imageWidth, marker.imageHeight);
        }
    };
    ImgMapComponent.prototype.drawPath = function (polygon) {
        var context = this.canvas.nativeElement.getContext('2d');
        context.beginPath();
        var vertices = polygon.getVertices();
        var startPoint = this.getCoordsAsPixel(vertices[0]);
        context.moveTo(startPoint[0], startPoint[1]);
        context.strokeWidth = POLY_LINE_WIDTH;
        context.strokeStyle = POLY_NODE_FILL;
        for (var i = 1; i < vertices.length; i++) {
            var presentPoint = this.getCoordsAsPixel(vertices[i]);
            context.lineTo(presentPoint[0], presentPoint[1]);
        }
        if (this.lastX != null && this.lastY != null) {
            context.lineTo(this.lastX, this.lastY);
        }
        context.stroke();
        //node points
        if (this.showPolyNodes) {
            context.beginPath();
            context.fillStyle = POLY_NODE_FILL;
            context.moveTo(startPoint[0], startPoint[1]);
            context.arc(startPoint[0], startPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);
            for (var i = 1; i < vertices.length; i++) {
                var presentPoint = this.getCoordsAsPixel(vertices[i]);
                context.moveTo(presentPoint[0], presentPoint[1]);
                context.arc(presentPoint[0], presentPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);
            }
            context.fill();
        }
    };
    ImgMapComponent.prototype.drawPolygons = function () {
        var _this = this;
        var context = this.canvas.nativeElement.getContext('2d');
        this.polygons.forEach(function (polygon, index) {
            context.beginPath();
            if (index == _this.polygonActive)
                context.fillStyle = POLY_ACTIVE_FILL;
            else if (index == _this.polygonHover)
                context.fillStyle = POLY_HOVER_FILL;
            else
                context.fillStyle = POLY_NORMAL_FILL;
            var vertices = polygon.getVertices();
            var startPoint = _this.getCoordsAsPixel(vertices[0]);
            context.moveTo(startPoint[0], startPoint[1]);
            for (var i = 1; i < vertices.length; i++) {
                var presentPoint = _this.getCoordsAsPixel(vertices[i]);
                context.lineTo(presentPoint[0], presentPoint[1]);
            }
            context.lineTo(startPoint[0], startPoint[1]);
            context.stroke();
            context.fill();
        });
        //node points
        if (this.showPolyNodes) {
            context.beginPath();
            context.fillStyle = POLY_NODE_FILL;
            this.polygons.forEach(function (polygon, index) {
                var vertices = polygon.getVertices();
                var startPoint = _this.getCoordsAsPixel(vertices[0]);
                context.moveTo(startPoint[0], startPoint[1]);
                context.arc(startPoint[0], startPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);
                for (var i = 1; i < vertices.length; i++) {
                    var presentPoint = _this.getCoordsAsPixel(vertices[i]);
                    context.moveTo(presentPoint[0], presentPoint[1]);
                    context.arc(presentPoint[0], presentPoint[1], POLY_NODE_SIZE, 0, Math.PI * 2, true);
                }
            });
            context.fill();
        }
    };
    ImgMapComponent.prototype.onClick = function (event) {
        var _this = this;
        var cursor = this.cursor(event);
        var active = false;
        var draw = false;
        var markerClicked = false;
        this.markers.forEach(function (marker, index) {
            if (_this.insideMarker(marker, cursor)) {
                markerClicked = true;
                active = true;
                if (_this.markerActive === null || _this.markerActive !== index) {
                    _this.markerActive = index;
                    draw = true;
                }
                if (_this.markerClickedEvent.observers.length)
                    _this.markerClickedEvent.emit(_this.markerActive);
            }
        });
        if (!active && this.markerActive !== null) {
            this.markerActive = null;
            draw = true;
        }
        if (!active && this.markEvent.observers.length) {
            this.mark(cursor);
        }
        if (!markerClicked) {
            if (this.polygonEnabled) {
                if (this.isDrawingPlygon != null)
                    this.addToPolygon(cursor);
            }
            var coords_1 = this.pixelToMarker(cursor);
            var activePoly_1 = false;
            this.polygons.forEach(function (polygon, index) {
                if (polygon.isPointInPolygon(coords_1)) {
                    draw = true;
                    activePoly_1 = true;
                    _this.polygonActive = index;
                    if (_this.polygonClickedEvent.observers.length) {
                        _this.polygonClickedEvent.emit(index);
                    }
                    _this.polygonHover = -1;
                }
            });
            if (!activePoly_1) {
                if (this.polygonActive >= 0)
                    draw = true;
                this.polygonActive = -1;
            }
        }
        if (draw) {
            this.draw();
        }
    };
    ImgMapComponent.prototype.onDblClick = function (event) {
        var _this = this;
        var cursor = this.cursor(event);
        var change = false;
        var markerCLicked = false;
        this.markers.forEach(function (marker, index) {
            if (_this.insideMarker(marker, cursor)) {
                markerCLicked = true;
                if (_this.markerActive === null || _this.markerActive !== index) {
                    _this.markerActive = index;
                    change = true;
                }
                if (_this.markerDblClickedEvent.observers.length)
                    _this.markerDblClickedEvent.emit(_this.markerActive);
            }
        });
        if (change) {
            this.draw();
        }
        if (markerCLicked) {
            return;
        }
        if (this.polygonEnabled) {
            var coords_2 = this.pixelToMarker(cursor);
            var polygonClicked_1 = false;
            this.polygons.forEach(function (polygon, index) {
                if (polygon.isPointInPolygon(coords_2)) {
                    polygonClicked_1 = true;
                    if (_this.polygonDblClickedEvent.observers.length) {
                        _this.polygonDblClickedEvent.emit(index);
                    }
                }
            });
            if (this.polygonDraggedIndex < 0 && !polygonClicked_1) {
                if (this.isDrawingPlygon == null) {
                    //Get last click position so you can provide visual guideline to polygon drawing to user
                    this.lastX = cursor[0];
                    this.lastY = cursor[1];
                    this.addToPolygon(cursor);
                }
                else {
                    this.addToPolygon(cursor);
                    if (this.isDrawingPlygon.getVertices().length > 2) {
                        this.polygons.push(this.isDrawingPlygon);
                        this.isDrawingPlygon = null;
                        if (this.polyChangeEvent.observers.length) {
                            this.polyChangeEvent.emit(this.polygons.length - 1);
                        }
                        this.draw();
                    }
                }
            }
        }
    };
    ImgMapComponent.prototype.onLoad = function (event) {
        this.draw();
        this.afterinitEvent.emit(this);
    };
    ImgMapComponent.prototype.onMousemove = function (event) {
        var _this = this;
        var cursor = this.cursor(event);
        var hover = false;
        var draw = false;
        this.markers.forEach(function (marker, index) {
            if (_this.insideMarker(marker, cursor)) {
                hover = true;
                if (_this.markerHover === null || _this.markerHover !== index) {
                    _this.markerHover = index;
                    draw = true;
                }
            }
        });
        if (!hover && this.markerHover !== null) {
            this.markerHover = null;
            draw = true;
        }
        var coords = this.pixelToMarker(cursor);
        if (this.draggable) {
            if (this.draggedIndex >= 0) {
                draw = true;
                //this.draggedPosition = cursor;
                this.markers[this.draggedIndex].x = coords[0];
                this.markers[this.draggedIndex].y = coords[1];
                // this.draw();
            }
            else {
                if (this.polygonEnabled) {
                    if (this.polygonDraggedIndex >= 0) {
                        if (Math.abs(this.lastX - cursor[0]) < this.polygonDragThreshold && Math.abs(this.lastY - cursor[1])) {
                            return;
                        }
                        var oldCoords = this.pixelToMarker([this.lastX, this.lastY]);
                        var diff = this.pixelToMarker([(coords[0] - oldCoords[0]), (coords[1] - oldCoords[1])]);
                        draw = true;
                        var vertices = this.polygons[this.polygonDraggedIndex].getVertices();
                        for (var i = 0; i < vertices.length; i++) {
                            vertices[i] = this.getCoordsAsPixel(vertices[i]);
                            vertices[i][0] += (cursor[0] - this.lastX);
                            vertices[i][1] += (cursor[1] - this.lastY);
                            vertices[i] = this.pixelToMarker(vertices[i]);
                        }
                        this.polygons[this.polygonDraggedIndex].setVertices(vertices);
                    }
                }
            }
        }
        //Polygon Hover
        var polyHover = false;
        this.polygons.forEach(function (polygon, index) {
            if (polygon.isPointInPolygon(coords)) {
                polyHover = true;
                if (_this.polygonHover < 0 || _this.polygonHover != index)
                    draw = true;
                _this.polygonHover = index;
            }
        });
        if (!polyHover) {
            if (!polyHover && this.polygonHover >= 0)
                draw = true;
            this.polygonHover = -1;
        }
        //Poly Path -- next vertex
        if (this.isDrawingPlygon != null && this.lastX != cursor[0] && this.lastY != cursor[1]) {
            draw = true;
        }
        if (this.polygonEnabled) {
            if (this.polygonDraggedIndex >= 0 || this.isDrawingPlygon != null) {
                this.lastX = cursor[0];
                this.lastY = cursor[1];
            }
        }
        if (draw)
            this.draw();
    };
    ImgMapComponent.prototype.onMouseout = function (event) {
        if (this.markerHover) {
            this.markerHover = null;
            this.draw();
        }
    };
    ImgMapComponent.prototype.onResize = function (event) {
        this.draw();
    };
    ImgMapComponent.prototype.onMouseDown = function (event) {
        var _this = this;
        var cursor = this.cursor(event);
        if (this.draggable) {
            this.markers.forEach(function (marker, index) {
                if (_this.insideMarker(marker, cursor)) {
                    if (_this.draggedIndex < 0) {
                        _this.markerActive = null;
                        _this.draggedIndex = index;
                    }
                }
            });
            if (this.draggedIndex < 0) {
                var coords_3 = this.pixelToMarker(cursor);
                if (this.polygonEnabled) {
                    this.polygons.forEach(function (polygon, index) {
                        if (polygon.isPointInPolygon(coords_3)) {
                            _this.lastX = cursor[0];
                            _this.lastY = cursor[1];
                            _this.polygonDraggedIndex = index;
                            _this.polygonActive = index;
                            return;
                        }
                    });
                }
            }
        }
    };
    ImgMapComponent.prototype.onMouseUp = function (event) {
        var change = false;
        if (this.draggable) {
            if (this.draggedIndex >= 0) {
                change = true;
                if (this.changeEvent.observers.length > 0) {
                    this.change(this.draggedIndex);
                }
                this.draggedIndex = -1;
            }
            if (this.polygonDraggedIndex >= 0) {
                change = true;
                if (this.polyChangeEvent.observers.length) {
                    this.polyChangeEvent.emit(this.polygonDraggedIndex);
                }
                this.polygonActive = this.polygonDraggedIndex;
                this.polygonDraggedIndex = -1;
            }
            if (change) {
                this.draw;
            }
        }
    };
    ImgMapComponent.prototype.addToPolygon = function (cursor) {
        var change = false;
        var coords = this.pixelToMarker(cursor);
        if (this.isDrawingPlygon == null) {
            change = true;
            this.isDrawingPlygon = new Polygon(coords[0], coords[1]);
        }
        else {
            //To handle browsers that fire both click and double click
            var vertex = this.isDrawingPlygon.getLastVertixCoordinate();
            if (vertex[0] != coords[0] && vertex[1] != coords[1]) {
                this.isDrawingPlygon.addPoint(coords[0], coords[1]);
                change = true;
            }
        }
        if (change) {
            this.draw();
        }
    };
    ImgMapComponent.prototype.getCoordsAsPixel = function (coordinates) {
        var image = this.image.nativeElement;
        var x = (image.clientWidth / 100) * coordinates[0];
        var y = (image.clientHeight / 100) * coordinates[1];
        return [
            x, y
        ];
    };
    ImgMapComponent.prototype.getCoordsAsPixelAndModValue = function (coordinates, diff) {
        var image = this.image.nativeElement;
        var x = (image.clientWidth / 100) * coordinates[0];
        var y = (image.clientHeight / 100) * coordinates[1];
        return [
            x - diff[0], y - diff[1]
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ImgMapComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ImgMapComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('image'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ImgMapComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('markers'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ImgMapComponent.prototype, "setMarkers", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImgMapComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('imageSmoothing'),
        __metadata("design:type", Boolean)
    ], ImgMapComponent.prototype, "imageSmoothingEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('smoothingQuality'),
        __metadata("design:type", String)
    ], ImgMapComponent.prototype, "imageSmoothingQuality", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('canDrag'),
        __metadata("design:type", Boolean)
    ], ImgMapComponent.prototype, "draggable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('activeMarkerSize'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "ACTIVE_MARKER_SIZE", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('polygons'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ImgMapComponent.prototype, "setPolygons", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('polygonEnabled'),
        __metadata("design:type", Boolean)
    ], ImgMapComponent.prototype, "polygonEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showPolyNodes'),
        __metadata("design:type", Boolean)
    ], ImgMapComponent.prototype, "showPolyNodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('change'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "changeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('mark'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "markEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('viewDidAppear'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "afterinitEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onMarkerClicked'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "markerClickedEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onMarkerDoubleClicked'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "markerDblClickedEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onPolyChange'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "polyChangeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onPolygonClicked'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "polygonClickedEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onPolygonDoubleClicked'),
        __metadata("design:type", Object)
    ], ImgMapComponent.prototype, "polygonDblClickedEvent", void 0);
    ImgMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'img-map',
            styles: [
                '.img-map { position: relative; }',
                '.img-map canvas, .img-map img { position: absolute; top: 0; left: 0; }',
                '.img-map img { display: block; height: auto; max-width: 100%; }',
                '*.unselectable { -moz-user-select: -moz-none; -khtml-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none;}'
            ],
            template: "\n    <div\n      class=\"img-map\"\n      #container\n      (window:resize)=\"onResize($event)\"\n    >\n      <img\n        class=\"unselectable\"\n        #image\n        [src]=\"src\"\n        (load)=\"onLoad($event)\"\n      >\n      <canvas\n        #canvas\n        (click)=\"onClick($event)\"\n        (dblclick)=\"onDblClick($event)\"\n        (mousemove)=\"onMousemove($event)\"\n        (mouseout)=\"onMouseout($event)\"\n        (mousedown)=\"onMouseDown($event)\"\n        (mouseup)=\"onMouseUp($event)\" \n      ></canvas>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ImgMapComponent);
    return ImgMapComponent;
}());

var MarkerType;
(function (MarkerType) {
    MarkerType[MarkerType["Shape"] = 0] = "Shape";
    MarkerType[MarkerType["Composite"] = 1] = "Composite";
})(MarkerType || (MarkerType = {}));
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["Circle"] = 0] = "Circle";
    ShapeType[ShapeType["Square"] = 1] = "Square";
    ShapeType[ShapeType["None"] = 2] = "None";
})(ShapeType || (ShapeType = {}));
var Marker = (function () {
    function Marker(x, y, shape) {
        this.type = MarkerType.Shape;
        this.base = ShapeType.Circle;
        this.size = 10;
        this.image = "";
        this.imageWidth = 0;
        this.imageHeight = 0;
        this.data = {};
        this.x = x;
        this.y = y;
        if (shape) {
            this.base = shape;
        }
    }
    Marker.prototype.setsize = function (size) {
        this.size = size;
    };
    /**
     * Convert a percentage position to a pixel position.
     */
    Marker.prototype.getCoordsAsPixel = function (img) {
        var image = img.nativeElement;
        return [
            (image.clientWidth / 100) * this.x,
            (image.clientHeight / 100) * this.y,
        ];
    };
    Marker.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    Marker.prototype.setAsComposite = function (image, base, width, height) {
        this.image = image;
        this.type = MarkerType.Composite;
        this.base = base;
        this.imageWidth = width;
        this.imageHeight = height;
    };
    return Marker;
}());

var Polygon = (function () {
    function Polygon(x, y) {
        this.data = {};
        this.coordinates = [];
        //Reference Kept to ease up stress on draw
        this.minX = null;
        this.minY = null;
        this.maxX = null;
        this.maxY = null;
        this.coordinates.push([x, y]);
    }
    Polygon.prototype.addPoint = function (x, y) {
        this.coordinates.push([x, y]);
    };
    Polygon.prototype.getVertices = function () {
        return this.coordinates;
    };
    Polygon.prototype.getLastVertixCoordinate = function () {
        return this.coordinates[this.coordinates.length - 1];
    };
    Polygon.prototype.isPointInPolygon = function (point) {
        var isInside = false;
        if (this.minX == null || this.minY == null) {
            var minX = (this.coordinates[0])[0];
            var maxX = (this.coordinates[0])[0];
            var minY = (this.coordinates[0])[1];
            var maxY = (this.coordinates[0])[1];
            for (var n = 1; n < this.coordinates.length; n++) {
                var q = this.coordinates[n];
                minX = Math.min(q.x, minX);
                maxX = Math.max(q.x, maxX);
                minY = Math.min(q.y, minY);
                maxY = Math.max(q.y, maxY);
            }
            this.minX = minX;
            this.minY = minY;
            this.maxX = maxX;
            this.maxY = maxY;
        }
        if (point[0] < this.minX || point[0] > this.maxX || point[1] < this.minY || point[1] > this.maxY) {
            return false;
        }
        var i = 0, j = this.coordinates.length - 1;
        while (i < this.coordinates.length) {
            if (((this.coordinates[i])[1] > point[1]) != (this.coordinates[j][1] > point[1]) &&
                point[0] < (this.coordinates[j][0] - this.coordinates[i][0]) * (point[1] - this.coordinates[i][1]) /
                    (this.coordinates[j][1] - this.coordinates[i][1]) + this.coordinates[i][0]) {
                isInside = !isInside;
            }
            j = i++;
        }
        return isInside;
    };
    Polygon.prototype.setVertices = function (vertices) {
        this.coordinates = vertices;
    };
    return Polygon;
}());



/***/ }),

/***/ "../../../../../src/app/components/util.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YesNoDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'yes-no-dialog',
            template: "\n  \n  <h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p [innerHTML]=\"data.message\"></p>\n<br/>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" cdkFocusInitial>{{data.no}}</button>\n  <button mat-button (click)=\"onYesClick()\"  >{{data.yes}}</button>\n</div>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], YesNoDialogComponent);
    return YesNoDialogComponent;
}());

var InfoDialogComponent = (function () {
    function InfoDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    InfoDialogComponent.prototype.onYesClick = function () {
        this.dialogRef.close({ agree: true });
    };
    InfoDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'info-dialog',
            template: "    \n  <h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p [innerHTML]=\"data.message\"></p>\n<br/>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onYesClick()\"  >{{data.yes}}</button>\n</div>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], InfoDialogComponent);
    return InfoDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/material-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedMaterialModule = (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["L" /* MatTooltipModule */],
            ]
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/Values.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
var title = "Beacon Framework";
var year = "2017";
var copyright = "Olakunmi Joseph";
//const BASE_URL =  "http://localhost:3000/";
//Heroku
var BASE_URL = "";
var Values = (function () {
    function Values() {
    }
    Values.prototype.getTitle = function () {
        return title;
    };
    Values.prototype.getYear = function () {
        return year;
    };
    Values.prototype.getCopyright = function () {
        return copyright;
    };
    Values.prototype.getServiceEndPoint = function () {
        return BASE_URL;
    };
    return Values;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Http, Headers} from "@angular/http";




var AuthService = (function () {
    function AuthService(http, values) {
        this.http = http;
        this.values = values;
    }
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        //this.loadToken();
        //headers = headers.append('authorization', this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'users/authenticate', user, { headers: headers })
            .map(function (res) { return res; });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.loggedInandSpecial = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.loadToken();
        headers = headers.append('Authorization', this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'users/profile', { headers: headers })
            .map(function (res) { return res; });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__models_Values__["a" /* Values */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentProvider = (function () {
    function ContentProvider(http, authService, values) {
        this.http = http;
        this.authService = authService;
        this.values = values;
    }
    ContentProvider.prototype.publishContentIntoProjectAndFloorplan = function (projectId, floorplanId, content) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'content/floorplan/' + floorplanId + '/project/' + projectId, content, { headers: headers })
            .map(function (res) { return res; });
    };
    ContentProvider.prototype.getContentsFromProject = function (projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'content/project/' + projectId, { headers: headers })
            .map(function (res) { return res; });
    };
    ContentProvider.prototype.getContentDetails = function (contentId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'content/details/' + contentId, { headers: headers })
            .map(function (res) { return res; });
    };
    ContentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__models_Values__["a" /* Values */]])
    ], ContentProvider);
    return ContentProvider;
}());



/***/ }),

/***/ "../../../../../src/app/services/floorplan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorplanProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FloorplanProvider = (function () {
    function FloorplanProvider(http, authService, values) {
        this.http = http;
        this.authService = authService;
        this.values = values;
    }
    FloorplanProvider.prototype.getFloorPlan = function (floorplanId, projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'floorplan/' + floorplanId + '/project/' + projectId, { headers: headers }).map(function (res) { return res; });
    };
    FloorplanProvider.prototype.deleteFloorplanWithId = function (id, projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.values.getServiceEndPoint() + 'floorplan/' + id + '/project/' + projectId, { headers: headers }).map(function (res) { return res; });
    };
    FloorplanProvider.prototype.saveFloorPlanName = function (id, projectId, name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'floorplan/' + id + '/project/' + projectId +
            '/name', { name: name }, { headers: headers })
            .map(function (res) { return res; });
    };
    FloorplanProvider.prototype.saveChangesOnFloorPlan = function (id, projectId, models) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'floorplan/' + id + '/project/' + projectId +
            '/beacons', models, { headers: headers })
            .map(function (res) { return res; });
    };
    FloorplanProvider.prototype.deleteBeaconFromFloorPlan = function (id, projectId, beaconId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.values.getServiceEndPoint() + 'floorplan/' + id + '/project/' + projectId +
            '/beacon/' + beaconId, { headers: headers })
            .map(function (res) { return res; });
    };
    FloorplanProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__models_Values__["a" /* Values */]])
    ], FloorplanProvider);
    return FloorplanProvider;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectProvider = (function () {
    function ProjectProvider(http, authService, values) {
        this.http = http;
        this.authService = authService;
        this.values = values;
    }
    ProjectProvider.prototype.getProjects = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects', { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.getProject = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects/' + id, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.getProjectData = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects/getprojectid/' + id, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.registerProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/register', project, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.updateproject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this.values.getServiceEndPoint() + 'projects/' + project._id, project, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.deleteProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.values.getServiceEndPoint() + 'projects/' + project._id, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.addToProject = function (thisUser, project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/' + project._id + '/adduser', thisUser, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.removeFromProjects = function (thisUser, project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/' + project._id + '/removeuser', thisUser, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.addImagesToProject = function (projectID, images) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/' + projectID + '/upload', images, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.getImagesForProject = function (projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects/' + projectId + '/images', { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.saveGCM = function (projectId, gcmKey) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this.values.getServiceEndPoint() + 'projects/' + projectId + '/gcm', { gcm: gcmKey }, { headers: headers })
            .map(function (res) { return res; });
    };
    //FRONT END
    ProjectProvider.prototype.getProjectsForUser = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects/foruser/' + userId, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__models_Values__["a" /* Values */]])
    ], ProjectProvider);
    return ProjectProvider;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Values__ = __webpack_require__("../../../../../src/app/models/Values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProvider = (function () {
    function UserProvider(http, authService, values) {
        this.http = http;
        this.authService = authService;
        this.values = values;
    }
    UserProvider.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'users', { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.getUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'users/' + id, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'users/register', user, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this.values.getServiceEndPoint() + 'users/' + user._id, user, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.deleteUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.values.getServiceEndPoint() + 'users/' + user._id, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__models_Values__["a" /* Values */]])
    ], UserProvider);
    return UserProvider;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.name.length == 0) {
            return false;
        }
        if (user.username == undefined || user.username.length == 0) {
            return false;
        }
        if (user.email == undefined || user.email.length == 0) {
            return false;
        }
        if (user.password == undefined || user.password.length == 0) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateProjectRegistration = function (project) {
        if (project.name == undefined || project.name.length == 0) {
            return false;
        }
        else if (project.email == undefined || project.email.length == 0) {
            return false;
        }
        return true;
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map