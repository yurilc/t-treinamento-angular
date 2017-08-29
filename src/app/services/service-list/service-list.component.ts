import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Service } from '../service.model';
import { ServicesService } from '../services.service';

@Component({
    selector: 'app-service-list',
    templateUrl: './service-list.component.html',
    styleUrls: [ './service-list.component.css' ]
})
export class ServiceListComponent implements OnInit, OnDestroy {

    services: Service[];

    selectedService: Service;

    subscription: Subscription;

    constructor(private servicesService: ServicesService) {}

    ngOnInit() {
        this.subscription = this.servicesService
            .servicesSubject
            .subscribe(
                (services: Service[]) => {
                    this.services = services;
                });
        this.servicesService.getServices();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        //this.servicesService.unsubscribe();
    }

    onSelectService(service: Service) {
        this.selectedService = service;
    }

    onServiceSaved(service: Service) {
        console.log(service);
    }
}