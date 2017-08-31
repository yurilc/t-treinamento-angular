import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';

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

    constructor(private servicesService: ServicesService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        // this.subscription = this.servicesService
        //     .servicesSubject
        //     .subscribe(
        //         (services: Service[]) => {
        //             this.services = services;
        //         });
        this.servicesService.getServices()
            .subscribe(
                (services: Service[]) => {
                    this.services = services;
                }
            );
    }

    ngOnDestroy() {
        //this.subscription.unsubscribe();
        //this.servicesService.unsubscribe();
    }

    onSelectService(service: Service) {
        this.selectedService = service;
    }

    onServiceSaved(service: Service) {
        console.log(service);
    }

    onNewService() {
        this.router.navigate(['new'],
            { relativeTo: this.route });
    }
}