import { User } from '@components/user/entity/user.entity';
import { BaseInterfaceRepository } from '@repositories/base/base.interface.repository';

export interface UserRepoInterface extends BaseInterfaceRepository<User> {
    findByEmail(email: string);
}
