export declare class CeyenneLogService {
    debug_console: boolean;
    constructor(debug_console: boolean);
    error(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void;
    warn(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void;
    info(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void;
    log(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void;
    datalog(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void;
    debug(message: any, obj1?: any, obj2?: any, obj3?: any, obj4?: any): void;
}
