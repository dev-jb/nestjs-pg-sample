import { CreateItemDto } from '../dto/create-item.dto';
import { ReturnItemDto } from '../dto/return-item.dto';

export interface ItemServiceInterface {
    create(itemDto: CreateItemDto): Promise<ReturnItemDto>;
}
