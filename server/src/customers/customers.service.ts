import { Customer } from './customer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private repository: Repository<Customer>,
  ) {}

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  find(email: string) {
    return this.repository.find({ where: { email } });
  }

  create(firstName: string, lastName: string, email: string) {
    const customer = this.repository.create({
      firstName,
      lastName,
      email,
    });
    return this.repository.save(customer);
  }

  async update(id: number, attrs: Partial<Customer>) {
    const customer = await this.findOne(id);
    if (!customer) {
      throw new Error('Customer not found');
    }
    Object.assign(customer, attrs);
    return this.repository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    if (!customer) {
      throw new Error('Customer not found');
    }
    return this.repository.remove(customer);
  }
}
