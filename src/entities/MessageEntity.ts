import { Cascade, Collection, Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../models/BaseEntity';

@Entity()
export class MessageEntity extends BaseEntity {
    @Property()
    message: string;

    constructor(message: string) {
        super();
        this.message = message;
    }
}
