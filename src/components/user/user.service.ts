import { User } from '@components/user/entity/user.entity';
import { CreateUserDto } from '@components/user/dto/create-user.dto';
import { UserServiceInterface } from './interface/user.service.interface';
import { UserRepoInterface } from './interface/user.repo.interface';
import { ReturnUserDto } from './dto/return-user.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserErrorMessage } from './enum/user-error-message.enum';

@Injectable()
export class UserService implements UserServiceInterface {
    constructor(
        @Inject('UserRepoInterface')
        private readonly userRepo: UserRepoInterface
    ) {}

    async create(userDto: CreateUserDto): Promise<ReturnUserDto> {
        const user = new User();
        user.email = userDto.email;
        user.name = userDto.name;
        user.password = userDto.password;
        const userSaved = await this.userRepo.save(user);
        return this.toReturnUserDto(userSaved);
    }

    async findByEmail(email: string): Promise<ReturnUserDto> {
        const user = await this.userRepo.findByEmail(email);
        if (!user) {
            throw new NotFoundException(UserErrorMessage.USER_NOT_FOUND);
        }
        return user;
    }

    private toReturnUserDto(user: User): ReturnUserDto {
        const returnUserDto = new ReturnUserDto();
        returnUserDto.id = user.id;
        returnUserDto.name = user.name;
        returnUserDto.email = user.email;
        return returnUserDto;
    }
}
