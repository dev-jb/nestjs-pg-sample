import { CreateUserDto } from '@components/user/dto/create-user.dto';
import { ReturnUserDto } from '../dto/return-user.dto';

export interface UserServiceInterface {
    create(userDto: CreateUserDto): Promise<ReturnUserDto>;
    findByEmail(email: string): Promise<ReturnUserDto>;
}
