import { EntityManager, MikroORM } from '@mikro-orm/core';
import { AnyEntity, EntityName, GetRepository } from '@mikro-orm/core/typings';
import { EntityRepository } from '@mikro-orm/core/entity';
import { MessageEntity } from './entities/MessageEntity';

export type DBI = {
    orm: MikroORM;
    em: EntityManager;
};

export const DB = {} as DBI;

(async () => {
    DB.orm = await MikroORM.init();
    const generator = DB.orm.getSchemaGenerator();
    await generator.updateSchema();
    DB.em = DB.orm.em;
})();
