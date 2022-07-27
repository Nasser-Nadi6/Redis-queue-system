import {QueueInterface} from '../interfaces/interfaces'

export class Queue implements QueueInterface {
    name: string
    private data_collection: any[];

    constructor(name: string) {
        this.name = name
        this.data_collection = []
    }

    add(message: string | object): void {
        this.data_collection.push(message)
    }
}