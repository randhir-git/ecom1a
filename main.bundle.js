webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  \n</div>\n<h2>Here are some links to help you start: </h2>\n<a routerLink=\"home\">Home</a> |\n<a routerLink=\"contactus\">Contact</a> |\n<a routerLink=\"country\">Country</a> |\n<a routerLink=\"products\">Product</a> |\n<a routerLink=\"product2\">Product2</a> |\n<a routerLink=\"product3\">Product3</a> |\n<a routerLink=\"register\">Register</a> |\n<a routerLink=\"signin\">login</a> | \n<button (click)=\"logout()\">Logout</button> {{username}}\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(dbservice, router) {
        this.dbservice = dbservice;
        this.router = router;
        this.title = 'app';
        this.username = localStorage.getItem('username');
    }
    AppComponent.prototype.logout = function () {
        this.dbservice.signout();
        this.router.navigateByUrl("register");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* userService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_country_service__ = __webpack_require__("../../../../../src/app/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guard_auth_guards__ = __webpack_require__("../../../../../src/app/guard/auth.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["b" /* routingComponents */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* productService */], __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* userService */], __WEBPACK_IMPORTED_MODULE_11__guard_auth_guards__["a" /* CanActivateAuthGuard */], __WEBPACK_IMPORTED_MODULE_6__services_country_service__["a" /* countryService */], __WEBPACK_IMPORTED_MODULE_12__services_log_service__["b" /* logService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_regstration_user_regstration_component__ = __webpack_require__("../../../../../src/app/user-regstration/user-regstration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guard_auth_guards__ = __webpack_require__("../../../../../src/app/guard/auth.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__country_country_component__ = __webpack_require__("../../../../../src/app/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__states_states_component__ = __webpack_require__("../../../../../src/app/states/states.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product2_product2_component__ = __webpack_require__("../../../../../src/app/product2/product2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product3_product3_component__ = __webpack_require__("../../../../../src/app/product3/product3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var APP_ROUTES = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_3__contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guard_auth_guards__["a" /* CanActivateAuthGuard */]] },
    { path: 'product2', component: __WEBPACK_IMPORTED_MODULE_10__product2_product2_component__["a" /* Product2Component */] },
    { path: 'product3', component: __WEBPACK_IMPORTED_MODULE_11__product3_product3_component__["a" /* Product3Component */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__user_regstration_user_regstration_component__["a" /* UserRegstrationComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'country', component: __WEBPACK_IMPORTED_MODULE_8__country_country_component__["a" /* CountryComponent */] },
    { path: 'states/:id', component: __WEBPACK_IMPORTED_MODULE_9__states_states_component__["a" /* StatesComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__contactus_contactus_component__["a" /* ContactusComponent */], __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_5__user_regstration_user_regstration_component__["a" /* UserRegstrationComponent */],
    __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__country_country_component__["a" /* CountryComponent */], __WEBPACK_IMPORTED_MODULE_9__states_states_component__["a" /* StatesComponent */], __WEBPACK_IMPORTED_MODULE_10__product2_product2_component__["a" /* Product2Component */], __WEBPACK_IMPORTED_MODULE_11__product3_product3_component__["a" /* Product3Component */]
];


/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contactus works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
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

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactus',
            template: __webpack_require__("../../../../../src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/country/country.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nCountry\n</p>\n<form [formGroup]=\"dbForm\" (ngSubmit)=\"save()\">\n  <div><label for=\"name\">Name</label>\n  <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\">\n  <!-- <div *ngIf=\"dbForm.controls['name'].hasError('required')\" \n  class=\"alert alert-danger\">name is required.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('minlength')\" \n  class=\"alert alert-danger\">min 5 characters.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('maxlength')\" \n  class=\"alert alert-danger\">max 15 characters.</div> -->\n  \n  </div>\n  <button type=\"submit\" [disabled]=\"!dbForm.valid\">Save</button>\n  <a (click)=\"cancel()\">cancel</a>\n</form>\n<table>\n    <tr>\n        <td>Name</td>\n        <td>Action</td>\n    </tr>\n  <tr *ngFor=\"let obj of objArray\">\n    <td>{{obj.name}}</td>\n    <td><a (click)=\"edit(obj)\">edit</a> |\n    <a (click)=\"delete(obj._id)\">delete</a> |\n    <a routerLink=\"/states/{{obj._id}}\">States</a></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_country__ = __webpack_require__("../../../../../src/app/models/country.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_country_service__ = __webpack_require__("../../../../../src/app/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryComponent = /** @class */ (function () {
    function CountryComponent(dataservice, builder) {
        this.dataservice = dataservice;
        this.builder = builder;
        this.objArray = [];
        this.loading = false;
        this.dbForm = this.builder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            _id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null)
        });
        this.dbobj = new __WEBPACK_IMPORTED_MODULE_1__models_country__["a" /* country */]();
    }
    CountryComponent.prototype.ngOnInit = function () {
        this.getdata();
    };
    CountryComponent.prototype.getdata = function () {
        var _this = this;
        this.dataservice.get().subscribe(function (data) {
            _this.objArray = data;
            console.log(data);
            _this.dbForm.reset();
        });
    };
    CountryComponent.prototype.save = function () {
        var _this = this;
        console.log(this.dbForm.value);
        if (this.dbForm.value._id == null) {
            this.dbobj = this.dbForm.value;
            this.dataservice.save(this.dbForm.value).subscribe(function (data) {
                console.log(data);
                _this.getdata();
            });
        }
        else {
            this.dataservice.update(this.dbForm.value).subscribe(function (data) {
                console.log(data);
                _this.getdata();
            });
        }
    };
    CountryComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm('Are You Sure To Delete! Record Permanently')) {
            this.dataservice.delete(id).subscribe(function (data) {
                console.log(data);
                _this.getdata();
            });
        }
    };
    CountryComponent.prototype.edit = function (obj) {
        this.dbForm.patchValue(obj);
    };
    CountryComponent.prototype.cancel = function () {
        this.dbForm.reset();
    };
    CountryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country',
            template: __webpack_require__("../../../../../src/app/country/country.component.html"),
            styles: [__webpack_require__("../../../../../src/app/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_country_service__["a" /* countryService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guard/auth.guards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(router) {
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigateByUrl("/signin");
        }
        return false;
    };
    CanActivateAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(logservice) {
        this.logservice = logservice;
        this.logActivity = new __WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogActivity */]();
        this.logActivity.activityname = "Home";
        //this.logActivity.adminread=false;
        this.logActivity.comment = "view Home page";
        //this.logActivity.userread=false;
        //this.logActivity.user_id="11";
        this.logActivity.ipaddress = "22.33.44.55";
        this.logservice.save(this.logActivity).subscribe(function (data) { return console.log(data); });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_log_service__["b" /* logService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Login\n</p>\n<form [formGroup]=\"dbForm\" (ngSubmit)=\"save(dbForm.value,dbForm.valid)\">\n  <!--  -->\n  <div><label for=\"username\">username</label>\n    <input type=\"text\" formControlName=\"username\">\n    <!-- <small [hidden]=\"dbForm.controls.username.valid || dbForm.controls.username.pristine&& !submited\">username Required</small> -->\n    <small [hidden]=\"!dbForm.controls['username'].hasError('minlength')\">min length 3</small>\n    <small [hidden]=\"!dbForm.controls['username'].hasError('required')\">required</small>\n</div>\n     <div><label for=\"password\">password</label>\n      <input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\">\n      <!-- <small [hidden]=\"dbForm.controls.password.valid || dbForm.controls.password.pristine&& !submited\">password Required</small> -->\n      <small [hidden]=\"!dbForm.controls['password'].hasError('minlength')\">min lenght 5</small>\n      <small [hidden]=\"!dbForm.controls['password'].hasError('required')\">required</small>\n      </div>\n     \n  <button type=\"submit\" [disabled]=\"!dbForm.valid\">Save</button>\n</form>\n<br><br>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(builder, dataservice, toaster, routes) {
        this.builder = builder;
        this.dataservice = dataservice;
        this.toaster = toaster;
        this.routes = routes;
        this._users = [];
        this.loading = false;
        this.dbForm = this.builder.group({
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(3)]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(5)]),
        });
        this._user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* user */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.getdata();
    };
    LoginComponent.prototype.getdata = function () {
        var _this = this;
        this.dataservice.get().subscribe(function (data) {
            _this._users = data;
            console.log(data);
        });
    };
    LoginComponent.prototype.save = function (__user, isValid) {
        var _this = this;
        this.submitted = isValid;
        console.log(__user);
        if (isValid) {
            console.log(this.dbForm.value);
            this.dataservice.signin(__user).subscribe(function (data) {
                console.log(data);
                if (data.success == true) {
                    _this.toaster.success('sucessfully!', 'Operation success1');
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', data.username);
                    console.log(data.token);
                    _this.routes.navigateByUrl("/products");
                }
                else {
                    _this.toaster.error(data.message, 'Operation failed');
                }
            }, function (err) {
                _this.toaster.error(err.message, 'Operation failed');
            });
            //this.getdata(),
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LoginComponent.prototype, "fileInput", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* userService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/country.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return country; });
/* unused harmony export state */
var country = /** @class */ (function () {
    function country() {
    }
    return country;
}());

