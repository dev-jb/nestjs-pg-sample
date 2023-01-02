import { Response } from 'src/@core/common/dto/response.dto';
import { ItemServiceInterface } from './interface/item.service.interface';
import { CreateItemDto } from './dto/create-item.dto';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ItemSuccessMessage } from './enum/item.enum';

@Controller('items')
export class ItemController {
    constructor(
        @Inject('ItemServiceInterface')
        private readonly itemService: ItemServiceInterface
    ) {}

    @Post()
    public async create(@Body() createItemDto: CreateItemDto): Promise<Response> {
        return new Response(ItemSuccessMessage.ITEM_CREATED_SUCCESSFULLY, await this.itemService.create(createItemDto));
    }
}
