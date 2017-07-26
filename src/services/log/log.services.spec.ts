import {} from "jasmine"; // import jasmine typings
import {CeyenneLogService} from "./log.services";

let logService: any = null;

describe("LogService test", () => {

    beforeEach(() => {
        logService = new CeyenneLogService(true, null);
    });

    it("LogService should exsist", () => {
        expect(logService).toBeTruthy();
    });

});