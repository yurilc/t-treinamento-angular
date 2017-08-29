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

    services = [
        new Service('SMS', 2.25),
        new Service('Cheque Especial', 1.99)
    ];

    selectedService: Service;

    subscription: Subscription;

    constructor(private servicesService: ServicesService) {}

    ngOnInit() {
        this.subscription = this.servicesService.getServices().subscribe(
            (service: Service) => {
                console.log('Recebeu do observable: ', service);
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.servicesService.unsubscribe();
    }

    onSelectService(service: Service) {
        this.selectedService = service;
    }

    onServiceSaved(service: Service) {
        console.log(service);
    }
}