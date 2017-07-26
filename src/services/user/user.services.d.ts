import { OnInit } from "@angular/core/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
export declare class UserService implements OnInit {
    private http;
    currentUser: any;
    authenticated: boolean;
    authenticationToken: string;
    private config;
    constructor(http?: Http);
    ngOnInit(): void;
    isAuthenticated(): boolean;
    init(config: any): void;
    getAuthenticationtoken(): string;
    getCurrentUser(): any;
    logout(): void;
    login(username: string, password: string, redirect?: any): Observable<Response>;
    signup(username: string, password: string): void;
}
