import {} from "jasmine"; // import jasmine typings
import {UserService} from "./user.services";
import {TOKEN, STOCK_URL, CURRENTUSER, LOGINRESULT} from "../../mocks";
import {TestBed, inject} from "@angular/core/testing";

import {
    HttpModule,
    Http,
    BaseRequestOptions,
    XHRBackend,
    Response,
    ResponseOptions
} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe("UserService", () => {

    it("UserService should exsist", () => {
        expect(UserService).toBeTruthy();
    });
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: STOCK_URL,
                    useValue: STOCK_URL
                },
                UserService, {
                    provide: XHRBackend,
                    useClass: MockBackend
                }
            ]
        });

    });

    describe("UserService Logout", async() => {

        it("Logout", inject([UserService], (userService) => {
            userService.authenticationToken = "fout";
            userService.currentUser = {
                "UserID": 667,
                "LoggerInUserDisplayName": "FOUT"
            };
                userService.logout();
                expect(userService.authenticationToken).toMatch("");
        }));

    });

    describe("UserService Login", async() => { // async mag, maar hoeft niet

        // https://blog.thoughtram.io/angular/2016/11/28/testing-services-with-http-in-angular-2.html

        it("Login through http: stock, authtoken, isauth, currentuser", inject([
            UserService, XHRBackend
        ], (userService, mockBackend) => {

            const mockResponse: any = LOGINRESULT;

            mockBackend
                .connections
                .subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({body: mockResponse})));
                });


            userService.authenticationToken = "fout";
            userService.currentUser = {
                "UserID": 678,
                "LoggerInUserDisplayName": "FOUT"
            };

            userService
                .login("test", "test")
                .subscribe((stock) => {
                    let stockraw: any = stock;
                    stock = stock.json();

                    let cu: any = userService.getCurrentUser();
                    let cuold: any = JSON.stringify(cu);
                    let cunew: any = JSON.stringify(CURRENTUSER);

                    // tests
                    expect(stock).toBe(LOGINRESULT);
                    expect(userService.getAuthenticationtoken()).toBe(TOKEN);
                    expect(cuold).toMatch(cunew);
                    expect(userService.isAuthenticated).toBeTruthy();

                }, (e) => {
                    console.log(e);
                });

        }));

    });

});