var state = /** @class */ (function () {
    function state() {
    }
    return state;
}());



/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return product; });
var product = /** @class */ (function () {
    function product() {
    }
    return product;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n<form [formGroup]=\"dbForm\" (ngSubmit)=\"save()\">\n  <div><label for=\"name\">Name</label>\n  <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\">\n  <!-- <div *ngIf=\"dbForm.controls['name'].hasError('required')\" \n  class=\"alert alert-danger\">name is required.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('minlength')\" \n  class=\"alert alert-danger\">min 5 characters.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('maxlength')\" \n  class=\"alert alert-danger\">max 15 characters.</div> -->\n  \n  </div>\n\n  <!--  -->\n  <div><label for=\"st_date\">date</label>\n    <input type=\"date\" name=\"st_date\" id=\"st_date\" formControlName=\"st_date\">\n    <!-- <div *ngIf=\"dbForm.controls['st_date'].hasError('required')\" \n  class=\"alert alert-danger\">date is required.</div> -->\n</div>\n     <div><label for=\"description\">Description</label>\n      <input type=\"text\" name=\"description\" id=\"description\" formControlName=\"description\">\n      <!-- <div *ngIf=\"dbForm.controls['description'].hasError('required')\" \n    class=\"alert alert-danger\">age is required.</div> -->\n      <!-- <div *ngIf=\"StudentForm.controls['age2'].hasError('number')\" \n    class=\"alert alert-danger\">age2 should be 111 only.</div> -->\n      </div>\n\n    <div><label for=\"price\">price</label>\n      <input type=\"text\" name=\"price\" id=\"price\" formControlName=\"price\">\n      </div>\n      <div><label for=\"avatar\">Image</label>\n      <input type=\"file\" id=\"avatar\" name=\"avatar\" (change)=\"fileChange($event)\" #fileInput >\n      <img height=\"100\"  width=\"100\" formControlName=\"avatar\" src=\"http://localhost:3001/{{avatar}}\">\n      <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n        </div>\n      \n  <button type=\"submit\" [disabled]=\"!dbForm.valid\">Save</button>\n</form>\n<table>\n    <tr>\n        <td>Name</td>\n        <td>Date</td>\n        <td>Description</td>\n        <td>Price</td>\n        <td>pic</td>\n        <td>Action</td>\n      </tr>\n  <tr *ngFor=\"let obj of products\">\n    <td>{{obj.name}}</td>\n    <td>{{obj.st_date|date:'dd-MMM-yyy'}}</td>\n    <td>{{obj.description}}</td>\n    <td>{{obj.price}}</td>\n    <td><img height=\"100\"  width=\"100\" src=\"http://localhost:3001/{{obj.avatar}}\"></td>\n    <td><a (click)=\"edit(obj)\">{{obj._id}}edit</a>\n    <a (click)=\"delete(obj)\">delete</a></td>\n  </tr>\n</table>\n<img src=\"data:image/jpeg;base64,/9j/4TIfRXhpZgAASUkqAAgAAAASACWIBAABAAAASgMAABABAgAgAAAA5gAAACICBAABAAAAAAAAACACBAABAAAAAAAAACMCBAABAAAAAAAAAA4BAgAgAAAABgEAABIBAwABAAAAAQAAACECBAABAAAAAAAAACQCBAABAAAAAQAAADIBAgAUAAAAJgEAABMCAwABAAAAAgAAACgBAwABAAAAAgAAACUCAgAgAAAAOgEAABsBBQABAAAAWgEAADEBAgAgAAAAYgEAAGmHBAABAAAAqgEAABoBBQABAAAAggEAAA8BAgAgAAAAigEAAHADAABMZW5vdm8gQTcwMDAtYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAxNTowNzoyNCAwODo0Nzo0OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAABAAAATGVub3ZvIENhbWVyYQAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAQAAAExlbm92bwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQABoAMAAQAAAAEAAAAEkAIAFAAAANwCAACdggUAAQAAAPACAAAiiAMAAQAAAAAAAAAKkgUAAQAAAPgCAAADpAMAAQAAAAAAAAACoAQAAQAAAFAHAACQkgIAAwAAADY1AAAIkgMAAQAAAP8AAAAHkgMAAQAAAAIAAAACpAMAAQAAAAAAAAADkAIAFAAAAAADAACSkgIAAwAAADY1AAABkQcABAAAAAECAwADoAQAAQAAAAANAAAJkgMAAQAAAAAAAAAAkAcABAAAADAyMjAFoAQAAQAAACwDAAAEkgoAAQAAABQDAAAGpAMAAQAAAAAAAAAniAMAAQAAAJkAAAAAoAcABAAAADAxMDCRkgIAAwAAADY1AAAEpAUAAQAAABwDAACaggUAAQAAACQDAAAAAAAAMjAxNTowNzoyNCAwODo0Nzo0OQAWAAAACgAAAF4BAABkAAAAMjAxNTowNzoyNCAwODo0Nzo0OQAAAAAACgAAAGQAAABkAAAANHUAAEBCDwACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAAACABEABQABAAAAaAMAABAAAgACAAAATQAAAAAAAADzAAAAAQAAAAgAEwIDAAEAAAACAAAAKAEDAAEAAAACAAAAGwEFAAEAAADWAwAAEgEDAAEAAAABAAAAAgIEAAEAAAAxLgAAAQIEAAEAAADmAwAAAwEDAAEAAAAGAAAAGgEFAAEAAADeAwAAAAAAAEgAAAABAAAASAAAAAEAAAD/2P/gABBKRklGAAEBAAABAAEAAP/bAEMAAQEBAQEBAQEBAQEBAQICAwICAgICBAMDAgMFBAUFBQQEBAUGBwYFBQcGBAQGCQYHCAgICAgFBgkKCQgKBwgICP/bAEMBAQEBAgICBAICBAgFBAUICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAKAAgAMBIQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP5uPhh8ZPDnw+0W98K3epPcazp4Mk1qZ2nmmRmyGhztEibtxHXBJXuK5Bvj/wCCE1S3TWNTj1BLq4S90Wfyt9u06xlR5rHG2Q5cBCABnqSuK/mbG8D4ipiqlSPV6fef2bg87w+Hwqg3tp+hev8A9six0ryn0zT9Ls3llNpdXklkuba4IwDLFlgRwuH5U8Z4OarXP7c8rfZ0fRbVLu3nWC/eSNELSEDZJtjIHlsckMDld3I4rry7gLEUmqilZ/5HmZlxDg6qlSmr3X+f+TOf1D9vXUrydJYPCWmW8lrdiWC0muAdlzEG+R5QMlHVjggegOK8K+K37Tt/8U7qLxfNo2j2V6lkls0IZwFVGY4YEkg/Mw64zjjrX6fgcHUStN3eh+O5hluH1dN2sm/u0MWTVbfVrRdRsy5tZtPBTzF2nG3HI7dK+RNUy2savwp/0h/5mvfytWk4/wBbnwOLd1cqRjggxK341egjVmCm2dskAAD39q9STMaUdD6B+AWmpefHP4WadHBPEreJtLXy3UkjFyhPB+hr9If26PipN46+M2pfDbRleTSvC9uYrj96wjmuz+9nYpkKXjBWNepJ3Dvivz3iXDKrmFC+0VJ/kj7bJq/s8DVtvJxX5nxL4I8I+JfH2vajYeH7DWNWurW2kumjtomcxxqdzO+OEUDkk8Z4rc8REaF8PfGWmWE9hqFve3enot2qkyOVd3ZA+cbBsUkAcnvxXZTmvaqHmvzOSjBqDfqfNHjFY4vAOiSiVjJfa5fTqvby4kWIEfU5rydMDnke5719xQXuHx2L1qP+urPoE6dBcPHqM2tamNWtkYJu2o5BHzbhzvBPOQcZq/YeHvD93axrqSXt9FIwuShnKBJDySu3BHJJ/E18vgsS6knpsfd5jms1Bpv4v8rHeWOl+BsyPdeFbTUS4xJ9qnlcS9QCy7gCR2OOOPSuu01PAkDKU8A+FHcLtJktxIzDJ6l8k/j0reUmlY8WWZ1Jtu/9a/5s9FsvGPhvTV02SHwZ4ZtnhvbWQNDYQqcLIMDO3OK8e/bC17T/ABb8QPBuoabbRQJJZMkuIwpkJuR8zYAyfm6nnrWmDV6l2c2KxknB69zFuYy5vNwUqImTr0A6V8famEOsauN4BFxJ3/2jW+XTXM7s48TTfKJDAXBYN+taUNjM33Wkx/skcV6UqiIw9B9D2z4PaprGh/Ejwx4hs7i5fWbW6a5tZVQtJ9oWF/KKgclvM2Y98V7v8N/hb8S/jLpnxH8XeHZLjxJfaNH9qv47hpZbi9mfeTsfBBlypJLNn86+SzqtSpTdefRfm/8AgI+ly+jUqQVGPV/ke4/AH9n79ojxBoHxUudBtda8AeHTa+TqseomS0GurHukFrEgG6Ujack4QFgCeSK8K+LHjq48Q/D/AMKacnkLYW+qOqhY0RmaK3CknaBkHzl5PcV5eBr0auLapu7XLf8AGx2+wq06Kc9nex8m+N5/+JH8ObMBkxp012wP96Wdjn6YUVwAHXBAwK/SKKtHU/P67bm7HsbXrmBklAuIwDjcASPzrqNGcy6bp8h+X90Bj0xkf0r5TAU7c1j6HHSukdBA8gJ+9XRWIc5wxPr9K75I8+mjZuLeVrFiCf8AWRfh+8WuG+OWZPF3w/LhVeSNeB0/4+oxx+VbYRLnMqyaietXNrp/2qWT7HaiRnKyZTOV6f4V82aZrbNfa/c/Z/CGoQW0zmWC80wPhDIU64HGSB17ivnMO5Pm5WfTRhBNKR9XfBfwP4H8ceMLnwx4y+C3gOaySFpDeWiywSBs/KSqycA4Ix1r6p/4Y7/Zp12+tbaHwxrWj+ZDJPJJYazMgjAYKu2Nw4OWLdxgDvXxWacT4nD1uVTbVr/mfZ4PIqM6bvGzPR/h1+wl8JfAHjvwr8R/D3jXxvdy6Xci7j0+7S3kiuG2sAGkCqwwTnOD0r7/APDdlpTW0trY2NlpkCygyRW8KRqxAADEKAM4wK+O4l4lq41rokv1PdyfKaeHu922dncXENqbdJ2V7cEIEY4DjB+QfXkfjX88H7bfhrRPhlqnwt8D6dYWumXdp4fvtT1OGEkxi9ubyVyAf4tqxxR7uhCDFehwDiJfX4xv8W/yUjj4oox+rOX8v6tHwP8AESaP+39NsQzslnpljbDHYCIEj82NcXLJA0bLE0gbPdcV/R8U2fhE2rs9SdiIXDY56Z7V2XhicHS7ZT1AIP5mvncP1PcxG39eZ1sLp/CCcV1OlryOQc85rZvQ5oI62WL/AIllxk4wUPT0cf4V5b8aSZPGvwtHZlUf+Tif4VWEleb/AK7kYhWpnqUs2ZpiW3Hf0/E183+CLZLm6+JMT+Xse4tYiXxgA34JPPbCc+1ePlunP6HtYx3cLdz9CfhHqtja+LtbmgmiuI7OyihmMIAKHzHbaQB1AbPc4I5r7U8O28MepzXCHZIIYbdWK/MUBZioPpls496/F+IIONVp9j9byp88LntOmzuqDdK4weijBHPSvVdAu0hkduhJUkgenrXxcqmh7tKkncseItbtkgvLhmiiSAcO7AIZCcAZ7dhn3r+fH/goB4lfxR+0F4ndxLElppun6cImOfKbBdgPbMufxr9B8M6PtMdzv7Kf+R8pxjPkwrj3/Q+AvENyLzxBq1wGZk80qpPooC/0rFYcdq/o+B+C1fiZ6cNX0qedrbdcxnJHMfUjPHWum8O3cYsj5LFk8xhz65/+vXg06Djue1Uqpqx2VldF85wBn/Gu0025AKc/L0rOUrEwWljubqQ/2NeMCeIwfXoc/wBK8q+N/wC68Z/CjaQT5O8H/\">"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(builder, dataservice) {
        this.builder = builder;
        this.dataservice = dataservice;
        this.products = [];
        this.loading = false;
        this._file = new File([""], "");
        this.dbForm = this.builder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            st_date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            price: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            avatar: null
        });
        this.product = new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* product */]();
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getdata();
    };
    ProductComponent.prototype.getdata = function () {
        var _this = this;
        this.dataservice.get().subscribe(function (data) {
            _this.products = data;
            console.log(data);
            _this.dbForm.reset();
            _this.clearFile();
        });
    };
    ProductComponent.prototype.save = function () {
        var _this = this;
        console.log(this.dbForm.value);
        var formData = new FormData();
        formData.append("uploads[]", this._file, this._file.name);
        formData.append("name", this.dbForm.value.name);
        formData.append("st_date", this.dbForm.value.st_date);
        formData.append("description", this.dbForm.value.description);
        formData.append("price", this.dbForm.value.price);
        this.dataservice.save(formData).subscribe(function (data) { return _this.getdata(); });
    };
    ProductComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        this._file = event.target.files[0];
    };
    ProductComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                console.log(reader.result);
                _this.dbForm.get('avatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    };
    ProductComponent.prototype.clearFile = function () {
        this.dbForm.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    ProductComponent.prototype.delete = function (obj) {
        var _this = this;
        if (confirm('Are you sure to delete?')) {
            this.dataservice.delete(obj).subscribe(function (data) { return _this.getdata(); });
        }
    };
    ProductComponent.prototype.edit = function (obj) {
        this.dbForm.patchValue(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProductComponent.prototype, "fileInput", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* productService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product2/product2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product2/product2.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n<form [formGroup]=\"dbForm\" (ngSubmit)=\"save()\">\n  <div><label for=\"name\">Name</label>\n  <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\">\n  <!-- <div *ngIf=\"dbForm.controls['name'].hasError('required')\" \n  class=\"alert alert-danger\">name is required.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('minlength')\" \n  class=\"alert alert-danger\">min 5 characters.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('maxlength')\" \n  class=\"alert alert-danger\">max 15 characters.</div> -->\n  \n  </div>\n\n  <!--  -->\n  <div><label for=\"st_date\">date</label>\n    <input type=\"date\" name=\"st_date\" id=\"st_date\" formControlName=\"st_date\">\n    <!-- <div *ngIf=\"dbForm.controls['st_date'].hasError('required')\" \n  class=\"alert alert-danger\">date is required.</div> -->\n</div>\n     <div><label for=\"description\">Description</label>\n      <input type=\"text\" name=\"description\" id=\"description\" formControlName=\"description\">\n      <!-- <div *ngIf=\"dbForm.controls['description'].hasError('required')\" \n    class=\"alert alert-danger\">age is required.</div> -->\n      <!-- <div *ngIf=\"StudentForm.controls['age2'].hasError('number')\" \n    class=\"alert alert-danger\">age2 should be 111 only.</div> -->\n      </div>\n\n    <div><label for=\"price\">price</label>\n      <input type=\"text\" name=\"price\" id=\"price\" formControlName=\"price\">\n      </div>\n      <div><label for=\"avatar\">Image</label>\n      <input type=\"file\" id=\"avatar\" name=\"avatar\" (change)=\"fileChange($event)\" #fileInput >\n      <img height=\"100\"  width=\"100\" formControlName=\"avatar\" src=\"http://localhost:3001/{{avatar}}\">\n      <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n        </div>\n      \n  <button type=\"submit\" [disabled]=\"!dbForm.valid\">Save</button>\n</form>\n<table>\n    <tr>\n        <td>Name</td>\n        <td>Date</td>\n        <td>Description</td>\n        <td>Price</td>\n        <td>pic</td>\n        <td>Action</td>\n      </tr>\n  <tr *ngFor=\"let obj of products\">\n    <td>{{obj.name}}</td>\n    <td>{{obj.st_date|date:'dd-MMM-yyy'}}</td>\n    <td>{{obj.description}}</td>\n    <td>{{obj.price}}</td>\n    <td><img height=\"100\"  width=\"100\" src=\"http://localhost:3001/{{obj.avatar}}\"></td>\n    <td><a (click)=\"edit(obj)\">{{obj._id}}edit</a>\n    <a (click)=\"delete(obj)\">delete</a></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/product2/product2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Product2Component = /** @class */ (function () {
    function Product2Component(builder, dataservice, toaster) {
        this.builder = builder;
        this.dataservice = dataservice;
        this.toaster = toaster;
        this.products = [];
        this.loading = false;
        this._file = new File([""], "");
        this.dbForm = this.builder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            st_date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            price: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            avatar: null
        });
        this.product = new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* product */]();
    }
    Product2Component.prototype.ngOnInit = function () {
        this.getdata();
    };
    Product2Component.prototype.getdata = function () {
        var _this = this;
        this.dataservice.get().subscribe(function (data) {
            _this.products = data;
            console.log(data);
            _this.dbForm.reset();
            _this.clearFile();
        });
    };
    Product2Component.prototype.save = function () {
        var _this = this;
        console.log(this.dbForm.value);
        var formData = new FormData();
        formData.append("uploads[]", this._file, this._file.name);
        formData.append("name", this.dbForm.value.name);
        formData.append("st_date", this.dbForm.value.st_date);
        formData.append("description", this.dbForm.value.description);
        formData.append("price", this.dbForm.value.price);
        // var token = localStorage.getItem("token");
        // console.log(token);
        // formData.append('token',"Bearer " + token);
        this.dataservice.saveProduct2(formData).subscribe(function (data) { return _this.getdata(); }, function (error) {
            if (error.status == 401) {
                _this.toaster.error(error.statusText, 'Operation failed');
            }
            // console.log('Error');
            // console.log(error.status);
            // console.log(error);
        });
    };
    Product2Component.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        this._file = event.target.files[0];
    };
    Product2Component.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                console.log(reader.result);
                _this.dbForm.get('avatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    };
    Product2Component.prototype.clearFile = function () {
        this.dbForm.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    Product2Component.prototype.delete = function (obj) {
        var _this = this;
        if (confirm('Are you sure to delete?')) {
            this.dataservice.delete(obj).subscribe(function (data) { return _this.getdata(); });
        }
    };
    Product2Component.prototype.edit = function (obj) {
        this.dbForm.patchValue(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Product2Component.prototype, "fileInput", void 0);
    Product2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product2',
            template: __webpack_require__("../../../../../src/app/product2/product2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product2/product2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* productService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], Product2Component);
    return Product2Component;
}());



/***/ }),

