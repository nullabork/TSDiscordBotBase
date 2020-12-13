import * as dotenv from 'dotenv';
import { DotenvParseOutput } from 'dotenv/types';

export interface IEnv extends DotenvParseOutput {
    DISCORD_TOKEN: string;
    CHAR: string;
}

export const env = dotenv.config().parsed as IEnv;
