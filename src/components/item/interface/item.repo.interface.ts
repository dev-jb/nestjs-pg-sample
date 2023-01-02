import { BaseInterfaceRepository } from '@repositories/base/base.interface.repository';
import { Item } from '../entity/item.entity';

export interface ItemRepoInterface extends BaseInterfaceRepository<Item> {}
