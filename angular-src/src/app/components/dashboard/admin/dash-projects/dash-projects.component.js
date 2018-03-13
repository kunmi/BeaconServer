"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var material_1 = require("@angular/material");
var dash_project_dialog_components_1 = require("./dash-project-dialog.components");
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
            _this.dataSource = new material_1.MatTableDataSource(projects);
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
        var dialogRef = this.dialog.open(dash_project_dialog_components_1.DashProjectDialogComponents, {
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
        var dialogRef = this.dialog.open(dash_project_dialog_components_1.DashProjectDialogComponents, {
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
        core_1.ViewChild(material_1.MatPaginator)
    ], DashProjectsComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort)
    ], DashProjectsComponent.prototype, "sort", void 0);
    DashProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-dash-projects',
            templateUrl: './dash-projects.component.html',
            styleUrls: ['./dash-projects.component.css']
        })
    ], DashProjectsComponent);
    return DashProjectsComponent;
}());
exports.DashProjectsComponent = DashProjectsComponent;
