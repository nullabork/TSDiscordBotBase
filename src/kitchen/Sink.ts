import { env } from '../env';

type Patterns = { [key: string]: RegExp };
type ParsedMessage = { [key: string]: string };

class Sink {
    static parseMessage(message: string, patterns: Patterns): ParsedMessage {
        const patternKeys = Object.keys(patterns);
        patternKeys.map((key) => {});
        return {};
    }
}
