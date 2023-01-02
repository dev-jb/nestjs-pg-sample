import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/@core/common/entity/base.entity';

@Entity({ name: 'tbl_item' })
export class Item extends BaseEntity {
    @Column({ nullable: false })
    public itemName: string;

    @Column({ nullable: false })
    public cost: number;

    @Column({ nullable: false })
    public userId: string;
}
