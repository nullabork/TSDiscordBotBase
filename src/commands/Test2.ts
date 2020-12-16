import { IExecuteProps, IOnMessageProps, Events } from '../interfaces/ICommand';
import { Command } from '../models/Command';
import { MessageEntity } from '../entities/MessageEntity';

export default class Test2 extends Command {
    async execute({ message, parts, db }: IExecuteProps): Promise<boolean> {
        const e = db.em.create(MessageEntity, {
            message: parts.rest,
        });

        let repo = db.em.getRepository(MessageEntity);
        await repo.persist(e).flush();

        message.reply('saved maybe :D');
        return true;
    }

    async onMessage({ message }: IOnMessageProps) {
        message.reply('hey I can reply to all messages now :p');
        return true;
    }

    static get subscribe() {
        return [Events.onMessage];
    }
}
