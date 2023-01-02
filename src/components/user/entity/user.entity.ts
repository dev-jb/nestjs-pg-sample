import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/@core/common/entity/base.entity';

@Entity({ name: 'tbl_user' })
export class User extends BaseEntity {
    @Column({ unique: true, nullable: true })
    public email: string;

    @Column({ unique: false, nullable: false })
    public name: string;

    @Column({ nullable: true })
    @Exclude()
    public password?: string;
}
