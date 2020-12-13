import { env } from './env';
import { Client } from 'discord.js';
import { Command } from './models/Command';

const commands = Command.loadCommands();

commands.forEach((command) => {});

console.log(env.DISCORD_TOKEN);
