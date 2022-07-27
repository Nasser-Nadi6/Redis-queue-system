export interface QueueInterface {
    name:string
    add(message: string | object):void
}

export interface MessageBuilderInterface {
 setQueue(queueName:string):any
 setTTL(time:number):any
}