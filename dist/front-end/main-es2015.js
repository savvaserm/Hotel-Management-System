(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"tb\">\n  <mat-toolbar-row>\n    <span class=\"txt2\">Registration and Login</span>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span class=\"spacer\"></span>\n    <span class=\"align-center\"></span>\n    <a href=\"/\"><button mat-button class=\"icon0\"><mat-icon>home</mat-icon></button></a>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu1\">\n      <mat-icon>info</mat-icon>\n    </button>\n    <mat-menu #menu1=\"matMenu\">\n      <button mat-button>About</button>\n      <button mat-button>Contact</button>\n    </mat-menu>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>\n        <mat-icon class=\"icon1\"> dialpad</mat-icon>\n        <span>Redial</span>\n      </button>\n      <button mat-menu-item disabled>\n        <mat-icon class=\"icon2\">voicemail</mat-icon>\n        <span>Check voicemail</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon class=\"icon3\">notifications_off</mat-icon>\n        <span>Disable alerts</span>\n      </button>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"card card-container\">\n\n\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <span class=\"txt\"><b>LOGIN</b></span>\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n    <form name=\"form-signin\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <mat-form-field class=\"full-width\">\n          <mat-label for =\"username\">Username</mat-label>\n        <input matInput placeholder=\"Enter username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <mat-form-field class=\"full-width\">\n\n        <mat-label for=\"password\">Password</mat-label>\n        <input matInput placeholder=\"Enter password\" type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\n        </mat-form-field>\n      </div>\n\n      <button mat-raised-button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n    </form>\n    <br>\n    <p class=\"text\">Are you a new user ?</p> <button mat-raised-button [routerLink]=\"['/register']\" class=\"btn btn-link\">Register here!</button>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li> <a style=\"color: black\" href=\"/list\"><span class=\"users-btn\">Users List</span></a></li>\n\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n\n      <li> <a style=\"color: black\" href=\"/\"><span class=\"logout-btn\"(click)=\"logOut()\">Log out</span></a></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <header class=\"jumbotron my-4\">\n    <h1 class=\"h1\"> User's Profile </h1>\n    <p class=\"lead\"> Welcome to your profile, <strong> {{currentUser.username}} </strong> </p>\n    <div class=\"row\">\n\n    </div>\n  </header>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n\n    <span class=\"txt1\"><b>REGISTER</b></span>\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <mat-form-field  class=\"full-width\">\n        <mat-label for=\"username\">Username</mat-label>\n        <input matInput placeholder=\"Enter username\"type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <mat-form-field class=\"full-width\">\n        <mat-label for=\"email\">Email</mat-label>\n\n        <input matInput placeholder=\"Enter your email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.email\" #username=\"ngModel\" required />\n\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\n\n          <div *ngIf=\"username.errors.required\">\n            Email is required.\n          </div>\n        </div>\n      </mat-form-field>\n          <div *ngIf=\"username.errors.pattern\">\n            A valid email address is required\n          </div>\n\n        </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <mat-form-field class=\"full-width\">\n        <mat-label for=\"password\">Password</mat-label>\n\n        <input matInput placeholder=\"Enter a password\" type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"[(ngModel)]=\"user.password\" #password=\"ngModel\" required minlength=\"4\" />\n\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\n\n          <div *ngIf=\"password.errors.required\">\n            Password is required.\n          </div>\n\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 4 characters long.\n          </div>\n\n        </div>\n        </mat-form-field>\n\n      </div>\n\n      <button mat-raised-button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Register</button>\n      &nbsp;\n      &nbsp;\n      <button mat-raised-button [routerLink]=\"['/login']\" class=\"btn btn-lg btn-danger btn-block btn-cancel\" type=\"button\">Cancel</button>\n\n    </form>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/userslist/userslist.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/userslist/userslist.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-striped\">\n    <thead>\n\n    <tr>\n      <th>ID</th>\n      <th>Username</th>\n      <th>Email</th>\n      <th>Role</th>\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor=\"let user of users\">\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tb {\r\n  background-color: black;\r\n}\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.txt2 {\r\n  text-decoration: none;\r\n  color: navajowhite;\r\n  font-size: 25px;\r\n}\r\n.mat-icon {\r\n  color: navajowhite;\r\n}\r\n.icon0:hover {\r\n  background-color: crimson;\r\n}\r\n.mat-icon-button:hover {\r\n  background-color: crimson;\r\n}\r\n.icon1, .icon2, .icon3 {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udHh0MiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBuYXZham93aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLm1hdC1pY29uIHtcclxuICBjb2xvcjogbmF2YWpvd2hpdGU7XHJcbn1cclxuXHJcbi5pY29uMDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLmljb24xLCAuaWNvbjIsIC5pY29uMyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Web Application';
    }
};
AppComponent.API_URL = 'http://localhost:8080';
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/userslist/userslist.component */ "./src/app/components/userslist/userslist.component.ts");
/* harmony import */ var _services_list_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/list-service.service */ "./src/app/services/list-service.service.ts");














