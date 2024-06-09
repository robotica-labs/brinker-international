import { readFile, writeFile } from 'fs/promises';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersRepository {
  async getCustomer(id: number) {
    const contents = await readFile('customers.json', 'utf8');
    const customers = JSON.parse(contents);
    return customers[id];
  }

  async getCustomers() {
    const contents = await readFile('customers.json', 'utf8');
    const customers = JSON.parse(contents);
    return customers;
  }

  async createCustomer(firstName: string, lastName: string, email: string) {
    const contents = await readFile('customers.json', 'utf8');
    const customers = JSON.parse(contents);

    const id = Math.floor(Math.random() * 99);

    customers[id] = { id, firstName, lastName, email };
    await writeFile('customers.json', JSON.stringify(customers));
  }
}
