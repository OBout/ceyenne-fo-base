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

    public isAuthenticated() : boolean {
        return this.authenticated;
    }

    public init(config : any) : void {
        this.config = config;
    }

    public getAuthenticationtoken() : string {
        // get auth token from sessionStorage
        return this.authenticationToken;
    }

    public getCurrentUser() : any {
        // returning current user
        // let curu: any = this.currentUser;
        // let curjson: any = JSON.parse(curu);
        return this.currentUser;
    }

    public logout() : void {
        console.log("loggin out");
        this.currentUser = {};
        this.authenticated = false;
        this.authenticationToken = "";
    }

    public login(username : string, password : string, redirect?: any) : any {

        let headers: Headers = new Headers();

        headers.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Authorization", "Basic " + this.config.CONFORMATIONTOKEN);
        let conString: string = this.config.SERVERPROTOCOL + this.config.SERVERURL + ":" + this.config.SERVERPORT + this.config.LOGINURL;
        let body: any = {
            "grant_type":
                {
                    "username": username,
                    "password": password,
                    "client_id": this.config.APPLICATIONID,
                    "scope": "api"
                }
            };
        let options: RequestOptions = new RequestOptions({ headers: headers, body: body });
        let loginAction: any;
        if (this.config.METHOD) {
            if (this.config.METHOD === "local") {
                loginAction = this
                    .http
                    .get(conString);
            } else {
                // console.log("posting", conString);
                loginAction = this
                    .http
                    .post(conString, options);
            }
        } else {
            // console.log("posting", conString);
            loginAction = this
                .http
                .post(conString, body);
        }

        // let th: any = this;
        loginAction.subscribe((data : any) => {

        console.log("data", data);

        try {

                // jwt token: https://jwt.io/
                let objectdata: any = data.split(".");
                let header: any = objectdata[0];
                let payload: any = objectdata[1];
                let signature: any = objectdata[2];

                let cu : any = {
                    "UserId": payload.sub,
                    "LoggerInUserDisplayName": payload.name,
                };
                this.currentUser = cu;
                // window
                //     .sessionStorage
                //     .setItem("CurrentUser", JSON.stringify(cu));
                // settings for Identity Server
                this.authenticationToken = "Bearer " + data;
                // window
                //     .sessionStorage
                //     .setItem("Authenticationtoken", data.AuthenticationToken);

                this.authenticated = true;
                // console.log("authenticated", this.authenticated);

            } catch (e) {
                console.log("e", e);
                this.authenticationToken = "";

                // window
                //     .sessionStorage
                //     .setItem("Authenticationtoken", "");
                return new Error("Authentication Error");
            }

        }, (error) => {
            console.log("loginAction error", error);
        });
        return loginAction;

    }

    public signup(username : string, password : string) : void {alert("not yet implemented");}
}