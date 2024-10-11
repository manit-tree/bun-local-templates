import './style.css';

export class Dog {
    name: string;

    constructor(name:string) {
        this.name = name;
    }

    walk():void {
        console.log(this.name + ' is walking!');
    }
}
