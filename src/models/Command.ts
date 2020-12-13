import { ICommand } from '../interfaces/ICommand';
import * as fs from 'fs';
import * as path from 'path';

type Constructor = Function & {
    keyword: string;
};

export class Command implements ICommand {
    static _commands: Map<string, typeof Command>;

    constructor() {
        return this;
    }

    static get command(): Command {
        return new this();
    }

    get hidden(): boolean {
        return false;
    }

    get keyword(): string {
        const constructor = this.constructor as Constructor;
        return constructor.keyword;
    }

    static get keyword(): string {
        return this.name.toLowerCase();
    }

    static loadCommands(): Map<string, typeof Command> {
        if (Command._commands) {
            return Command._commands;
        }

        Command._commands = new Map<string, typeof Command>();

        let commandDir = path.join(__dirname, '..', 'commands');
        const files = fs.readdirSync(commandDir);

        files.forEach((file) => {
            let filename = path.join(commandDir, file);
            let CommandAlias = require(filename).default as typeof Command;
            Command._commands.set(CommandAlias.keyword, CommandAlias);
        });

        return Command._commands;
    }
}
