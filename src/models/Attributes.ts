export class Attributes<T> {
    constructor(private data: T) {}

    // K can only ever be one of the keys of T...
    // The parameter key will be of type K...
    // Then it returns of the object keys of T and knows what data type that is
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data;
    }
}