/***/ "../../../../../src/app/product3/product3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product3/product3.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"dbForm\" (ngSubmit)=\"save()\">\n  <div><label for=\"name\">Name</label>\n  <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\">\n  <!-- <div *ngIf=\"dbForm.controls['name'].hasError('required')\" \n  class=\"alert alert-danger\">name is required.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('minlength')\" \n  class=\"alert alert-danger\">min 5 characters.</div>\n  <div *ngIf=\"dbForm.controls['name'].hasError('maxlength')\" \n  class=\"alert alert-danger\">max 15 characters.</div> -->\n  \n  </div>\n\n  <!--  -->\n  <div><label for=\"st_date\">date</label>\n    <input type=\"date\" name=\"st_date\" id=\"st_date\" formControlName=\"st_date\">\n    <!-- <div *ngIf=\"dbForm.controls['st_date'].hasError('required')\" \n  class=\"alert alert-danger\">date is required.</div> -->\n</div>\n     <div><label for=\"description\">Description</label>\n      <input type=\"text\" name=\"description\" id=\"description\" formControlName=\"description\">\n      <!-- <div *ngIf=\"dbForm.controls['description'].hasError('required')\" \n    class=\"alert alert-danger\">age is required.</div> -->\n      <!-- <div *ngIf=\"StudentForm.controls['age2'].hasError('number')\" \n    class=\"alert alert-danger\">age2 should be 111 only.</div> -->\n      </div>\n\n    <div><label for=\"price\">price</label>\n      <input type=\"text\" name=\"price\" id=\"price\" formControlName=\"price\">\n      </div>\n      <div><label for=\"avatar\">Image</label>\n      <input type=\"file\" id=\"avatar\" name=\"avatar\" (change)=\"fileChange($event)\" #fileInput >\n      <img height=\"100\"  width=\"100\" formControlName=\"avatar\" src=\"http://localhost:3001/{{avatar}}\">\n      <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n        </div>\n      \n  <button type=\"submit\" [disabled]=\"!dbForm.valid\">Save</button>\n</form>\n<table>\n    <tr>\n        <td>Name</td>\n        <td>Date</td>\n        <td>Description</td>\n        <td>Price</td>\n        <td>pic</td>\n        <td>Action</td>\n      </tr>\n  <tr *ngFor=\"let obj of products\">\n    <td>{{obj.name}}</td>\n    <td>{{obj.st_date|date:'dd-MMM-yyy'}}</td>\n    <td>{{obj.description}}</td>\n    <td>{{obj.price}}</td>\n    <td><img height=\"100\"  width=\"100\" src=\"http://localhost:3001/{{obj.avatar}}\"></td>\n    <td><a (click)=\"edit(obj)\">{{obj._id}}edit</a>\n    <a (click)=\"delete(obj)\">delete</a></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/product3/product3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Product3Component = /** @class */ (function () {
    function Product3Component(builder, dataservice, toaster) {
        this.builder = builder;
        this.dataservice = dataservice;
        this.toaster = toaster;
        this.products = [];
        this.loading = false;
        this._file = new File([""], "");
        this.dbForm = this.builder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            st_date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            price: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null),
            avatar: null
        });
        this.product = new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* product */]();
    }
    Product3Component.prototype.ngOnInit = function () {
        this.getdata();
    };
    Product3Component.prototype.getdata = function () {
        var _this = this;
        this.dataservice.get().subscribe(function (data) {
            _this.products = data;
            console.log(data);
            _this.dbForm.reset();
            _this.clearFile();
        });
    };
    Product3Component.prototype.save = function () {
        var _this = this;
        console.log(this.dbForm.value);
        var formData = new FormData();
        //formData.append("uploads[]", this._file, this._file.name);
        formData.append("uploads[]", this._file, this._file.name);
        formData.append("name", this.dbForm.value.name);
        formData.append("st_date", this.dbForm.value.st_date);
        formData.append("description", this.dbForm.value.description);
        formData.append("price", this.dbForm.value.price);
        // var token = localStorage.getItem("token");
        // console.log(token);
        // formData.append('token',"Bearer " + token);
        this.dataservice.saveProduct3(formData).subscribe(function (data) { return _this.getdata(); }, function (error) {
            if (error.status == 401) {
                _this.toaster.error(error.statusText, 'Operation failed');
            }
            // console.log('Error');
            // console.log(error.status);
            // console.log(error);
        });
    };
    Product3Component.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        this._file = event.target.files[0];
    };
    Product3Component.prototype.clearFile = function () {
        this.dbForm.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    Product3Component.prototype.delete = function (obj) {
        var _this = this;
        if (confirm('Are you sure to delete?')) {
            this.dataservice.delete(obj).subscribe(function (data) { return _this.getdata(); });
        }
    };
    Product3Component.prototype.edit = function (obj) {
        this.dbForm.patchValue(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Product3Component.prototype, "fileInput", void 0);
    Product3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product3',
            template: __webpack_require__("../../../../../src/app/product3/product3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product3/product3.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* productService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], Product3Component);
    return Product3Component;
}());



/***/ }),

