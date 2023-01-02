import { User } from '@components/user/entity/user.entity';
import { CreateUserDto } from '@components/user/dto/create-user.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ItemServiceInterface } from './interface/item.service.interface';
import { ItemRepoInterface } from './interface/item.repo.interface';
import { CreateItemDto } from './dto/create-item.dto';
import { ReturnItemDto } from './dto/return-item.dto';
import { UserServiceInterface } from '@components/user/interface/user.service.interface';
import { Item } from './entity/item.entity';

@Injectable()
export class ItemService implements ItemServiceInterface {
    constructor(
        @Inject('ItemRepoInterface')
        private readonly itemRepo: ItemRepoInterface,
        @Inject('UserServiceInterface')
        private readonly userService: UserServiceInterface
    ) {}

    async create(itemDto: CreateItemDto): Promise<ReturnItemDto> {
        const user = await this.userService.findByEmail(itemDto.userEmail);
        const item = new Item();
        item.cost = itemDto.cost;
        item.itemName = itemDto.itemName;
        item.userId = user.id;
        return this.toReturnItemDto(await this.itemRepo.save(item));
    }

    private toReturnItemDto(item: Item): ReturnItemDto {
        const returnItemDto = new ReturnItemDto();
        returnItemDto.itemName = item.itemName;
        returnItemDto.cost = item.cost;
        returnItemDto.userId = item.userId;
        return returnItemDto;
    }
}
