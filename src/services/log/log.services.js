var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
var CeyenneLogService = /** @class */ (function () {
    function CeyenneLogService(debug_console) {
        this.debug_console = false;
        this.debug_console = debug_console;
    }
    CeyenneLogService.prototype.error = function (message, obj1, obj2, obj3, obj4) {
        if (this.debug_console === true) {
            if (message) {
                if (!obj1) {
                    console.error(message);
                }
                if (obj1) {
                    console.log(message + ":");
                    console.log(obj1);
                }
                if (obj2) {
                    console.log(obj2);
                }
                if (obj3) {
                    console.log(obj3);
                }
                if (obj4) {
                    console.log(obj4);
                }
            }
        }
    };
    CeyenneLogService.prototype.warn = function (message, obj1, obj2, obj3, obj4) {
        if (this.debug_console === true) {
            if (message) {
                if (!obj1) {
                    console.warn(message);
                }
                if (obj1) {
                    console.warn(message + ":");
                    console.warn(obj1);
                }
                if (obj2) {
                    console.warn(obj2);
                }
                if (obj3) {
                    console.warn(obj3);
                }
                if (obj4) {
                    console.warn(obj4);
                }
            }
        }
    };
    CeyenneLogService.prototype.info = function (message, obj1, obj2, obj3, obj4) {
        if (this.debug_console === true) {
            if (message) {
                if (!obj1) {
                    console.log(message);
                }
                if (obj1) {
                    console.log(message + ":");
                    console.log(obj1);
                }
                if (obj2) {
                    console.log(obj2);
                }
                if (obj3) {
                    console.log(obj3);
                }
                if (obj4) {
                    console.log(obj4);
                }
            }
        }
    };
    CeyenneLogService.prototype.log = function (message, obj1, obj2, obj3, obj4) {
        if (this.debug_console === true) {
            if (message) {
                if (!obj1) {
                    console.log(message);
                }
                if (obj1) {
                    console.log(message + ":");
                    console.log(obj1);
                }
                if (obj2) {
                    console.log(obj2);
                }
                if (obj3) {
                    console.log(obj3);
                }
                if (obj4) {
                    console.log(obj4);
                }
            }
        }
    };
    CeyenneLogService.prototype.datalog = function (message, obj1, obj2, obj3, obj4) {
        if (this.debug_console === true) {
            if (message) {
                if (!obj1) {
                    console.log(message);
                }
                if (obj1) {
                    console.log(message + ":");
                    console.log(obj1);
                }
                if (obj2) {
                    console.log(obj2);
                }
                if (obj3) {
                    console.log(obj3);
                }
                if (obj4) {
                    console.log(obj4);
                }
            }
        }
    };
    CeyenneLogService.prototype.debug = function (message, obj1, obj2, obj3, obj4) {
        if (this.debug_console === true) {
            if (message) {
                if (!obj1) {
                    console.log(message);
                }
                if (obj1) {
                    console.log(message + ":");
                    console.log(obj1);
                }
                if (obj2) {
                    console.log(obj2);
                }
                if (obj3) {
                    console.log(obj3);
                }
                if (obj4) {
                    console.log(obj4);
                }
            }
        }
    };
    CeyenneLogService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Boolean])
    ], CeyenneLogService);
    return CeyenneLogService;
}());
export { CeyenneLogService };
//# sourceMappingURL=log.services.js.map