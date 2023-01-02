import { ItemModule } from '@components/item/item.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigService } from './@core/config/type-orm-config.service';
import { envValidationSchema } from './app-env-validation';
import { UserModule } from './components/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            validationSchema: envValidationSchema
        }),
        TypeOrmModule.forRoot(typeOrmConfigService.getConfig()),
        UserModule,
        ItemModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
