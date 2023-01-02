import { DeleteResult, UpdateResult } from 'typeorm';

export interface BaseInterfaceRepository<T> {
    // eslint-disable-next-line
    save(data: T | any): Promise<T>;

    // eslint-disable-next-line
    update(id: string, data: T | any): Promise<UpdateResult>;

    findOneById(id: string): Promise<T>;

    findAll(): Promise<T[]>;

    remove(id: string): Promise<DeleteResult>;
}
