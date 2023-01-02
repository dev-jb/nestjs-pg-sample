import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entity/item.entity';
import { ItemRepo } from './item.repo';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { UserModule } from '@components/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Item]), UserModule],
    providers: [
        {
            provide: 'ItemRepoInterface',
            useClass: ItemRepo
        },
        {
            provide: 'ItemServiceInterface',
            useClass: ItemService
        }
    ],
    controllers: [ItemController]
})
export class ItemModule {}
