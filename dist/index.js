"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = require("./classes/Queue");
const Message_1 = require("./classes/Message");
const queue = new Queue_1.Queue('test-queue');
// queue.add({msg:'hi'})
const message = new Message_1.MessageBuilder({ name: 'nasser' });
message
    .setQueue('test')
    .setTTL(360000);
console.log(message);
