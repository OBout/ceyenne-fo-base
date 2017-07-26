import { Injectable, EventEmitter } from "@angular/core";
import { Platform } from "ionic-angular";
import * as PouchDB from "pouchdb-browser";

@Injectable()
export class PouchDBService {

    private isInstantiated: boolean;
    private database: any;
    private listener: EventEmitter<any> = new EventEmitter();

    public constructor() {
        if(!this.isInstantiated) {
            this.database = new PouchDB("nraboy");
            this.isInstantiated = true;
        }
    }

    public fetch():any {
        return this.database.allDocs({include_docs: true});
    }

    public get(id: string):any {
        return this.database.get(id);
    }

    public put(id: string, document: any):any {
        document._id = id;
        return this.get(id).then(result => {
            document._rev = result._rev;
            return this.database.put(document);
        }, error => {
            if(error.status === "404") {
                return this.database.put(document);
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        });
    }

    public sync(remote: string):any {
        let remoteDatabase:any = new PouchDB(remote);
        this.database.sync(remoteDatabase, {
            live: true
        }).on("change", change => {
            this.listener.emit(change);
        }).on("error", error => {
            console.error(JSON.stringify(error));
        });
    }

    public getChangeListener():any {
        return this.listener;
    }


}
