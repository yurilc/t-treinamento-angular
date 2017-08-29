import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'resume'
})
export class ResumePipe implements PipeTransform {

    transform(value: string, limit: number = 5) {
        if(value.length > limit) {
            return value.substr(0, limit) + '...';
        } else {
            return value;
        }
    }
}