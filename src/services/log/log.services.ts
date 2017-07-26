import {Injectable} from "@angular/core";

@Injectable()

export class CeyenneLogService {

    debug_console: boolean = false;

    constructor(debug_console: boolean) {
        this.debug_console = debug_console;
    }

    error(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void {
        if(this.debug_console === true) {
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
    }

    warn(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void {
        if(this.debug_console === true) {
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
    }
    info(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void {
        if(this.debug_console === true) {
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
    }
    log(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void {
        if(this.debug_console === true) {
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
    }
    datalog(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void {
        if(this.debug_console === true) {
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
    }
    debug(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void {
        if(this.debug_console === true) {
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
    }
}