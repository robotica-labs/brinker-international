import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
export declare class CustomersService {
    private repository;
    constructor(repository: Repository<Customer>);
    findOne(id: number): Promise<Customer>;
    find(email: string): Promise<Customer[]>;
    create(firstName: string, lastName: string, email: string): Promise<Customer>;
    update(id: number, attrs: Partial<Customer>): Promise<Customer>;
    remove(id: number): Promise<Customer>;
}
