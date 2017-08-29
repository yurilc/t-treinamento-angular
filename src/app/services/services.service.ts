import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Service } from './service.model';

export class ServicesService {

    private services = [
        new Service('SMS', 2.25),
        new Service('Cheque Especial', 1.99)
    ];

    //private interval;

    getServices(): Observable<Service> {
        const observable = Observable.create(
            (observer: Observer<Service>) => {
                setTimeout(() => {
                    observer.next(new Service('Serviço 1', 0));
                }, 1000);
                setTimeout(() => {
                    observer.next(new Service('Serviço 2', 0));
                }, 2000);
                setTimeout(() => {
                    //observer.error('Deu erro mano!');
                    //Observable.throw(new Error('Deu erro mano!'));
                    observer.complete();
                }, 2500);
                setTimeout(() => {
                    observer.next(new Service('Serviço 3', 0));
                }, 3000);
                //observer.next(new Service('Juros Zero', 0));
                /*this.interval = setInterval(()=>{
                    observer.next(
                        new Service('Juros Zero', 0)
                    );
                }, 500);*/
            }
        );
        return observable;
    }

    /*unsubscribe() {
        clearInterval(this.interval);
    }*/
}