/***/ "../../../../../src/app/services/common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = {
    //Url:"http://localhost:3001/"
    Url: "https://ecomback.herokuapp.com/"
};


/***/ }),

/***/ "../../../../../src/app/services/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common__ = __webpack_require__("../../../../../src/app/services/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var countryService = /** @class */ (function () {
    function countryService(http) {
        this.http = http;
        this.dataUrl = __WEBPACK_IMPORTED_MODULE_2__services_common__["a" /* data */].Url + 'country'; // 'http://localhost:3001/country';  // URL to web api
    }
    countryService.prototype.get = function () {
        return this.http.get(this.dataUrl + '/list')
            .map(function (res) { return res.json(); });
        // .map(this.extractData)
        // .catch(this.handleError);
    };
    countryService.prototype.save = function (obj) {
        console.log('SaveData - 2');
        var bodyString = JSON.stringify(obj); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //this.http.post('http://localhost:8001/expensetype/Add', {'data':obj}, options).toPromise();
        return this.http.post(this.dataUrl + '/Add', { 'data': obj }, options)
            .map(function (res) { return res.json(); });
        //  .then(this.extractData)
        // .catch(this.handleErrorPromise);;
        //return true;
    };
    countryService.prototype.update = function (obj) {
        var bodyString = JSON.stringify(obj); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.dataUrl + '/update', { 'data': obj }, options)
            .map(function (res) { return res.json(); });
        //.then(this.extractData)
        //.catch(this.handleErrorPromise);
    };
    countryService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.dataUrl + '/deleteCountry/' + id, options)
            .map(function (res) { return res.json(); });
    };
    countryService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || [];
    };
    countryService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.message || error);
    };
    countryService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    countryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], countryService);
    return countryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_common__ = __webpack_require__("../../../../../src/app/services/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LogActivity = /** @class */ (function () {
    function LogActivity() {
    }
    return LogActivity;
}());







