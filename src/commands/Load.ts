import { ICommand, IExecuteProps } from '../interfaces/ICommand';
import { Command } from '../models/Command';
import { MessageEntity } from '../entities/MessageEntity';
import { MessageEmbed } from 'discord.js';

export default class Load extends Command implements ICommand {
    async execute({ message, parts, db }: IExecuteProps): Promise<boolean> {
        const messages = await db.em.getRepository(MessageEntity).findAll({
            limit: 15,
        });

        const embed = new MessageEmbed()
            .setTitle('messages')
            .setDescription(`${messages.length} latest messages.`);
        messages.forEach((msg) => {
            embed.addField(msg.createdAt.toUTCString(), msg.message, false);
        });

        message.channel.send(embed);
        return true;
    }
}
