import { BaseInterfaceRepository } from './base.interface.repository';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

export class BaseAbstractRepository<T> implements BaseInterfaceRepository<T> {
    private entity: Repository<T>;

    protected constructor(entity: Repository<T>) {
        this.entity = entity;
    }

    // eslint-disable-next-line
    public async save(data: T | any): Promise<T> {
        return await this.entity.save(data);
    }

    // eslint-disable-next-line
    public async update(id: string, data: any): Promise<UpdateResult> {
        return await this.entity.update(id, data);
    }

    public async findOneById(id: string): Promise<T> {
        return await this.entity.findOne(id);
    }

    public async findAll(): Promise<T[]> {
        return await this.entity.find();
    }

    public async remove(id: string): Promise<DeleteResult> {
        return await this.entity.delete(id);
    }
}
