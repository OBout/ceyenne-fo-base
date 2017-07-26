"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ionic_angular_1 = require("ionic-angular");
const log_services_1 = require("./log.services");
let CeyenneLogServiceFactory = (debug_console, alertCtrl) => {
    return new log_services_1.CeyenneLogService(true, alertCtrl);
};
exports.CeyenneLogServiceProvider = {
    provide: log_services_1.CeyenneLogService,
    useFactory: CeyenneLogServiceFactory,
    deps: [true, ionic_angular_1.AlertController]
};
//# sourceMappingURL=log.services.provider.js.map