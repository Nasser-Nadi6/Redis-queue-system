"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor(name) {
        this.name = name;
        this.data_collection = [];
    }
    add(message) {
        this.data_collection.push(message);
    }
}
exports.Queue = Queue;
