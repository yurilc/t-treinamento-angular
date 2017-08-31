import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { Service } from './service.model';

@Injectable()
export class ServicesService {

    private services = [];

    servicesSubject = new Subject<Service[]>();

    constructor(private http: Http) {}

    getServices() {
        return this.http.get(
            environment.apiUrl + 'services.json'
        ).map(
            (response: Response) => {
                return response.json()
            }
        ).do((services: Service[]) => {
            if(services && services != null) {
                this.services = services;
                this.servicesSubject.next(
                    this.services.slice()
                );
            }
        });
        // setTimeout(() => {
        //     this.servicesSubject.next(
        //         this.services.slice()
        //     );
        // }, 500);
    }

    getService(index: number) {
        return this.services[index];
    }

    save(service: Service) {
        this.services.push(service);
        //this.servicesSubject.next(this.services.slice());
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put(
            environment.apiUrl + 'services.json',
            this.services,
            {
                headers: headers
            }
        ).map(
            (response: Response) => {
                return response.json()
            }
        ).do((services: Service[]) => {
            this.services = services;
            this.servicesSubject.next(
                this.services.slice()
            );
        });
    }

    update(index: number, service: Service) {
        this.services[index] = service;
        this.servicesSubject.next(this.services.slice());
    }
}