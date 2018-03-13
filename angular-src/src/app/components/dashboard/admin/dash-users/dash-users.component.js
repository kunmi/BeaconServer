"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var material_1 = require('@angular/material');
var register_component_1 = require("./register/register.component");
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
            _this.dataSource = new material_1.MatTableDataSource(users);
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
        var dialogRef = this.dialog.open(register_component_1.RegisterComponent, {
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
        var dialogRef = this.dialog.open(register_component_1.RegisterComponent, {
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
        core_1.ViewChild(material_1.MatPaginator)
    ], DashUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort)
    ], DashUsersComponent.prototype, "sort", void 0);
    DashUsersComponent = __decorate([
        core_1.Component({
            selector: 'app-dash-users',
            templateUrl: './dash-users.component.html',
            styleUrls: ['./dash-users.component.css']
        })
    ], DashUsersComponent);
    return DashUsersComponent;
}());
exports.DashUsersComponent = DashUsersComponent;