var logService = /** @class */ (function () {
    function logService(http) {
        this.http = http;
        this.dataUrl = __WEBPACK_IMPORTED_MODULE_0__services_common__["a" /* data */].Url + 'log'; //'http://localhost:3001/log';  // URL to web api
    }
    logService.prototype.get = function () {
        return this.http.get(this.dataUrl + '/list')
            .map(function (res) { return res.json(); });
    };
    logService.prototype.save = function (obj) {
        console.log('SaveData - 2');
        var bodyString = JSON.stringify(obj); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.dataUrl + '/save', obj, options)
            .map(function (res) { return res.json(); });
    };
    logService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], logService);
    return logService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common__ = __webpack_require__("../../../../../src/app/services/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var productService = /** @class */ (function () {
    function productService(http) {
        this.http = http;
        this.dataUrl = __WEBPACK_IMPORTED_MODULE_2__services_common__["a" /* data */].Url + 'product'; //'http://localhost:3001/product';  // URL to web api
    }
    productService.prototype.get = function () {
        return this.http.get(this.dataUrl + '/list')
            .map(function (res) { return res.json(); });
        // .map(this.extractData)
        // .catch(this.handleError);
    };
    productService.prototype.save = function (obj) {
        console.log('SaveData - 2');
        var bodyString = JSON.stringify(obj); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //this.http.post('http://localhost:8001/expensetype/Add', {'data':obj}, options).toPromise();
        return this.http.post(this.dataUrl + '/Add', obj)
            .map(function (res) { return res.json(); });
        //  .then(this.extractData)
        // .catch(this.handleErrorPromise);;
        //return true;
    };
    productService.prototype.update = function (obj) {
        var bodyString = JSON.stringify(obj); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.dataUrl + '/update', { 'data': obj }, options)
            .map(function (res) { return res.json(); });
        //.then(this.extractData)
        //.catch(this.handleErrorPromise);
    };
    productService.prototype.delete = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.dataUrl + '/Delete/' + obj._id, options)
            .map(function (res) { return res.json(); });
    };
    productService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || [];
    };
    productService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.message || error);
    };
    productService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    productService.prototype.saveProduct2 = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = localStorage.getItem("token");
        headers.append("Authorization", "Bearer " + token);
        return this.http.post(this.dataUrl + '/Addproduct2', obj, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err; });
    };
    productService.prototype.saveProduct3 = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = localStorage.getItem("token");
        headers.append("Authorization", "Bearer " + token);
        return this.http.post(this.dataUrl + '/Addproduct3', obj, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err; });
    };
    productService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], productService);
    return productService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common__ = __webpack_require__("../../../../../src/app/services/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var userService = /** @class */ (function () {
    function userService(http) {
        this.http = http;
        this.dataUrl = __WEBPACK_IMPORTED_MODULE_2__services_common__["a" /* data */].Url + 'user'; // 'http://localhost:3001/user';  // URL to web api
    }
    userService.prototype.get = function () {
        return this.http.get(this.dataUrl + '/list')
            .map(function (res) { return res.json(); });
        // .map(this.extractData)
        // .catch(this.handleError);
    };
    userService.prototype.signout = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    };
    userService.prototype.save = function (obj) {
        console.log('SaveData - 2');
        var bodyString = JSON.stringify(obj); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //this.http.post('http://localhost:8001/expensetype/Add', {'data':obj}, options).toPromise();
        return this.http.post(this.dataUrl + '/signup', obj, options)
            .map(function (res) { return res.json(); });
        //  .then(this.extractData)
        // .catch(this.handleErrorPromise);;
        //return true;
    };
    userService.prototype.signin = function (obj) {
        console.log('SaveData - 2');
        var bodyString = JSON.stringify(obj); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.dataUrl + '/signin', obj, options)
            .map(function (res) { return res.json(); });
        //  .then(this.extractData)
        // .catch(this.handleErrorPromise);;
        //return true;
    };
    userService.prototype.update = function (obj) {
        var bodyString = JSON.stringify(obj); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.dataUrl + '/update', { 'data': obj }, options)
            .map(function (res) { return res.json(); });
        //.then(this.extractData)
        //.catch(this.handleErrorPromise);
    };
    userService.prototype.delete = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.dataUrl + '/Delete/' + obj._id, options)
            .map(function (res) { return res.json(); });
    };
    userService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || [];
    };
    userService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.message || error);
    };
    userService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    userService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], userService);
    return userService;
}());



