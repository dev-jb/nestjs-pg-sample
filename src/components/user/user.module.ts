import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@components/user/entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepo } from './user.repo';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        {
            provide: 'UserRepoInterface',
            useClass: UserRepo
        },
        {
            provide: 'UserServiceInterface',
            useClass: UserService
        }
    ],
    exports: [
        {
            provide: 'UserServiceInterface',
            useClass: UserService
        }
    ],
    controllers: [UserController]
})
export class UserModule {}
