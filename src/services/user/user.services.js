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
import { Injectable, Inject } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.currentUser = {};
        this.authenticated = false;
        this.authenticationToken = "";
        this.config = {};
        // constructed
    }
    UserService.prototype.ngOnInit = function () {
        // thats empty
    };
    UserService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    UserService.prototype.init = function (config) {
        this.config = config;
    };
    UserService.prototype.getAuthenticationtoken = function () {
        // get auth token from sessionStorage
        return this.authenticationToken;
    };
    UserService.prototype.getCurrentUser = function () {
        // returning current user
        // let curu: any = this.currentUser;
        // let curjson: any = JSON.parse(curu);
        return this.currentUser;
    };
    UserService.prototype.logout = function () {
        console.log("loggin out");
        this.currentUser = {};
        this.authenticated = false;
        this.authenticationToken = "";
    };
    UserService.prototype.login = function (username, password, redirect) {
        var _this = this;
        var headers = new Headers();
        headers.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Authorization", "Basic " + this.config.CONFORMATIONTOKEN);
        var conString = this.config.SERVERPROTOCOL + this.config.SERVERURL + ":" + this.config.SERVERPORT + this.config.LOGINURL;
        var body = {
            "grant_type": {
                "username": username,
                "password": password,
                "client_id": this.config.APPLICATIONID,
                "scope": "api"
            }
        };
        var options = new RequestOptions({ headers: headers, body: body });
        var loginAction;
        if (this.config.METHOD) {
            if (this.config.METHOD === "local") {
                loginAction = this
                    .http
                    .get(conString);
            }
            else {
                // console.log("posting", conString);
                loginAction = this
                    .http
                    .post(conString, options);
            }
        }
        else {
            // console.log("posting", conString);
            loginAction = this
                .http
                .post(conString, body);
        }
        // let th: any = this;
        loginAction.subscribe(function (data) {
            console.log("data", data);
            // let sdata:String = ""+data;
            try {
                // jwt token: https://jwt.io/
                // let objectdata: any = sdata.split(".");
                // let header: any = objectdata[0];
                // let payload: any = objectdata[1];
                // let signature: any = objectdata[2];
                var cu = {
                    "UserId": 1,
                    "LoggerInUserDisplayName": "Oscar",
                };
                // let cu : any = {
                //     "UserId": payload.sub,
                //     "LoggerInUserDisplayName": payload.name,
                // };
                _this.currentUser = cu;
                // window
                //     .sessionStorage
                //     .setItem("CurrentUser", JSON.stringify(cu));
                // settings for Identity Server
                _this.authenticationToken = "Bearer " + data;
                // window
                //     .sessionStorage
                //     .setItem("Authenticationtoken", data.AuthenticationToken);
                _this.authenticated = true;
                // console.log("authenticated", this.authenticated);
            }
            catch (e) {
                console.log("e", e);
                _this.authenticationToken = "";
                // window
                //     .sessionStorage
                //     .setItem("Authenticationtoken", "");
                return new Error("Authentication Error");
            }
        }, function (error) {
            console.log("loginAction error", error);
        });
        return loginAction;
    };
    UserService.prototype.signup = function (username, password) { alert("not yet implemented"); };
    UserService = __decorate([
        Injectable(),
        __param(0, Inject(Http)),
        __metadata("design:paramtypes", [Http])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.services.js.map