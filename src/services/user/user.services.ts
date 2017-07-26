import {OnInit} from "@angular/core/core";
import {Injectable, Inject} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
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
        let conString: string = this.config.SERVERPROTOCOL + this.config.SERVERURL + ":" + this.config.SERVERPORT + this.config.LOGINURL;
        let body: any = {
            "UserName": username,
            "Password": password,
            "ApplicationID": this.config.APPLICATIONID,
            "ConfirmationToken": this.config.CONFORMATIONTOKEN
        };
        let options: any = {};
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
                    .post(conString, body);
            }
        } else {
            // console.log("posting", conString);
            loginAction = this
                .http
                .post(conString, body);
        }

        // let th: any = this;
        loginAction.subscribe((data : any) => {
            try {
                data = data.json();
                // console.log("data", data);
                let cu : any = {
                    "UserId": data.UserId,
                    "LoggerInUserDisplayName": data.LoggerInUserDisplayName,
                };
                this.currentUser = cu;
                // window
                //     .sessionStorage
                //     .setItem("CurrentUser", JSON.stringify(cu));
                this.authenticationToken = data.AuthenticationToken;
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