// import { AuthGuardService } from './services/auth-guard.service';



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
            _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_15__["UserslistComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_14__["CustomMaterialModule"], ngx_facebook__WEBPACK_IMPORTED_MODULE_13__["FacebookModule"].forRoot(),
        ],
        exports: [
            _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"], _services_list_service_service__WEBPACK_IMPORTED_MODULE_16__["ListService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/userslist/userslist.component */ "./src/app/components/userslist/userslist.component.ts");






// import { AuthGuardService as AuthGuard} from './services/auth-guard.service';

const appRoutes = [
    // den kanei navigate me to urlpermission  sto path:profile
    { path: 'list', component: _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_6__["UserslistComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    // otherwise redirect to profile
    { path: '**', redirectTo: '/login' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(navajowhite, black);\r\n}\r\n.card-container.card {\r\n  max-width: 500px;\r\n  max-height: 500px;\r\n  padding: 40px 40px;\r\n}\r\n.txt {\r\n  font-family: Calibri, sans-serif;\r\n  font-size: 25px;\r\n}\r\n.full-width {\r\n  width: 80%;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.btn.btn-signin {\r\n\r\n  background-color: black;\r\n  color: navajowhite;\r\n  font-family: Calibri, sans-serif;\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  width: 120px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: crimson;\r\n}\r\n.btn.btn-link {\r\n  bottom: 51px;\r\n  left: 200px;\r\n  background-color: black;\r\n  color: navajowhite;\r\n  height: 36px;\r\n  font-family: Calibri, sans-serif;\r\n  font-size: 16px;\r\n}\r\n.btn.btn-link:hover {\r\n  background-color: crimson;\r\n}\r\n.text {\r\n  color: black;\r\n  font-size: 20px;\r\n  font-family: Calibri, sans-serif;\r\n}\r\n.help-block{\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0Y7O0VBRUU7QUFDRjtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscURBQXFEO0FBQ3ZEO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFpQjtNQUFqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBOztFQUVFO0FBR0Y7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUdoQyxrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUU7QUFHRjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFHWixrQkFBa0I7RUFDbEIsWUFBWTtFQUlaLHNCQUFzQjtBQUN4QjtBQUVBOzs7RUFHRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7QUFFQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogU3BlY2lmaWMgc3R5bGVzIG9mIHNpZ25pbiBjb21wb25lbnRcclxuICovXHJcbi8qXHJcbiAqIEdlbmVyYWwgc3R5bGVzXHJcbiAqL1xyXG5ib2R5LCBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQobmF2YWpvd2hpdGUsIGJsYWNrKTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgcGFkZGluZzogNDBweCA0MHB4O1xyXG59XHJcbi50eHQge1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uYnRuIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGhlaWdodDogMzZweDtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4vKlxyXG4gKiBDYXJkIGNvbXBvbmVudFxyXG4gKi9cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAvKiBqdXN0IGluIGNhc2UgdGhlcmUgbm8gY29udGVudCovXHJcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1jYXJkIHtcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEZvcm0gc3R5bGVzXHJcbiAqL1xyXG5cclxuXHJcbi5wcm9maWxlLW5hbWUtY2FyZCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG4gIG1pbi1oZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmJ0bi5idG4tc2lnbmluIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IG5hdmFqb3doaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbn1cclxuXHJcbi5idG4uYnRuLXNpZ25pbjpob3ZlcixcclxuLmJ0bi5idG4tc2lnbmluOmFjdGl2ZSxcclxuLmJ0bi5idG4tc2lnbmluOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1saW5rIHtcclxuICBib3R0b206IDUxcHg7XHJcbiAgbGVmdDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IG5hdmFqb3doaXRlO1xyXG4gIGhlaWdodDogMzZweDtcclxuICBmb250LWZhbWlseTogQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmJ0bi5idG4tbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IENhbGlicmksIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5oZWxwLWJsb2Nre1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() { }
    login() {
        this.authService.logIn(this.user)
            .subscribe(data => {
            this.router.navigate(['profile']);
            this.successMessage = 'User logged in';
        }, err => {
            this.errorMessage = 'Error: Username or password is incorrect';
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { padding: 0em; }\r\n\r\n.h1 {\r\n  text-align: center;\r\n}\r\n\r\n.lead {\r\n  text-align: center;\r\n}\r\n\r\n.a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.a:link:active {\r\n  text-decoration: none;\r\n}\r\n\r\n.logout-btn {\r\n  color: black;\r\n  font-family: Calibri, sans-serif;\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  width: 120px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n\r\n.users-btn {\r\n  color: black;\r\n  text-decoration: none;\r\n  font-family: Calibri, sans-serif;\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  width: 120px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(navajowhite, black);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksRUFBRTs7QUFFckI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUdaLGtCQUFrQjtFQUNsQixZQUFZO0VBSVosc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFHWixrQkFBa0I7RUFDbEIsWUFBWTtFQUlaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscURBQXFEO0FBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyBwYWRkaW5nOiAwZW07IH1cclxuXHJcbi5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sZWFkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5hOmxpbms6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvdXQtYnRuIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IENhbGlicmksIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxufVxyXG5cclxuXHJcbi51c2Vycy1idG4ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IENhbGlicmksIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxufVxyXG5cclxuYm9keSwgaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KG5hdmFqb3doaXRlLCBibGFjayk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
    }
    // logout from the app
    logOut() {
        this.authService.logOut()
            .subscribe(data => {
            this.router.navigate(['/login']);
        }, error => {
        });
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(navajowhite, black);\r\n}\r\n.card-container.card {\r\n  max-width: 500px;\r\n  max-height: 500px;\r\n  padding: 40px 40px;\r\n}\r\n.txt1 {\r\n  font-family: Calibri, sans-serif;\r\n  font-size: 25px;\r\n}\r\n.full-width{\r\n  width : 80%;\r\n}\r\n.btn {\r\n  width: 120px;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 30px 30px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.btn.btn-signin,.btn-cancel {\r\n  /*background-color: #4d90fe; */\r\n  background-color: black;\r\n  color: navajowhite;\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-family: Calibri, sans-serif;\r\n  font-size: 16px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n  size: 20px;\r\n}\r\n.btn.btn-cancel {\r\n  background-color: black;\r\n  color: navajowhite;\r\n  font-family: Calibri, sans-serif;\r\n  font-size: 16px;\r\n}\r\n.btn.btn-cancel:hover{\r\n  background-color: crimson;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0Y7O0VBRUU7QUFDRjtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscURBQXFEO0FBQ3ZEO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBR2hDLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFHZCxrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJFQUEyRTtFQUMzRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsWUFBWTtFQUdaLGtCQUFrQjtFQUNsQixZQUFZO0VBSVosc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7OztFQUdFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNwZWNpZmljIHN0eWxlcyBvZiBzaWduaW4gY29tcG9uZW50XHJcbiAqL1xyXG4vKlxyXG4gKiBHZW5lcmFsIHN0eWxlc1xyXG4gKi9cclxuYm9keSwgaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KG5hdmFqb3doaXRlLCBibGFjayk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcclxufVxyXG5cclxuLnR4dDEge1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uZnVsbC13aWR0aHtcclxuICB3aWR0aCA6IDgwJTtcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gIC8qIGp1c3QgaW4gY2FzZSB0aGVyZSBubyBjb250ZW50Ki9cclxuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweDtcclxuICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLyogc2hhZG93cyBhbmQgcm91bmRlZCBib3JkZXJzICovXHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLypcclxuICogRm9ybSBzdHlsZXNcclxuICovXHJcbi5wcm9maWxlLW5hbWUtY2FyZCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG4gIG1pbi1oZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmJ0bi5idG4tc2lnbmluLC5idG4tY2FuY2VsIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IG5hdmFqb3doaXRlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudChyZ2IoMTA0LCAxNDUsIDE2MiksIHJnYigxMiwgOTcsIDMzKSk7Ki9cclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJ0bi5idG4tY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogbmF2YWpvd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IENhbGlicmksIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5idG4uYnRuLWNhbmNlbDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zaWduaW46aG92ZXIsXHJcbi5idG4uYnRuLXNpZ25pbjphY3RpdmUsXHJcbi5idG4uYnRuLXNpZ25pbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() {
    }
    register() {
        this.accountService.createAccount(this.user).subscribe(data => {
            this.router.navigate(['/login']);
            alert('User created');
        }, err => {
            this.errorMessage = 'The username you have entered already exists';
        });
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/userslist/userslist.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/userslist/userslist.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { padding: 0em; }\r\n\r\n.a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.a:link:active {\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(navajowhite, black);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vyc2xpc3QvdXNlcnNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLEVBQUU7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscURBQXFEO0FBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vyc2xpc3QvdXNlcnNsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHsgcGFkZGluZzogMGVtOyB9XHJcblxyXG4uYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYTpsaW5rOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChuYXZham93aGl0ZSwgYmxhY2spO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/userslist/userslist.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/userslist/userslist.component.ts ***!
  \*************************************************************/
/*! exports provided: UserslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistComponent", function() { return UserslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserslistComponent = class UserslistComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userslist',
        template: __webpack_require__(/*! raw-loader!./userslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/userslist/userslist.component.html"),
        styles: [__webpack_require__(/*! ./userslist.component.css */ "./src/app/components/userslist/userslist.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserslistComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");








let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
        ],
    })
], CustomMaterialModule);



/***/ }),

/***/ "./src/app/model/model.user.ts":
/*!*************************************!*\
  !*** ./src/app/model/model.user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
    }
    createAccount(user) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].API_URL + '/users/register', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => console.log(resp)));
    }
};
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AccountService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    // ----------------------------------------------------------------------------------------
    //
    // public isAuthenticated(): boolean {
    //   const token = localStorage.getItem('currentUser');
    //
    //   // Check whether the token is expired and return true or false
    //   if (token == null) {
    //     return false;
    //   } else {
    //     return !this.jwtHelper.isTokenExpired(token);
    //   }
    // }
    // ----------------------------------------------------------------------------------------
    logIn(user) {
        return this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].API_URL + '/users/login', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + btoa(user.username + ':' + user.password)
            }
        })
            // tslint:disable-next-line:no-shadowed-variable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            // tslint:disable-next-line:no-shadowed-variable
            const user = response.json().principal; // the returned user object is a principal object
            console.log('test');
            if (user) {
                // store user details in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                return localStorage.getItem('currentUser');
            }
        }));
    }
    // ------------------------------------------------------------------------------------
    logOut() {
        // remove user from local storage to log user out
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].API_URL + 'logout', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            localStorage.removeItem('currentUser');
        }));
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/list-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/list-service.service.ts ***!
  \**************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListService = class ListService {
    constructor() { }
};
ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sermi\IdeaProjects\springboot-angular-login-register\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map