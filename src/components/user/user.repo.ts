import { Injectable } from '@nestjs/common';
import { User } from '@components/user/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepoInterface } from './interface/user.repo.interface';
import { BaseAbstractRepository } from '@repositories/base/base.abstract.repository';

@Injectable()
export class UserRepo extends BaseAbstractRepository<User> implements UserRepoInterface {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
        super(userRepository);
    }
    async findByEmail(email: string) {
        return await this.userRepository.findOne({
            where: {
                email: email
            }
        });
    }
}