/***/ }),

/***/ "../../../../../src/app/states/states.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/states/states.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    Country\n    </p>\n    <form [formGroup]=\"dbForm\" (ngSubmit)=\"save()\">\n      <div><label for=\"coutry_id\">Country</label>\n      <select formControlName=\"country_id\">\n        <option *ngFor=\"let ctr of objCountryArray\" value=\"{{ctr._id}}\">{{ctr.name}}</option>\n      </select>\n      </div>\n      <div><label for=\"name\">Name</label>\n      <input type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\">\n      <!-- <div *ngIf=\"dbForm.controls['name'].hasError('required')\" \n      class=\"alert alert-danger\">name is required.</div>\n      <div *ngIf=\"dbForm.controls['name'].hasError('minlength')\" \n      class=\"alert alert-danger\">min 5 characters.</div>\n      <div *ngIf=\"dbForm.controls['name'].hasError('maxlength')\" \n      class=\"alert alert-danger\">max 15 characters.</div> -->\n      \n      </div>\n      <button type=\"submit\" [disabled]=\"!dbForm.valid\">Save</button>\n      <a (click)=\"cancel()\">cancel</a>\n    </form>\n    <table >\n        <tr>\n            <td>Name</td>\n            <td>Action</td>\n        </tr>\n      <tr *ngFor=\"let obj of objArray\">\n        <td>{{obj.name}}</td>\n        <td><a (click)=\"edit(obj)\">edit</a> |\n        <a (click)=\"delete(obj._id)\">delete</a> |\n        <a routerLink=\"/states/{{obj._id}}\">States</a></td>\n      </tr>\n    </table>\n    "

