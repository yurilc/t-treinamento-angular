export class Service {
    name: string;
    value: number;
    items: string[];

    constructor(name?: string, 
                value?: number,
                items?: string[]) {
        this.name = name;
        this.value = value;
        this.items = items;
    }
}