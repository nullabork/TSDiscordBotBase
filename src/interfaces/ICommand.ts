import { Message } from 'discord.js';
import { Command } from '../models/Command';
import { IEnv } from '../env';

export const enum Template {
    DefaultHTML = 'default.html',
    MemeHTML = 'meme.html',
}

export const enum FrameType {
    Image = 'IMAGE',
    Text = 'TEXT',
    Static = 'STATIC',
}

export interface FrameInterface {
    type: FrameType;
    x?: number;
    y?: number;
    width: number;
    height: number;
    angle: number;

    background?: string;
    color?: string;
    shadow?: string;
    strokeSize?: string;
    strokeColor?: string;
    css?: string;

    value?: string;
}

export interface IExecuteProps {
    message?: Message;
    commands?: Command[];
    env?: IEnv;
}

export interface ICommand {
    execute?(props: IExecuteProps): boolean;
    keyword: string;
    template?: Template;
    frames?: FrameInterface[];
}
