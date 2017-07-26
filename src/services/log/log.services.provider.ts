import {AlertController} from "ionic-angular";
import {CeyenneLogService} from "./log.services";

let CeyenneLogServiceFactory : any = (debug_console : Boolean, alertCtrl : AlertController) => {
    return new CeyenneLogService(true, alertCtrl);
};

export let CeyenneLogServiceProvider : any = {
    provide: CeyenneLogService,
    useFactory: CeyenneLogServiceFactory,
    deps: [true, AlertController]
};