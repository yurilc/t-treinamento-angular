import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

import { Service } from './service.model';

@Injectable()
export class ServicesService {

    private services = [
        new Service('SMS', 2.25, []),
        new Service('Cheque Especial', 1.99, [])
    ];

    servicesSubject = new Subject<Service[]>();

    constructor(private http: Http) {}

    getServices() {
        setTimeout(() => {
            this.servicesSubject.next(
                this.services.slice()
            );
        }, 500);
    }

    getService(index: number) {
        return this.services[index];
    }

    save(service: Service) {
        //this.services.push(service);
        //this.servicesSubject.next(this.services.slice());
        return this.http.post('https://t-treinamento-angular.firebaseio.com/services.json', service);
    }

    update(index: number, service: Service) {
        this.services[index] = service;
        this.servicesSubject.next(this.services.slice());
    }
}