import * as dotenv from 'dotenv';
import { DotenvParseOutput } from 'dotenv/types';
import * as kindOf from 'kind-of';

export const enum EnvBool {
    ON = 'ON',
    OFF = 'OFF',
}

export interface IEnv extends DotenvParseOutput {
    BOT_NAME: string;
    DISCORD_TOKEN: string;
    CHAR: string;
    LOG_INFO: EnvBool;
    LOG_WARN: EnvBool;
    LOG_ERROR: EnvBool;
    DB_NAME: string;
    DB_DEBUG: EnvBool;
}

export const env = dotenv.config().parsed as IEnv;

type FuncType = (env: IEnv) => EnvBool;
type props = EnvBool | FuncType;

export const envBoolValue = (bool: props): boolean => {
    if (kindOf(bool) == 'function') {
        bool = (bool as FuncType)(env);
    }
    return bool === EnvBool.ON;
};
