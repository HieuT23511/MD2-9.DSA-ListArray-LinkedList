import {InterfaceArrayList} from "./InterfaceArrayList";

export class ArrayList<T> implements InterfaceArrayList<T>{
    container: Array<T>;
    constructor() {
        this.container = [];
    }
    add(data: T) {
        this.container.push(data);
    }

    get(index: number) {
        return this.container[index];
    }

    remove() {
        this.container.pop()
    }

    size(): number {
        return this.container.length;
    }
    toString():string{
        return (`This size of Array is ${this.size()}`)
    }
}