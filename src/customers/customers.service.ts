import { CustomersRepository } from './customers.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  constructor(public customersRepository: CustomersRepository) {}
  getCustomer(id: number) {
    return this.customersRepository.getCustomer(id);
  }

  getCustomers() {
    return this.customersRepository.getCustomers();
  }

  createCustomer(firstName: string, lastName: string, email: string) {
    return this.customersRepository.createCustomer(firstName, lastName, email);
  }
}
