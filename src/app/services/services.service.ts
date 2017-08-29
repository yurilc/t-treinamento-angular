import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

import { Service } from './service.model';

export class ServicesService {

    private services = [
        new Service('SMS', 2.25),
        new Service('Cheque Especial', 1.99)
    ];

    servicesSubject = new Subject<Service[]>();

    getServices() {
        setTimeout(() => {
            this.servicesSubject.next(
                this.services.slice()
            );
        }, 2000);
    }

    
}