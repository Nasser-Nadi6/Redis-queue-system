import { Queue } from './classes/Queue'
import {MessageBuilder} from "./classes/Message";

const queue=new Queue('test-queue')
// queue.add({msg:'hi'})

const message=new MessageBuilder({name:'nasser'})
message
    .setQueue('test')
    .setTTL(360000)

console.log(message)
