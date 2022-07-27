import {MessageBuilderInterface} from '../interfaces/interfaces'

export class MessageBuilder implements MessageBuilderInterface {
    private message: Message
    private queueName: string
    private timeToLive: number

    constructor(data: string | object) {
        this.reset(data)
    }

    private reset(data: string | object): void {
        this.message = new Message(data)
    }

    setQueue(queueName: string): any {
        this.queueName = queueName
        return this
    }

    setTTL(number: number): any {
        this.timeToLive = number
        return this
    }

}

class Message {
    data: string | object

    constructor(data: string | object) {
        this.data = data
    }
}