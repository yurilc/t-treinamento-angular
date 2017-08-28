import { Component } from '@angular/core';
import { Service } from '../service.model';

@Component({
    selector: 'app-service-list',
    templateUrl: './service-list.component.html',
    styleUrls: [ './service-list.component.css' ]
})
export class ServiceListComponent {

    services = [
        new Service('SMS', 2.25),
        new Service('Cheque Especial', 1.99)
    ];
}