/***/ }),

/***/ "../../../../../src/app/states/states.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_country_service__ = __webpack_require__("../../../../../src/app/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatesComponent = /** @class */ (function () {
    function StatesComponent(dataservice, builder) {
        this.dataservice = dataservice;
        this.builder = builder;
        this.objArray = [];
        this.objCountryArray = [];
        this.loading = false;
        this.dbForm = this.builder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null),
            _id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null)
        });
    }
    StatesComponent.prototype.ngOnInit = function () {
        this.getdata();
    };
    StatesComponent.prototype.getdata = function () {
        var _this = this;
        this.dataservice.get().subscribe(function (data) {
            _this.objCountryArray = data;
        });
    };
    StatesComponent.prototype.save = function () {
        var _this = this;
        if (this.dbForm.value._id == null) {
            this.dataservice.save(this.dbForm.value).subscribe(function (data) {
                console.log(data);
                _this.getdata();
            });
        }
        else {
            this.dataservice.update(this.dbForm.value).subscribe(function (data) {
                console.log(data);
                _this.getdata();
            });
        }
    };
    StatesComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm('Are You Sure To Delete! Record Permanently')) {
            this.dataservice.delete(id).subscribe(function (data) {
                console.log(data);
                _this.getdata();
            });
        }
    };
    StatesComponent.prototype.edit = function (obj) {
        this.dbForm.patchValue(obj);
    };
    StatesComponent.prototype.cancel = function () {
        this.dbForm.reset();
    };
    StatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-states',
            template: __webpack_require__("../../../../../src/app/states/states.component.html"),
            styles: [__webpack_require__("../../../../../src/app/states/states.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_country_service__["a" /* countryService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], StatesComponent);
    return StatesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-regstration/user-regstration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-regstration/user-regstration.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n<form [formGroup]=\"dbForm\" (ngSubmit)=\"save(dbForm.value,dbForm.valid)\">\n  <div><label for=\"fullname\">fullname</label>\n  <input type=\"text\" name=\"fullname\" id=\"fullname\" formControlName=\"fullname\">\n <!-- <small [hidden]=\"dbForm.controls.fullname.valid || dbForm.controls.fullname.pristine&& !submited\">Fullname Required</small> -->\n <small [hidden]=\"!dbForm.controls['fullname'].hasError('required')\">required</small>\n  </div>\n\n  <!--  -->\n  <div><label for=\"username\">username</label>\n    <input type=\"text\" formControlName=\"username\">\n    <!-- <small [hidden]=\"dbForm.controls.username.valid || dbForm.controls.username.pristine&& !submited\">username Required</small> -->\n    <small [hidden]=\"!dbForm.controls['username'].hasError('minlength')\">min length 3</small>\n    <small [hidden]=\"!dbForm.controls['username'].hasError('required')\">required</small>\n</div>\n     <div><label for=\"password\">password</label>\n      <input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\">\n      <!-- <small [hidden]=\"dbForm.controls.password.valid || dbForm.controls.password.pristine&& !submited\">password Required</small> -->\n      <small [hidden]=\"!dbForm.controls['password'].hasError('minlength')\">min lenght 5</small>\n      <small [hidden]=\"!dbForm.controls['password'].hasError('required')\">required</small>\n      </div>\n     \n  <button type=\"submit\" [disabled]=\"!dbForm.valid\">Save</button>\n</form>\n<br><br>\n<table >\n    <tr>\n        <td>fullname</td>\n        <td>username</td>\n        <td>password</td>\n        \n        <td>Action</td>\n      </tr>\n  <tr *ngFor=\"let obj of _users\">\n    <td>{{obj.fullname}}</td>\n    <td>{{obj.username}}</td>\n    <td>{{obj.password}}</td>\n    <td><a (click)=\"edit(obj)\">{{obj._id}}edit</a><a (click)=\"delete(obj)\">delete</a></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/user-regstration/user-regstration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegstrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegstrationComponent = /** @class */ (function () {
    function UserRegstrationComponent(builder, dataservice, toaster) {
        this.builder = builder;
        this.dataservice = dataservice;
        this.toaster = toaster;
        this._users = [];
        this.loading = false;
        this.dbForm = this.builder.group({
            fullname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(3)]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(5)]),
        });
        this._user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* user */]();
    }
    UserRegstrationComponent.prototype.ngOnInit = function () {
        //this.getdata();
    };
    UserRegstrationComponent.prototype.getdata = function () {
        var _this = this;
        this.dataservice.get().subscribe(function (data) {
            _this._users = data;
            console.log(data);
        });
    };
    UserRegstrationComponent.prototype.save = function (__user, isValid) {
        var _this = this;
        this.submitted = isValid;
        console.log(__user);
        if (isValid) {
            console.log(this.dbForm.value);
            this.dataservice.save(__user).subscribe(function (data) {
                console.log(data.success);
                if (data.success == true) {
                    _this.toaster.success('sucessfully!', 'Operation success1');
                }
                else {
                    _this.toaster.error(data.message, 'Operation failed');
                }
            }, function (err) {
                _this.toaster.error(err.message, 'Operation failed');
            });
            //this.getdata(),
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], UserRegstrationComponent.prototype, "fileInput", void 0);
    UserRegstrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-regstration',
            template: __webpack_require__("../../../../../src/app/user-regstration/user-regstration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-regstration/user-regstration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* userService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], UserRegstrationComponent);
    return UserRegstrationComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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