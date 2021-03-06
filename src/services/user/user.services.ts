import {OnInit} from "@angular/core/core";
import {Injectable, Inject} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()

export class UserService implements OnInit {

    public currentUser : any = {};
    public authenticated : boolean = false;
    public authenticationToken : string = "";
    private config : any = {};

    constructor(@Inject(Http)private http?: Http) {
        // constructed
    }

    ngOnInit() : void {
        // thats empty
    }

    public isAuthenticated() : boolean {return this.authenticated;}

    public init(config : any) : void {
        this.config = config;
    }

    public getAuthenticationtoken() : string {
        // get auth token from sessionStorage
        return this.authenticationToken;
    }

    public getCurrentUser() : any {
        // returning current user let curu: any = this.currentUser; let curjson: any =JSON.parse(curu);
        return this.currentUser;
    }

    public logout() : void {
        console.log("loggin out");
        this.currentUser = {};
        this.authenticated = false;
        this.authenticationToken = "";
    }

    public login(username : string, password : string, redirect?: any) : any {

        let headers: Headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + this.config.CONFIRMATIONTOKEN });

        let conString: string = this.config.SERVERPROTOCOL + this.config.SERVERURL + ":" + this.config.SERVERPORT + this.config.LOGINURL;
        let body: any = "grant_type=password&username="+username+"&password="+password+"&client_id="+this.config.APPLICATIONID+"&scope=api";

        // let options: any = {headers: headers};
        let loginAction: any;
        // if (this.config.METHOD) {
        //     if (this.config.METHOD === "local") {
        //         loginAction = this
        //             .http
        //             .get(conString);
        //     } else {
                // console.log("posting", conString);
        loginAction = this
            .http
            .post(conString, body, {headers: headers});
            // }
        // } else {
        //     // console.log("posting", conString);
        //     // loginAction = this
        //     //     .http
        //     //     .post(conString, body);
        // }

        // let th: any = this;
        loginAction.subscribe((data : any) => {

            console.log("data", data);
            console.log("data._body", data._body);

            try {
                let datajson: any = JSON.parse(data._body);
                console.log("datajson", datajson);

                // jwt token: https://jwt.io/
                let objectdata : any = datajson.access_token.split(".");

                console.log("objectdata", objectdata);

                let bearer : string = datajson.token_type;
                let pls : string = "" + objectdata[1];
                console.log("pls", pls);

                let payload : any = atob(pls);
                // let signature : any = atob(objectdata[2]);

                console.log("payload", payload);

                let sub: any = 0;
                let name: any = "";

                if (payload.sub) {
                    sub = payload.sub;
                }
                if (payload.name) {
                    name = payload.name;
                }

                let cu : any = {
                    "UserId": sub,
                    "LoggerInUserDisplayName": name
                };
                this.currentUser = cu;
                // window     .sessionStorage     .setItem("CurrentUser", JSON.stringify(cu));
                // settings for Identity Server
                this.authenticationToken = "Bearer " + datajson.access_token;
                // this.authenticationToken = data._body;
                // window     .sessionStorage     .setItem("Authenticationtoken",
                // data.AuthenticationToken);

                this.authenticated = true;
                // console.log("authenticated", this.authenticated);

            } catch (e) {
                console.log("e", e);
                this.authenticationToken = "";

                // window     .sessionStorage     .setItem("Authenticationtoken", "");
                return new Error("Authentication Error");
            }

        }, (error) => {
            console.log("loginAction error", error);
        });
        return loginAction;

    }

    public signup(username : string, password : string) : void {alert("not yet implemented");}
}