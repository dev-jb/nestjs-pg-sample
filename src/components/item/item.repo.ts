import { Injectable } from '@nestjs/common';
import { User } from '@components/user/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '@repositories/base/base.abstract.repository';
import { Item } from './entity/item.entity';
import { ItemRepoInterface } from './interface/item.repo.interface';

@Injectable()
export class ItemRepo extends BaseAbstractRepository<Item> implements ItemRepoInterface {
    constructor(
        @InjectRepository(Item)
        private readonly repo: Repository<Item>
    ) {
        super(repo);
    }
}
