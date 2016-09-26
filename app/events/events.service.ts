import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class EventsService {

    apiUrl: string = "http://eventmanagerapiaspnetcore.azurewebsites.net/api/events";

    constructor(private http: Http) { }

    getEvents() {
        return this.http.get(this.apiUrl)
            .map((response: Response) => response.json());
    }
}