"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBuilder = void 0;
class MessageBuilder {
    constructor(data) {
        this.reset(data);
    }
    reset(data) {
        this.message = new Message(data);
    }
    setQueue(queueName) {
        this.queueName = queueName;
        return this;
    }
    setTTL(number) {
        this.timeToLive = number;
        return this;
    }
}
exports.MessageBuilder = MessageBuilder;
class Message {
    constructor(data) {
        this.data = data;
    }
}
